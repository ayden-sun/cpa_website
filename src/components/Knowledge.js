import React from 'react';

const Knowledge = () => {
  return (
    <section id="knowledge" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">CPA Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What is CPA?</h3>
            <p className="text-gray-700">
              Certified Public Accountant (CPA) is a professional designation for accountants who have passed the CPA exam and met state licensing requirements.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">CPA Exam Sections</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Auditing and Attestation (AUD)</li>
              <li>Business Environment and Concepts (BEC)</li>
              <li>Financial Accounting and Reporting (FAR)</li>
              <li>Regulation (REG)</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Key CPA Skills</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            CPAs need strong analytical skills, attention to detail, knowledge of tax laws, and proficiency in accounting software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
