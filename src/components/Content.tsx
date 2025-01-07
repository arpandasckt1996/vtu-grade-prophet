import React from 'react';

const Content = () => {
  return (
    <section id="content" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About VTU Grade Prophet</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            VTU Grade Prophet is your trusted companion for calculating Semester Grade Point Average (SGPA) 
            for VTU students. Our calculator provides accurate results based on the latest VTU grading system.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <p>Simply input your subject codes, names, credits, and grades. The calculator will instantly 
                compute your SGPA using VTU's official formula.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Instant SGPA calculation</li>
                <li>Support for all VTU schemes</li>
                <li>PDF export functionality</li>
                <li>Easy sharing options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;