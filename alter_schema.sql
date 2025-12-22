-- Add role column to users table
ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'user';

-- Update one user to be admin for demo
UPDATE users SET role = 'admin' WHERE id = 1;
