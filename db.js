import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Render-hosted databases
  },
});

export default pool;
