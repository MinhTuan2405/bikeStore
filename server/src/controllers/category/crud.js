import pool from "../../database/postgres.js";
import express from 'express'

const apiRouter = express.Router ()

// GET all categories
apiRouter.get('/categories', async (req, res) => {
  try {
    // Execute a SQL query to select all categories
    const result = await pool.query('SELECT * FROM production.categories ORDER BY category_id');
    // Send the query results as a JSON response
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching categories:', err);
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET category by ID
apiRouter.get('/categories/:id', async (req, res) => {
  const categoryId = parseInt(req.params.id, 10); // Get category ID from URL parameters

  // Validate if ID is a number
  if (isNaN(categoryId)) {
    return res.status(400).json({ error: 'Invalid category ID' });
  }

  try {
    // Execute a SQL query to select a category by ID
    const result = await pool.query('SELECT * FROM production.categories WHERE category_id = $1', [categoryId]);

    // Check if a category was found
    if (result.rows.length === 0) {
      // If not found, send a 404 Not Found response
      return res.status(404).json({ error: 'Category not found' });
    }

    // Send the found category as a JSON response
    res.json(result.rows[0]);
  } catch (err) {
    console.error(`Error fetching category with ID ${categoryId}:`, err);
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST create new category
apiRouter.post('/categories', async (req, res) => {
  const { category_name } = req.body; // Get category_name from request body

  // Validate if category_name is provided
  if (!category_name || typeof category_name !== 'string') {
    return res.status(400).json({ error: 'category_name is required and must be a string' });
  }

  try {
    // Execute a SQL query to insert a new category and return the inserted row
    const result = await pool.query(
      'INSERT INTO production.categories (category_name) VALUES ($1) RETURNING *',
      [category_name]
    );

    // Send the newly created category with 201 Created status
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating category:', err);
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE category by ID
apiRouter.delete('/categories/:id', async (req, res) => {
  const categoryId = parseInt(req.params.id, 10); // Get category ID from URL parameters

  // Validate if ID is a number
  if (isNaN(categoryId)) {
    return res.status(400).json({ error: 'Invalid category ID' });
  }

  try {
    // Optional: Check if there are products associated with this category
    const productCount = await pool.query('SELECT COUNT(*) FROM production.products WHERE category_id = $1', [categoryId]);
    if (parseInt(productCount.rows[0].count, 10) > 0) {
        // If products exist, prevent deletion and send a 409 Conflict response
        return res.status(409).json({ error: 'Cannot delete category with associated products.' });
    }

    // Execute a SQL query to delete the category
    const result = await pool.query('DELETE FROM production.categories WHERE category_id = $1', [categoryId]);

    // Check if any row was deleted
    if (result.rowCount === 0) {
      // If no row was deleted, the category wasn't found
      return res.status(404).json({ error: 'Category not found' });
    }

    // Send a 200 OK response indicating success
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(`Error deleting category with ID ${categoryId}:`, err);
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default apiRouter