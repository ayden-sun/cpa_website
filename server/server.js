const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to PostgreSQL database');
    release();
  }
});

// Routes

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2',
      [email, username]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const result = await pool.query(
      'INSERT INTO users (name, username, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, username, email, role',
      [name, username, email, hashedPassword, 'user']
    );

    const user = result.rows[0];

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    // Find user by email or username
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $1',
      [emailOrUsername]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.rows[0];

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get webinars endpoint
app.get('/api/webinars', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, title, description, date, time, duration FROM webinars ORDER BY date, time'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching webinars:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user registrations endpoint
app.get('/api/users/:userId/registrations', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await pool.query(`
      SELECT r.*, w.title, w.date, w.time, w.duration
      FROM registrations r
      JOIN webinars w ON r.webinar_id = w.id
      WHERE r.user_id = $1
      ORDER BY w.date, w.time
    `, [userId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Register for webinar endpoint
app.post('/api/registrations', async (req, res) => {
  try {
    const { userId, webinarId } = req.body;

    // Check if already registered
    const existing = await pool.query(
      'SELECT * FROM registrations WHERE user_id = $1 AND webinar_id = $2',
      [userId, webinarId]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Already registered for this webinar' });
    }

    // Create registration
    const result = await pool.query(
      'INSERT INTO registrations (user_id, webinar_id) VALUES ($1, $2) RETURNING *',
      [userId, webinarId]
    );

    res.status(201).json({
      message: 'Registration successful',
      registration: result.rows[0]
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: Get all users
app.get('/api/admin/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, username, email, role, created_at FROM users ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: Get all webinars with registration counts
app.get('/api/admin/webinars', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT w.*,
             COUNT(r.id) as registration_count
      FROM webinars w
      LEFT JOIN registrations r ON w.id = r.webinar_id
      GROUP BY w.id
      ORDER BY w.date, w.time
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching webinars:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: Create webinar
app.post('/api/admin/webinars', async (req, res) => {
  try {
    const { title, description, date, time, duration } = req.body;
    const result = await pool.query(
      'INSERT INTO webinars (title, description, date, time, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, date, time, duration]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating webinar:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: Update webinar
app.put('/api/admin/webinars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, time, duration } = req.body;
    const result = await pool.query(
      'UPDATE webinars SET title = $1, description = $2, date = $3, time = $4, duration = $5 WHERE id = $6 RETURNING *',
      [title, description, date, time, duration, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Webinar not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating webinar:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: Delete webinar
app.delete('/api/admin/webinars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM webinars WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Webinar not found' });
    }
    res.json({ message: 'Webinar deleted successfully' });
  } catch (error) {
    console.error('Error deleting webinar:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
