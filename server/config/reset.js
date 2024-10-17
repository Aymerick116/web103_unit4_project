import { pool } from './database.js';

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS items (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            );
        `);
        console.log("Tables created successfully!");
    } catch (error) {
        console.error("Error creating tables", error);
    }
};

createTables();
