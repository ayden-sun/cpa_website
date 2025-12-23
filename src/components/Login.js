import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For demo, simulate login with database check
    // In real app, this would call API

    // Get users from localStorage (simulating database)
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check for demo admin account
    if ((formData.emailOrUsername === 'admin' || formData.emailOrUsername === 'admin@demo.com') && formData.password === '1234') {
      const user = { id: 1, email: 'admin@demo.com', role: 'admin', name: 'Demo Admin' };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin');
      return;
    }

    // Find user in database by email or username
    const user = users.find(u =>
      (u.email === formData.emailOrUsername || u.username === formData.emailOrUsername) &&
      u.password === formData.password
    );

    if (user) {
      // Set current user session
      localStorage.setItem('user', JSON.stringify({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
      }));
      navigate(user.role === 'admin' ? '/admin' : '/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => window.history.back()}
          className="text-white hover:text-teal-300 transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full space-y-8 p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white border-opacity-20">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-slate-300">
              Sign in to access your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="emailOrUsername" className="sr-only">
                  Email or Username
                </label>
                <input
                  id="emailOrUsername"
                  name="emailOrUsername"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Email or Username"
                  value={formData.emailOrUsername}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Sign in
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
