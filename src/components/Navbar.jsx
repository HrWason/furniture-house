// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Furniture<span className="text-amber-700">House</span>
        </h1>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="text-gray-700 hover:text-amber-700">Home</a>
          <a href="/collections" className="text-gray-700 hover:text-amber-700">Collections</a>
          <a href="/about" className="text-gray-700 hover:text-amber-700">About</a>
          <a href="/contact" className="text-gray-700 hover:text-amber-700">Contact</a>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu (only visible if open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-700 hover:text-amber-700">Home</a>
            <a href="/collections" className="text-gray-700 hover:text-amber-700">Collections</a>
            <a href="/about" className="text-gray-700 hover:text-amber-700">About</a>
            <a href="/contact" className="text-gray-700 hover:text-amber-700">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;