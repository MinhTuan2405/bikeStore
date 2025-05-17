import pool from "../../../database/postgres.js";
import express from "express";

const apiRouter = express.Router ()

// GET all products
apiRouter.get('/products', async (req, res) => {
    try {
        // Execute a SQL query to select all products
        const result = await pool.query('SELECT * FROM production.products ORDER BY product_id');
        // Send the query results as a JSON response
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET product by ID
apiRouter.get('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get product ID from URL parameters

    // Validate if ID is a number
    if (isNaN(productId)) {
        return res.status(400).json({ error: 'Invalid product ID' });
    }

    try {
        // Execute a SQL query to select a product by ID
        const result = await pool.query('SELECT * FROM production.products WHERE product_id = $1', [productId]);

        // Check if a product was found
        if (result.rows.length === 0) {
            // If not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Product not found' });
        }

        // Send the found product as a JSON response
        res.json(result.rows[0]);
    } catch (err) {
        console.error(`Error fetching product with ID ${productId}:`, err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST: Create new product
apiRouter.post('/products', async (req, res) => {
    const { product_name, brand_id, category_id, model_year, list_price } = req.body;

    // Basic validation
    if (!product_name || !brand_id || !category_id || !model_year || list_price === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Parse values
    const parsedBrandId = parseInt(brand_id, 10);
    const parsedCategoryId = parseInt(category_id, 10);
    const parsedModelYear = parseInt(model_year, 10);
    const parsedListPrice = parseFloat(list_price);

    if (
        isNaN(parsedBrandId) ||
        isNaN(parsedCategoryId) ||
        isNaN(parsedModelYear) ||
        isNaN(parsedListPrice) ||
        parsedListPrice < 0
    ) {
        return res.status(400).json({ error: 'Invalid data types or negative values.' });
    }

    try {
        // Check if brand and category exist
        const [brandExists, categoryExists] = await Promise.all([
            pool.query('SELECT 1 FROM production.brands WHERE brand_id = $1', [parsedBrandId]),
            pool.query('SELECT 1 FROM production.categories WHERE category_id = $1', [parsedCategoryId])
        ]);

        if (brandExists.rowCount === 0) {
            return res.status(400).json({ error: `Brand ID ${parsedBrandId} does not exist.` });
        }

        if (categoryExists.rowCount === 0) {
            return res.status(400).json({ error: `Category ID ${parsedCategoryId} does not exist.` });
        }

        // Insert new product (let SERIAL handle product_id)
        const insertResult = await pool.query(
            `INSERT INTO production.products
                (product_name, brand_id, category_id, model_year, list_price)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [product_name.trim(), parsedBrandId, parsedCategoryId, parsedModelYear, parsedListPrice]
        );

        const newProduct = insertResult.rows[0];

        // Sync the sequence just in case (especially if data was inserted manually before)
        await pool.query(`
            SELECT setval(
                pg_get_serial_sequence('production.products', 'product_id'),
                GREATEST((SELECT MAX(product_id) FROM production.products), 1)
            )
        `);

        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// // POST create new product
// apiRouter.post('/products', async (req, res) => {
//     const { product_name, brand_id, category_id, model_year, list_price } = req.body; // Get product details from request body

//     // Basic validation (more robust validation should be done)
//     if (!product_name || !brand_id || !category_id || !model_year || list_price === undefined) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Convert numeric fields to appropriate types
//     const parsedBrandId = parseInt(brand_id, 10);
//     const parsedCategoryId = parseInt(category_id, 10);
//     const parsedModelYear = parseInt(model_year, 10);
//     const parsedListPrice = parseFloat(list_price);

//     // Further validation
//     if (isNaN(parsedBrandId) || isNaN(parsedCategoryId) || isNaN(parsedModelYear) || isNaN(parsedListPrice) || parsedListPrice < 0) {
//          return res.status(400).json({ error: 'Invalid data types for brand_id, category_id, model_year, or list_price' });
//     }


//     try {
//         // Optional: Check if brand_id and category_id exist before inserting product
//         const brandExists = await pool.query('SELECT 1 FROM production.brands WHERE brand_id = $1', [parsedBrandId]);
//         const categoryExists = await pool.query('SELECT 1 FROM production.categories WHERE category_id = $1', [parsedCategoryId]);

//         if (brandExists.rows.length === 0) {
//             return res.status(400).json({ error: `Brand with ID ${brand_id} does not exist.` });
//         }
//          if (categoryExists.rows.length === 0) {
//             return res.status(400).json({ error: `Category with ID ${category_id} does not exist.` });
//         }

//         const id = Math.floor(1000 + Math.random() * 9000);


//         // Execute a SQL query to insert a new product and return the inserted row
//         const result = await pool.query(
//             'INSERT INTO production.products (product_id, product_name, brand_id, category_id, model_year, list_price) VALUES ($1, $2, $3, $4, $5. $6) RETURNING *',
//             [id, product_name, parsedBrandId, parsedCategoryId, parsedModelYear, parsedListPrice]
//         );

//         // Send the newly created product with 201 Created status
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error('Error creating product:', err);
//         // Send a 500 Internal Server Error response
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// PUT update product by ID
apiRouter.put('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get product ID from URL parameters
    const { product_name, brand_id, category_id, model_year, list_price } = req.body; // Get updated details from request body

    // Validate if ID is a number
    if (isNaN(productId)) {
        return res.status(400).json({ error: 'Invalid product ID' });
    }

     // Basic validation for update fields
    if (!product_name || !brand_id || !category_id || !model_year || list_price === undefined) {
        return res.status(400).json({ error: 'Missing required fields for update' });
    }

     // Convert numeric fields to appropriate types
    const parsedBrandId = parseInt(brand_id, 10);
    const parsedCategoryId = parseInt(category_id, 10);
    const parsedModelYear = parseInt(model_year, 10);
    const parsedListPrice = parseFloat(list_price);

     // Further validation
    if (isNaN(parsedBrandId) || isNaN(parsedCategoryId) || isNaN(parsedModelYear) || isNaN(parsedListPrice) || parsedListPrice < 0) {
         return res.status(400).json({ error: 'Invalid data types for brand_id, category_id, model_year, or list_price' });
    }


    try {
         // Optional: Check if brand_id and category_id exist before updating product
        const brandExists = await pool.query('SELECT 1 FROM production.brands WHERE brand_id = $1', [parsedBrandId]);
        const categoryExists = await pool.query('SELECT 1 FROM production.categories WHERE category_id = $1', [parsedCategoryId]);

        if (brandExists.rows.length === 0) {
            return res.status(400).json({ error: `Brand with ID ${brand_id} does not exist.` });
        }
         if (categoryExists.rows.length === 0) {
            return res.status(400).json({ error: `Category with ID ${category_id} does not exist.` });
        }


        // Execute a SQL query to update the product and return the updated row
        const result = await pool.query(
            'UPDATE production.products SET product_name = $1, brand_id = $2, category_id = $3, model_year = $4, list_price = $5 WHERE product_id = $6 RETURNING *',
            [product_name, parsedBrandId, parsedCategoryId, parsedModelYear, parsedListPrice, productId]
        );

        // Check if any row was updated
        if (result.rows.length === 0) {
            // If no row was updated, the product wasn't found
            return res.status(404).json({ error: 'Product not found' });
        }

        // Send the updated product as a JSON response
        res.json(result.rows[0]);
    } catch (err) {
        console.error(`Error updating product with ID ${productId}:`, err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE product by ID
apiRouter.delete('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get product ID from URL parameters

    // Validate if ID is a number
    if (isNaN(productId)) {
        return res.status(400).json({ error: 'Invalid product ID' });
    }

    try {
        // Execute a SQL query to delete the product
        const result = await pool.query('DELETE FROM production.products WHERE product_id = $1', [productId]);

        // Check if any row was deleted
        if (result.rowCount === 0) {
            // If no row was deleted, the product wasn't found
            return res.status(404).json({ error: 'Product not found' });
        }

        // Send a 200 OK response indicating success
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(`Error deleting product with ID ${productId}:`, err);
        // Send a 500 Internal Server Error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default apiRouter