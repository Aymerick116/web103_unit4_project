import 'dotenv/config';
import pg from 'pg'

const connectionString = process.env.CONNECTION_STRING; // The full connection string

export const pool = new pg.Pool({
    connectionString,
})
