import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#403E43] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VTU Grade Prophet</h3>
            <p className="text-gray-300">Your trusted SGPA calculator for VTU students.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors">Calculator</a></li>
              <li><a href="#content" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300">This calculator is not officially affiliated with VTU. Please verify results with your institution.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} VTU Grade Prophet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;