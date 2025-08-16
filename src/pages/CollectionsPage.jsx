import React, { useState, useEffect } from 'react';
import SofaLoader from '../components/SofaLoader';

const categories = ['All', 'Modern', 'Vintage', 'Minimalist', 'Luxury', 'Compact'];

const allCollections = [
  { title: 'Modern 3-Seater Sofa', category: 'Modern', description: 'Simple. Elegant. Spacious.', image: 'https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Vintage Armchair', category: 'Vintage', description: 'Classic curves and cozy feel.', image: 'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Minimalist Coffee Table', category: 'Minimalist', description: 'Function meets design.', image: 'https://images.unsplash.com/photo-1647967527216-adea2f078e07?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Luxe Sectional', category: 'Luxury', description: 'Luxury seating for large spaces.', image: 'https://images.unsplash.com/photo-1598299827130-5aa1d5149c8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Compact Dining Table', category: 'Compact', description: 'Perfect for small apartments.', image: 'https://images.unsplash.com/photo-1649086145350-d7979d2c1c8f?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Statement Lounge', category: 'Luxury', description: 'Standout design piece.', image: 'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredCollections =
    selectedCategory === 'All'
      ? allCollections
      : allCollections.filter(item => item.category === selectedCategory);

  if (loading) return <SofaLoader />;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-[#fefaf3]">
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        Discover Our Collections
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12 sticky top-24 z-10 bg-[#fefaf3] py-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition
              ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-400 hover:text-white'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {filteredCollections.map(({ title, description, image }, i) => (
          <div
            key={i}
            className="group rounded-3xl shadow-lg bg-white overflow-hidden transition duration-500 hover:shadow-2xl hover:scale-105"
            style={{
              animation: 'fadeUp 0.6s ease forwards',
              animationDelay: `${i * 150}ms`,
              opacity: 0,
              transform: 'translateY(25px)',
            }}
          >
            <div className="relative h-48 sm:h-52 md:h-64 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-30 pointer-events-none" />
              {/* Gloss sweep */}
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-80 animate-gloss-sweep" />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glossSweep {
          0% {
            left: -50%;
          }
          100% {
            left: 150%;
          }
        }
        .animate-gloss-sweep {
          animation: glossSweep 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Collections;