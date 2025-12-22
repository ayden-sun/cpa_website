import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedules from './components/Schedules';
import Knowledge from './components/Knowledge';
import Register from './components/Register';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <nav className="bg-slate-800 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">CPA Webinar Platform</h1>
                    <div className="space-x-6">
                      <a href="#home" className="hover:text-teal-300 transition-colors">Home</a>
                      <a href="#schedules" className="hover:text-teal-300 transition-colors">Schedules</a>
                      <a href="#knowledge" className="hover:text-teal-300 transition-colors">CPA Knowledge</a>
                      <a href="#register" className="hover:text-teal-300 transition-colors">Register</a>
                    </div>
                  </div>
                </div>
              </nav>

              <Home />
              <Schedules />
              <Knowledge />
              <Register />

              <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                  <p>&copy; 2025 CPA Webinar Platform. All rights reserved.</p>
                </div>
              </footer>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
