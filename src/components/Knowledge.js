import React from 'react';

const Knowledge = () => {
  return (
    <section id="knowledge" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">CPA Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">What is CPA?</h3>
            <p className="text-slate-700">
              Certified Public Accountant (CPA) is a professional designation for accountants who have passed the CPA exam and met state licensing requirements.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">CPA Exam Sections</h3>
            <ul className="list-disc list-inside text-slate-700">
              <li>Auditing and Attestation (AUD)</li>
              <li>Business Environment and Concepts (BEC)</li>
              <li>Financial Accounting and Reporting (FAR)</li>
              <li>Regulation (REG)</li>
            </ul>
          </div>
        </div>
        <div className="text-center bg-slate-50 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Key CPA Skills</h3>
          <p className="text-slate-700">
            CPAs need strong analytical skills, attention to detail, knowledge of tax laws, and proficiency in accounting software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
