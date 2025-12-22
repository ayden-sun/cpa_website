import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    webinar: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processing is not implemented yet. Registration submitted!');
  };

  return (
    <section id="register" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Register for a Webinar</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="webinar" className="block text-gray-700 font-medium mb-2">
              Select Webinar
            </label>
            <select
              id="webinar"
              name="webinar"
              value={formData.webinar}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose a webinar</option>
              <option value="intro">Introduction to CPA</option>
              <option value="tax">Advanced Tax Strategies</option>
              <option value="financial">Financial Planning Basics</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors font-medium"
          >
            Pay $50 and Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
