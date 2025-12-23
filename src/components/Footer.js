import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">CPA Webinar Platform</h3>
            <p className="text-slate-300 text-sm mb-4">
              Empowering accounting professionals through innovative continuing education and certification programs.
            </p>
            <p className="text-slate-400 text-xs">
              © 2025 CPA Webinar Platform. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#schedules" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Webinar Schedules</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Certificate Programs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">CPE Tracking</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Professional Development</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Refund Policy</Link></li>
              <li><Link to="/legal" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Certificate Disclaimer</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Contact Us</Link></li>
              <li><a href="mailto:support@cpawebinars.com" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Email Support</a></li>
              <li><a href="tel:+15551234567" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">Phone: (555) 123-4567</a></li>
              <li><Link to="/about" className="text-slate-300 hover:text-teal-300 text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              Professional continuing education for certified public accountants.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-teal-300 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-teal-300 text-sm transition-colors">Accessibility</a>
              <a href="#" className="text-slate-400 hover:text-teal-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
