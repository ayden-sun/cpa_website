import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedules from './components/Schedules';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Login from './components/Login';
import Register from './components/Signup';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Schedules />

              <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                  <p>&copy; 2025 CPA Webinar Platform. All rights reserved.</p>
                </div>
              </footer>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
