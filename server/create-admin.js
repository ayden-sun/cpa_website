const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '../.env.local' });

const pool = new Pool({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function createDemoAdmin() {
  try {
    console.log('Creating demo admin user...');

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('1234', saltRounds);

    // Check if admin already exists
    const existingAdmin = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      ['admin', 'admin@demo.com']
    );

    if (existingAdmin.rows.length > 0) {
      console.log('Demo admin user already exists');
      return;
    }

    // Create demo admin user
    const result = await pool.query(
      'INSERT INTO users (name, username, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      ['Demo Admin', 'admin', 'admin@demo.com', hashedPassword, 'admin']
    );

    console.log('Demo admin user created successfully:', result.rows[0].username);
  } catch (error) {
    console.error('Error creating demo admin:', error);
  } finally {
    await pool.end();
  }
}

createDemoAdmin();
