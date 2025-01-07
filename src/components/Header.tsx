import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">VTU Grade Prophet</h1>
        <nav className="space-x-6">
          <a href="#calculator" className="hover:text-gray-300 transition-colors">Calculator</a>
          <a href="#content" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;