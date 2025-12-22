-- Demo data for CPA Webinar Platform

-- Insert demo users
INSERT INTO users (name, email) VALUES
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Bob Johnson', 'bob@example.com'),
('Alice Williams', 'alice@example.com');

-- Insert demo payments
INSERT INTO payments (user_id, amount, status) VALUES
(1, 50.00, 'completed'),
(2, 50.00, 'pending'),
(3, 50.00, 'completed'),
(4, 50.00, 'failed');

-- Insert demo registrations
INSERT INTO registrations (user_id, webinar_id, payment_id) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 1, 4);
