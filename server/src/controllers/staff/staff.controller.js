import pool from '../../database/postgres.js';

const staffController = {
  // Get all staff
  getAllStaff: async (req, res) => {
    try {
      const query = `
        SELECT s.*, 
               st.store_name,
               m.first_name AS manager_first_name, 
               m.last_name AS manager_last_name
        FROM sales.staffs s
        LEFT JOIN sales.stores st ON s.store_id = st.store_id
        LEFT JOIN sales.staffs m ON s.manager_id = m.staff_id
        ORDER BY s.staff_id
      `;
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching staff:', error);
      res.status(500).json({ error: 'Failed to fetch staff' });
    }
  },

  // Get staff by ID
  getStaffById: async (req, res) => {
    try {
      const { id } = req.params;
      const query = `
        SELECT s.*, 
               st.store_name,
               m.first_name AS manager_first_name, 
               m.last_name AS manager_last_name
        FROM sales.staffs s
        LEFT JOIN sales.stores st ON s.store_id = st.store_id
        LEFT JOIN sales.staffs m ON s.manager_id = m.staff_id
        WHERE s.staff_id = $1
      `;
      const result = await pool.query(query, [id]);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Staff member not found' });
      }
      
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching staff member:', error);
      res.status(500).json({ error: 'Failed to fetch staff member' });
    }
  },

  // Get staff metrics
  getStaffMetrics: async (req, res) => {
    try {
      // Get sales metrics by staff
      const salesQuery = `
        SELECT s.staff_id, s.first_name, s.last_name, st.store_name,
               COUNT(DISTINCT o.order_id) as total_orders,
               SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as total_sales
        FROM sales.staffs s
        LEFT JOIN sales.orders o ON s.staff_id = o.staff_id
        LEFT JOIN sales.order_items oi ON o.order_id = oi.order_id
        LEFT JOIN sales.stores st ON s.store_id = st.store_id
        GROUP BY s.staff_id, s.first_name, s.last_name, st.store_name
        ORDER BY total_sales DESC NULLS LAST
      `;
      
      // Get staff count by activity status
      const activityQuery = `
        SELECT active, COUNT(*) as count
        FROM sales.staffs
        GROUP BY active
      `;
      
      // Get staff count by store
      const storeStaffQuery = `
        SELECT st.store_name, COUNT(*) as staff_count
        FROM sales.staffs s
        JOIN sales.stores st ON s.store_id = st.store_id
        GROUP BY st.store_name
        ORDER BY staff_count DESC
      `;
      
      const [salesResult, activityResult, storeStaffResult] = await Promise.all([
        pool.query(salesQuery),
        pool.query(activityQuery),
        pool.query(storeStaffQuery)
      ]);
      
      // Process results
      const staffPerformance = salesResult.rows.map(row => ({
        staff_id: row.staff_id,
        name: `${row.first_name} ${row.last_name}`,
        store: row.store_name,
        total_orders: parseInt(row.total_orders) || 0,
        total_sales: parseFloat(row.total_sales) || 0
      }));
      
      const activityStats = {
        active: 0,
        inactive: 0
      };
      
      activityResult.rows.forEach(row => {
        if (row.active) {
          activityStats.active = parseInt(row.count);
        } else {
          activityStats.inactive = parseInt(row.count);
        }
      });
      
      const storeStaffDistribution = storeStaffResult.rows.map(row => ({
        store: row.store_name,
        staff_count: parseInt(row.staff_count)
      }));
      
      const metrics = {
        staffPerformance,
        activityStats,
        storeStaffDistribution,
        total_staff: activityStats.active + activityStats.inactive
      };
      
      res.status(200).json(metrics);
    } catch (error) {
      console.error('Error fetching staff metrics:', error);
      res.status(500).json({ error: 'Failed to fetch staff metrics' });
    }
  },

  // Create new staff member
  createStaff: async (req, res) => {
    try {
      const { first_name, last_name, email, phone, active, store_id, manager_id } = req.body;
      
      // Validate required fields
      if (!first_name || !last_name || !email || !store_id) {
        return res.status(400).json({ 
          error: 'First name, last name, email, and store ID are required' 
        });
      }
      
      // Check if store exists
      if (store_id) {
        const storeCheck = await pool.query(
          'SELECT store_id FROM sales.stores WHERE store_id = $1',
          [store_id]
        );
        if (storeCheck.rows.length === 0) {
          return res.status(404).json({ error: 'Store not found' });
        }
      }
      
      // Check if manager exists if provided
      if (manager_id) {
        const managerCheck = await pool.query(
          'SELECT staff_id FROM sales.staffs WHERE staff_id = $1',
          [manager_id]
        );
        if (managerCheck.rows.length === 0) {
          return res.status(404).json({ error: 'Manager not found' });
        }
      }
      
      // Check for email uniqueness
      const emailCheck = await pool.query(
        'SELECT staff_id FROM sales.staffs WHERE email = $1',
        [email]
      );
      if (emailCheck.rows.length > 0) {
        return res.status(409).json({ error: 'Email already in use' });
      }
      
      const query = `
        INSERT INTO sales.staffs (
          first_name, last_name, email, phone, active, store_id, manager_id
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
      `;
      
      const result = await pool.query(query, [
        first_name, 
        last_name, 
        email, 
        phone, 
        active !== undefined ? active : true, 
        store_id, 
        manager_id
      ]);
      
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating staff member:', error);
      res.status(500).json({ error: 'Failed to create staff member' });
    }
  },

  // Update staff member
  updateStaff: async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, email, phone, active, store_id, manager_id } = req.body;
      
      // Check if staff exists
      const staffCheck = await pool.query(
        'SELECT * FROM sales.staffs WHERE staff_id = $1',
        [id]
      );
      
      if (staffCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Staff member not found' });
      }
      
      // Check if store exists if provided
      if (store_id) {
        const storeCheck = await pool.query(
          'SELECT store_id FROM sales.stores WHERE store_id = $1',
          [store_id]
        );
        if (storeCheck.rows.length === 0) {
          return res.status(404).json({ error: 'Store not found' });
        }
      }
      
      // Check if manager exists if provided
      if (manager_id) {
        // Cannot be their own manager
        if (manager_id == id) {
          return res.status(400).json({ error: 'Staff cannot be their own manager' });
        }
        
        const managerCheck = await pool.query(
          'SELECT staff_id FROM sales.staffs WHERE staff_id = $1',
          [manager_id]
        );
        if (managerCheck.rows.length === 0) {
          return res.status(404).json({ error: 'Manager not found' });
        }
      }
      
      // Check for email uniqueness if changed
      if (email && email !== staffCheck.rows[0].email) {
        const emailCheck = await pool.query(
          'SELECT staff_id FROM sales.staffs WHERE email = $1',
          [email]
        );
        if (emailCheck.rows.length > 0) {
          return res.status(409).json({ error: 'Email already in use' });
        }
      }
      
      const query = `
        UPDATE sales.staffs
        SET first_name = COALESCE($1, first_name),
            last_name = COALESCE($2, last_name),
            email = COALESCE($3, email),
            phone = COALESCE($4, phone),
            active = COALESCE($5, active),
            store_id = COALESCE($6, store_id),
            manager_id = $7
        WHERE staff_id = $8
        RETURNING *
      `;
      
      // For manager_id, allow setting to NULL with explicit null
      const result = await pool.query(query, [
        first_name, last_name, email, phone, active, store_id, 
        manager_id === null ? null : manager_id || staffCheck.rows[0].manager_id, 
        id
      ]);
      
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating staff member:', error);
      res.status(500).json({ error: 'Failed to update staff member' });
    }
  },

  // Delete staff member
  deleteStaff: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check if staff member exists
      const staffCheck = await pool.query(
        'SELECT * FROM sales.staffs WHERE staff_id = $1',
        [id]
      );
      
      if (staffCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Staff member not found' });
      }
      
      // Check if there are orders associated with this staff
      const ordersCheck = await pool.query(
        'SELECT COUNT(*) FROM sales.orders WHERE staff_id = $1',
        [id]
      );
      
      if (parseInt(ordersCheck.rows[0].count) > 0) {
        return res.status(409).json({ 
          error: 'Cannot delete staff member with associated orders',
          dependencies: {
            orders: parseInt(ordersCheck.rows[0].count)
          }
        });
      }
      
      // Check if there are staff members with this staff as manager
      const managedStaffCheck = await pool.query(
        'SELECT COUNT(*) FROM sales.staffs WHERE manager_id = $1',
        [id]
      );
      
      if (parseInt(managedStaffCheck.rows[0].count) > 0) {
        return res.status(409).json({ 
          error: 'Cannot delete staff member who is a manager',
          dependencies: {
            managed_staff: parseInt(managedStaffCheck.rows[0].count)
          }
        });
      }
      
      // Delete the staff member
      const deleteQuery = 'DELETE FROM sales.staffs WHERE staff_id = $1 RETURNING *';
      const deleteResult = await pool.query(deleteQuery, [id]);
      
      res.status(200).json({ 
        message: 'Staff member deleted successfully',
        deleted_staff: deleteResult.rows[0]
      });
    } catch (error) {
      console.error('Error deleting staff member:', error);
      res.status(500).json({ error: 'Failed to delete staff member' });
    }
  },

  // Get staff by store ID
  getStaffByStore: async (req, res) => {
    try {
      const { storeId } = req.params;
      
      // Check if store exists
      const storeCheck = await pool.query(
        'SELECT store_id FROM sales.stores WHERE store_id = $1',
        [storeId]
      );
      
      if (storeCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Store not found' });
      }
      
      const query = `
        SELECT s.*, 
               m.first_name AS manager_first_name, 
               m.last_name AS manager_last_name
        FROM sales.staffs s
        LEFT JOIN sales.staffs m ON s.manager_id = m.staff_id
        WHERE s.store_id = $1
        ORDER BY s.staff_id
      `;
      
      const result = await pool.query(query, [storeId]);
      
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching store staff:', error);
      res.status(500).json({ error: 'Failed to fetch store staff' });
    }
  }
};

export default staffController; 