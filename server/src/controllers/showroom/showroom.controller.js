import pool from '../../database/postgres.js';

const showroomController = {
  // Get all showrooms
  getAllShowrooms: async (req, res) => {
    try {
      const query = `
        SELECT * FROM sales.stores 
        ORDER BY store_id ASC
      `;
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching showrooms:', error);
      res.status(500).json({ error: 'Failed to fetch showrooms' });
    }
  },

  // Get showroom by ID
  getShowroomById: async (req, res) => {
    try {
      const { id } = req.params;
      const query = `
        SELECT * FROM sales.stores 
        WHERE store_id = $1
      `;
      const result = await pool.query(query, [id]);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Showroom not found' });
      }
      
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching showroom:', error);
      res.status(500).json({ error: 'Failed to fetch showroom' });
    }
  },

  // Get showroom metrics
  getShowroomMetrics: async (req, res) => {
    try {
      // Get total sales by store
      const salesQuery = `
        SELECT s.store_id, s.store_name, 
               COUNT(DISTINCT o.order_id) as total_orders,
               SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as total_sales
        FROM sales.stores s
        LEFT JOIN sales.orders o ON s.store_id = o.store_id
        LEFT JOIN sales.order_items oi ON o.order_id = oi.order_id
        GROUP BY s.store_id, s.store_name
        ORDER BY total_sales DESC NULLS LAST
      `;
      
      // Get stock info by store
      const stockQuery = `
        SELECT s.store_id, s.store_name, 
               COUNT(DISTINCT st.product_id) as product_count,
               SUM(st.quantity) as total_stock
        FROM sales.stores s
        LEFT JOIN production.stocks st ON s.store_id = st.store_id
        GROUP BY s.store_id, s.store_name
        ORDER BY s.store_id
      `;
      
      // Get staff count by store
      const staffQuery = `
        SELECT s.store_id, s.store_name, COUNT(st.staff_id) as staff_count
        FROM sales.stores s
        LEFT JOIN sales.staffs st ON s.store_id = st.store_id
        GROUP BY s.store_id, s.store_name
        ORDER BY s.store_id
      `;
      
      const [salesResult, stockResult, staffResult] = await Promise.all([
        pool.query(salesQuery),
        pool.query(stockQuery),
        pool.query(staffQuery)
      ]);
      
      // Combine data
      const storeMap = {};
      
      salesResult.rows.forEach(row => {
        storeMap[row.store_id] = {
          store_id: row.store_id,
          store_name: row.store_name,
          total_orders: parseInt(row.total_orders) || 0,
          total_sales: parseFloat(row.total_sales) || 0,
          product_count: 0,
          total_stock: 0,
          staff_count: 0
        };
      });
      
      stockResult.rows.forEach(row => {
        if (!storeMap[row.store_id]) {
          storeMap[row.store_id] = {
            store_id: row.store_id,
            store_name: row.store_name,
            total_orders: 0,
            total_sales: 0,
            product_count: 0,
            total_stock: 0,
            staff_count: 0
          };
        }
        storeMap[row.store_id].product_count = parseInt(row.product_count) || 0;
        storeMap[row.store_id].total_stock = parseInt(row.total_stock) || 0;
      });
      
      staffResult.rows.forEach(row => {
        if (!storeMap[row.store_id]) {
          storeMap[row.store_id] = {
            store_id: row.store_id,
            store_name: row.store_name,
            total_orders: 0,
            total_sales: 0,
            product_count: 0,
            total_stock: 0,
            staff_count: 0
          };
        }
        storeMap[row.store_id].staff_count = parseInt(row.staff_count) || 0;
      });
      
      const metrics = Object.values(storeMap);
      
      res.status(200).json(metrics);
    } catch (error) {
      console.error('Error fetching showroom metrics:', error);
      res.status(500).json({ error: 'Failed to fetch showroom metrics' });
    }
  },

  // Create new showroom
  createShowroom: async (req, res) => {
    try {
      const { store_name, phone, email, street, city, state, zip_code } = req.body;
      
      // Validate required fields
      if (!store_name || !city || !state) {
        return res.status(400).json({ error: 'Store name, city, and state are required' });
      }
      
      const query = `
        INSERT INTO sales.stores (store_name, phone, email, street, city, state, zip_code)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
      `;
      
      const result = await pool.query(query, [
        store_name, phone, email, street, city, state, zip_code
      ]);
      
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating showroom:', error);
      res.status(500).json({ error: 'Failed to create showroom' });
    }
  },

  // Update showroom
  updateShowroom: async (req, res) => {
    try {
      const { id } = req.params;
      const { store_name, phone, email, street, city, state, zip_code } = req.body;
      
      // Check if showroom exists
      const checkQuery = 'SELECT * FROM sales.stores WHERE store_id = $1';
      const checkResult = await pool.query(checkQuery, [id]);
      
      if (checkResult.rows.length === 0) {
        return res.status(404).json({ error: 'Showroom not found' });
      }
      
      const query = `
        UPDATE sales.stores
        SET store_name = COALESCE($1, store_name),
            phone = COALESCE($2, phone),
            email = COALESCE($3, email),
            street = COALESCE($4, street),
            city = COALESCE($5, city),
            state = COALESCE($6, state),
            zip_code = COALESCE($7, zip_code)
        WHERE store_id = $8
        RETURNING *
      `;
      
      const result = await pool.query(query, [
        store_name, phone, email, street, city, state, zip_code, id
      ]);
      
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating showroom:', error);
      res.status(500).json({ error: 'Failed to update showroom' });
    }
  },

  // Delete showroom
  deleteShowroom: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check for dependencies in other tables
      const checkOrdersQuery = 'SELECT COUNT(*) FROM sales.orders WHERE store_id = $1';
      const checkStaffsQuery = 'SELECT COUNT(*) FROM sales.staffs WHERE store_id = $1';
      const checkStocksQuery = 'SELECT COUNT(*) FROM production.stocks WHERE store_id = $1';
      
      const [ordersResult, staffsResult, stocksResult] = await Promise.all([
        pool.query(checkOrdersQuery, [id]),
        pool.query(checkStaffsQuery, [id]),
        pool.query(checkStocksQuery, [id])
      ]);
      
      const orderCount = parseInt(ordersResult.rows[0].count);
      const staffCount = parseInt(staffsResult.rows[0].count);
      const stockCount = parseInt(stocksResult.rows[0].count);
      
      if (orderCount > 0 || staffCount > 0 || stockCount > 0) {
        return res.status(409).json({
          error: 'Cannot delete showroom with associated orders, staff, or stock',
          dependencies: {
            orders: orderCount,
            staff: staffCount,
            stock: stockCount
          }
        });
      }
      
      // Delete the showroom
      const deleteQuery = 'DELETE FROM sales.stores WHERE store_id = $1 RETURNING *';
      const deleteResult = await pool.query(deleteQuery, [id]);
      
      if (deleteResult.rows.length === 0) {
        return res.status(404).json({ error: 'Showroom not found' });
      }
      
      res.status(200).json({ message: 'Showroom deleted successfully' });
    } catch (error) {
      console.error('Error deleting showroom:', error);
      res.status(500).json({ error: 'Failed to delete showroom' });
    }
  },

  // Get products in a showroom
  getShowroomProducts: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check if showroom exists
      const checkQuery = 'SELECT * FROM sales.stores WHERE store_id = $1';
      const checkResult = await pool.query(checkQuery, [id]);
      
      if (checkResult.rows.length === 0) {
        return res.status(404).json({ error: 'Showroom not found' });
      }
      
      const query = `
        SELECT p.product_id, p.product_name, b.brand_name, c.category_name,
               p.model_year, p.list_price, s.quantity
        FROM production.products p
        JOIN production.stocks s ON p.product_id = s.product_id
        JOIN production.brands b ON p.brand_id = b.brand_id
        JOIN production.categories c ON p.category_id = c.category_id
        WHERE s.store_id = $1
        ORDER BY p.product_name
      `;
      
      const result = await pool.query(query, [id]);
      
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching showroom products:', error);
      res.status(500).json({ error: 'Failed to fetch showroom products' });
    }
  }
};

export default showroomController; 