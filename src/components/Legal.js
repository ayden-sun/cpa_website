import React from 'react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Legal Information</h1>
          <p className="text-xl">Important terms, policies, and disclaimers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Terms of Service */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Terms of Service</h2>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Acceptance of Terms</h3>
                <p>By accessing and using the CPA Webinar Platform, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Service Description</h3>
                <p>The CPA Webinar Platform provides access to professional development webinars and certificates of completion for Continuing Professional Education (CPE) requirements. These services are designed to assist Certified Public Accountants in meeting annual license renewal requirements.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Certificate Limitations</h3>
                <p><strong>Important:</strong> Certificates provided through this platform are designed to document completion of CPE activities for license renewal purposes. They do not constitute full academic courses or comprehensive professional training programs. Users are responsible for ensuring that completed activities meet their specific state's licensing requirements.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4. User Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the platform only for lawful purposes</li>
                  <li>Verify that completed activities meet your licensing requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Privacy Policy</h2>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, email address, and professional information provided during registration</li>
                  <li>Payment information processed securely through our payment partners</li>
                  <li>Usage data including webinar access and completion records</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide access to webinar content and track completion</li>
                  <li>To process payments and issue certificates</li>
                  <li>To communicate important updates and support</li>
                  <li>To improve our services and develop new offerings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Refund Policy</h2>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">General Policy</h3>
                <p>All webinar registrations are final. Due to the digital nature of our services, we do not offer refunds once access has been granted to webinar content.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Exceptions</h3>
                <p>Refunds may be considered in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Technical issues preventing access to purchased content (within 24 hours of purchase)</li>
                  <li>Duplicate purchases or billing errors</li>
                  <li>Cancellation requests made before webinar access is granted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Certificate Validity</h3>
                <p>Once a certificate of completion has been issued, no refunds will be provided. Certificates are valid for the CPE reporting period in which they were issued.</p>
              </div>
            </div>
          </section>

          {/* Certificate Disclaimer */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Certificate Disclaimer</h2>

            <div className="space-y-6 text-slate-700">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important Notice:</strong> Certificates issued through this platform are provided as documentation of CPE activity completion. They do not guarantee acceptance by state licensing boards or professional organizations. Users are solely responsible for verifying that completed activities meet their specific licensing requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Certificate Limitations</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Certificates document self-study webinar completion only</li>
                  <li>Individual states may have different CPE requirements and acceptance policies</li>
                  <li>Certificates are issued electronically and may be downloaded for record-keeping</li>
                  <li>Certificate validity is subject to the rules of the issuing CPE sponsor</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">User Responsibility</h3>
                <p>By using this service, you acknowledge that:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>You are responsible for ensuring CPE activities meet your licensing requirements</li>
                  <li>You will maintain appropriate documentation for audit purposes</li>
                  <li>You understand that state boards have final authority over CPE acceptance</li>
                  <li>You will report CPE activities according to your state's requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability Limitations */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Liability Limitations</h2>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Availability</h3>
                <p>While we strive to provide uninterrupted access to our services, we do not guarantee that the platform will be available at all times. We are not liable for any damages arising from service interruptions or technical issues.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Content Accuracy</h3>
                <p>The webinar content is provided for educational purposes. While we make reasonable efforts to ensure accuracy, we do not warrant that all information is complete, accurate, or up-to-date. Users should verify information independently.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Professional Advice</h3>
                <p>The content provided through our webinars does not constitute professional advice. Users should consult with qualified professionals for specific situations requiring expert guidance.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Maximum Liability</h3>
                <p>In no event shall CPA Webinar Platform be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-slate-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Questions About Our Policies?</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these terms, policies, or our services, please contact us:
            </p>
            <div className="text-slate-700">
              <p>Email: legal@cpawebinars.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Accounting Street, Finance City, FC 12345</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Legal;
