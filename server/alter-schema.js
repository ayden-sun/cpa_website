const { Pool } = require('pg');
require('dotenv').config({ path: '../.env.local' });

const pool = new Pool({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function alterSchema() {
  try {
    console.log('Updating database schema...');

    // Check if username column exists
    const usernameCheck = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'users' AND column_name = 'username'
    `);

    if (usernameCheck.rows.length === 0) {
      console.log('Adding username column...');
      await pool.query('ALTER TABLE users ADD COLUMN username VARCHAR(255) UNIQUE');
    }

    // Check if password column exists
    const passwordCheck = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'users' AND column_name = 'password'
    `);

    if (passwordCheck.rows.length === 0) {
      console.log('Adding password column...');
      await pool.query('ALTER TABLE users ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT \'password123\'');
    }

    // Check if role column exists
    const roleCheck = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'users' AND column_name = 'role'
    `);

    if (roleCheck.rows.length === 0) {
      console.log('Adding role column...');
      await pool.query('ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT \'user\'');
    } else {
      console.log('Role column already exists');
    }

    // Check if duration column exists in webinars
    const durationCheck = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'webinars' AND column_name = 'duration'
    `);

    if (durationCheck.rows.length === 0) {
      console.log('Adding duration column to webinars...');
      await pool.query('ALTER TABLE webinars ADD COLUMN duration INTERVAL NOT NULL DEFAULT \'2 hours\'');
    }

    console.log('Schema update completed successfully!');
  } catch (error) {
    console.error('Error updating schema:', error);
  } finally {
    await pool.end();
  }
}

alterSchema();
