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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredCollections =
    selectedCategory === 'All'
      ? allCollections
      : allCollections.filter(item => item.category === selectedCategory);



  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-[#fefaf3]">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        Discover Our Collections
      </h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
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
            className="rounded-3xl shadow-lg bg-white overflow-hidden transition duration-300 hover:shadow-xl"
            style={{
              animation: 'fadeUp 0.5s ease forwards',
              animationDelay: `${i * 120}ms`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <div className="relative h-48 sm:h-52 md:h-64 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-20 pointer-events-none" />
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-70 animate-gloss-sweep" />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 hover:text-amber-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
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