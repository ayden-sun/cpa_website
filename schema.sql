-- Database schema for CPA Webinar Platform

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Webinars table
CREATE TABLE webinars (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Registrations table
CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    webinar_id INT REFERENCES webinars(id),
    payment_id INT REFERENCES payments(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample webinar data
INSERT INTO webinars (title, description, date, time) VALUES
('Introduction to CPA', 'Learn the basics of Certified Public Accounting', '2025-01-15', '14:00:00'),
('Advanced Tax Strategies', 'Deep dive into tax planning and strategies', '2025-02-10', '15:00:00'),
('Financial Planning Basics', 'Essential financial planning principles', '2025-03-05', '13:00:00');
