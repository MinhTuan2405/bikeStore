import pool from "../../database/postgres.js";
import express from 'express'

const apiRouter = express.Router ()

// GET all brands
apiRouter.get('/brands', async (req, res) => {
    try {
        // Execute a SQL query to select all brands
        const result = await pool.query('SELECT * FROM production.brands ORDER BY brand_id');
        // Send the query results as a JSON response
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching brands:', err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET brand by ID
apiRouter.get('/brands/:id', async (req, res) => {
    const brandId = parseInt(req.params.id, 10); // Get brand ID from URL parameters

    // Validate if ID is a number
    if (isNaN(brandId)) {
        return res.status(400).json({ error: 'Invalid brand ID' });
    }

    try {
        // Execute a SQL query to select a brand by ID
        const result = await pool.query('SELECT * FROM production.brands WHERE brand_id = $1', [brandId]);

        // Check if a brand was found
        if (result.rows.length === 0) {
            // If not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Brand not found' });
        }

        // Send the found brand as a JSON response
        res.json(result.rows[0]);
    } catch (err) {
        console.error(`Error fetching brand with ID ${brandId}:`, err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST create new brand
apiRouter.post('/brands', async (req, res) => {
    const { brand_name } = req.body; // Get brand_name from request body

    // Validate if brand_name is provided
    if (!brand_name || typeof brand_name !== 'string') {
        return res.status(400).json({ error: 'brand_name is required and must be a string' });
    }

    try {
        // Execute a SQL query to insert a new brand and return the inserted row
        const result = await pool.query(
            'INSERT INTO production.brands (brand_name) VALUES ($1) RETURNING *',
            [brand_name]
        );

        // Send the newly created brand with 201 Created status
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creating brand:', err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE brand by ID
apiRouter.delete('/brands/:id', async (req, res) => {
    const brandId = parseInt(req.params.id, 10); // Get brand ID from URL parameters

    // Validate if ID is a number
    if (isNaN(brandId)) {
        return res.status(400).json({ error: 'Invalid brand ID' });
    }

     try {
        // Optional: Check if there are products associated with this brand
        const productCount = await pool.query('SELECT COUNT(*) FROM production.products WHERE brand_id = $1', [brandId]);
        if (parseInt(productCount.rows[0].count, 10) > 0) {
            // If products exist, prevent deletion and send a 409 Conflict response
            return res.status(409).json({ error: 'Cannot delete brand with associated products.' });
        }

        // Execute a SQL query to delete the brand
        const result = await pool.query('DELETE FROM production.brands WHERE brand_id = $1', [brandId]);

        // Check if any row was deleted
        if (result.rowCount === 0) {
            // If no row was deleted, the brand wasn't found
            return res.status(404).json({ error: 'Brand not found' });
        }

        // Send a 200 OK response indicating success
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (err) {
        console.error(`Error deleting brand with ID ${brandId}:`, err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default apiRouter