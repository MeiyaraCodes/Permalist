import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DB_URL, // Use environment variable
  ssl: {
    rejectUnauthorized: false, // Required for Render-hosted databases
  },
});

export default pool;
