// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">FurnitureHouse</h2>
          <p>Crafted furniture that tells your story. We blend timeless design with modern materials.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="space-x-4 text-xl">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} FurnitureHouse. All rights reserved. Designed and Developed by <a href='https://hrwason.com'>HrWason WebSolutions</a></p>
    </footer>
  );
};

export default Footer;