// src/pages/Collections.jsx
import React, { useState, useEffect } from 'react';
import SofaLoader from '../components/SofaLoader';

const categories = ['All', 'Modern', 'Vintage', 'Minimalist', 'Luxury', 'Compact'];

const allCollections = [
  { title: 'Modern 3-Seater Sofa', category: 'Modern', description: 'Simple. Elegant. Spacious.', image: 'https://via.placeholder.com/400x300?text=Modern+Sofa' },
  { title: 'Vintage Armchair', category: 'Vintage', description: 'Classic curves and cozy feel.', image: 'https://via.placeholder.com/400x300?text=Vintage+Armchair' },
  { title: 'Minimalist Coffee Table', category: 'Minimalist', description: 'Function meets design.', image: 'https://via.placeholder.com/400x300?text=Minimalist+Table' },
  { title: 'Luxe Sectional', category: 'Luxury', description: 'Luxury seating for large spaces.', image: 'https://via.placeholder.com/400x300?text=Luxe+Sectional' },
  { title: 'Compact Loveseat', category: 'Compact', description: 'Perfect for small apartments.', image: 'https://via.placeholder.com/400x300?text=Compact+Loveseat' },
  { title: 'Statement Lounge', category: 'Luxury', description: 'Standout design piece.', image: 'https://via.placeholder.com/400x300?text=Statement+Lounge' },
];

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const filteredCollections =
    selectedCategory === 'All'
      ? allCollections
      : allCollections.filter(item => item.category === selectedCategory);


  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans bg-[#fefaf3]">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        Discover Our Collections
      </h2>

      {/* Filter Bar */}
      <div className="flex justify-center space-x-5 mb-14">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition
              ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-400 hover:text-white'
              }
            `}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Cards */}
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {filteredCollections.map(({ title, description, image }, i) => (
          <div
            key={i}
            className="group relative rounded-3xl shadow-lg bg-white overflow-hidden cursor-pointer transform transition duration-700 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(251,191,36,0.4)] hover:drop-shadow-lg"
            tabIndex={0}
            role="button"
            aria-label={`View collection: ${title}`}
            style={{
              animation: 'fadeUp 0.5s ease forwards',
              animationDelay: `${i * 150}ms`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30 pointer-events-none rounded-t-3xl" />
              {/* shiny gloss sweep */}
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 pointer-events-none rounded-t-3xl group-hover:opacity-70 animate-gloss-sweep" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

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
          animation: glossSweep 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Collections;