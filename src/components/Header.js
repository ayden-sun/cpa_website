import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const scrollToSchedules = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on homepage, scroll to schedules section
      const schedulesSection = document.getElementById('schedules');
      if (schedulesSection) {
        schedulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and then scroll
      window.location.href = '/#schedules';
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-slate-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-teal-600 transition-colors">
            CPA Webinar Platform
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/#home" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <a
              href="#schedules"
              onClick={scrollToSchedules}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium cursor-pointer"
            >
              Schedules
            </a>
            <Link to="/about" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

        </div>

        {/* Mobile menu button - for future enhancement */}
        <div className="md:hidden mt-4">
          <button className="text-slate-700 hover:text-teal-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
