// controllers/itemsController.js
import { pool } from '../config/database.js';

// Get all items
export const getItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Failed to fetch items" });
    }
};

// Get a specific item by ID
export const getItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching item:", error);
        res.status(500).json({ error: "Failed to fetch item" });
    }
};

// Create a new item
export const createItem = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO items (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [name, description, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({ error: "Failed to create item" });
    }
};

// Update an item
export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const result = await pool.query(
            'UPDATE items SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
            [name, description, price, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ error: "Failed to update item" });
    }
};

// Delete an item
export const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).json({ error: "Failed to delete item" });
    }
};
