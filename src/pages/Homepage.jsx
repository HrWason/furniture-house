// src/pages/Homepage.jsx
import React, { useEffect, useState } from 'react';
import SofaLoader from '../components/SofaLoader';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <SofaLoader />;
  }

  return (
    <main className="bg-[#fdfaf6] font-sans">
      {/* Hero */}
      <section className="h-screen relative flex items-center justify-center text-center px-6 bg-gray-300">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="z-10 text-white max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">Timeless Wooden Elegance</h1>
          <p className="text-xl md:text-2xl mb-8">Handcrafted furniture made to last generations.</p>
          <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 transition rounded-xl text-lg shadow-lg">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Collection</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { name: "Sofa", placeholder: "https://via.placeholder.com/600x400?text=Sofa" },
            { name: "Dining Set", placeholder: "https://via.placeholder.com/600x400?text=Dining+Set" },
            { name: "Bed Frame", placeholder: "https://via.placeholder.com/600x400?text=Bed+Frame" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.placeholder}
                alt={item.name}
                className="w-full h-60 object-cover bg-gray-200"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-3">Crafted with precision. Designed for elegance.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-14">
          <img
            src="https://via.placeholder.com/600x400?text=Craftsmanship"
            alt="Craftsman at work"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Craft, Your Comfort</h2>
            <p className="text-lg text-gray-700 mb-6">
              Each piece is thoughtfully designed and made from sustainably sourced hardwood using age-old joinery techniques for unmatched quality and longevity.
            </p>
            <button className="px-6 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-amber-50 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Elevate Your Space?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover pieces that reflect your personality and enhance your everyday living.
        </p>
        <button className="bg-amber-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-amber-800 transition shadow-md">
          Get Started
        </button>
      </section>
    </main>
  );
};

export default Homepage;