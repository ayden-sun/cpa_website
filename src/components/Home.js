import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
      <div className="absolute top-4 right-4 space-x-4">
        <a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Log In
        </a>
        <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign Up
        </a>
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to CPA Webinar Platform</h1>
        <p className="text-xl mb-8">Join our webinars to enhance your CPA knowledge and skills.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert-Led Webinars</h3>
            <p>Learn from certified CPA professionals with years of experience in accounting and finance.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Flexible Scheduling</h3>
            <p>Access on-demand recordings or join live sessions at times that work for your schedule.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Career Advancement</h3>
            <p>Boost your CPA exam preparation and advance your career in accounting and finance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
