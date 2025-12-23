import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About CPA Webinar Platform</h1>
          <p className="text-xl">Empowering accounting professionals through innovative education</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-slate-700 mb-6">
              To provide accessible, high-quality CPA education through live webinars and on-demand content,
              helping accounting professionals advance their careers and stay current with industry standards.
            </p>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">What We Offer</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Expert-led webinar sessions</li>
              <li>Comprehensive CPA exam preparation</li>
              <li>Continuing professional education credits</li>
              <li>Interactive Q&A sessions</li>
              <li>On-demand video library</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-teal-600 mb-2">Expert Instructors</h4>
                <p className="text-slate-700">Learn from certified CPA professionals with decades of experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-teal-600 mb-2">Flexible Learning</h4>
                <p className="text-slate-700">Access content anytime, anywhere with our comprehensive platform.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-teal-600 mb-2">Industry Recognition</h4>
                <p className="text-slate-700">Our programs are recognized by leading accounting organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
