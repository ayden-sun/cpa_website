import React from 'react';
import Home from './components/Home';
import Schedules from './components/Schedules';
import Knowledge from './components/Knowledge';
import Register from './components/Register';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">CPA Webinar Platform</h1>
            <div className="space-x-6">
              <a href="#home" className="hover:text-blue-200 transition-colors">Home</a>
              <a href="#schedules" className="hover:text-blue-200 transition-colors">Schedules</a>
              <a href="#knowledge" className="hover:text-blue-200 transition-colors">CPA Knowledge</a>
              <a href="#register" className="hover:text-blue-200 transition-colors">Register</a>
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
    </div>
  );
}

export default App;
