import pkg from 'pg';
const { Pool } = pkg;

// Create a PostgreSQL connection pool
let pool;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'bikeStore',
    password: process.env.POSTGRES_PASSWORD || 'minhtuan2405',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
  });
}

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL database, current time:', res.rows[0].now);
  }
});

export default pool;
