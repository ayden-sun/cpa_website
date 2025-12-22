import React from 'react';

const Schedules = () => {
  const webinars = [
    {
      title: 'Introduction to CPA',
      date: 'January 15, 2025',
      time: '2:00 PM EST',
    },
    {
      title: 'Advanced Tax Strategies',
      date: 'February 10, 2025',
      time: '3:00 PM EST',
    },
    {
      title: 'Financial Planning Basics',
      date: 'March 5, 2025',
      time: '1:00 PM EST',
    },
  ];

  return (
    <section id="schedules" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Webinar Schedules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">{webinar.title}</h3>
              <p className="text-slate-600 mb-2">Date: {webinar.date}</p>
              <p className="text-slate-600 mb-4">Time: {webinar.time}</p>
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedules;
