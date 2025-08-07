// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About <span className="text-amber-700">FurnitureHouse</span></h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Crafting comfort with design at the core — FurnitureHouse brings timeless furniture to modern homes.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Craftsmanship", desc: "Each piece is built with care, using the finest materials and enduring techniques." },
            { title: "Sustainability", desc: "We source responsibly and create with intention, minimizing waste and maximizing durability." },
            { title: "Customer First", desc: "We listen, design, and deliver to meet your everyday lifestyle and aesthetic." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-amber-700 text-4xl mb-4">🪑</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
      {/* Timeline / Story */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-12 relative border-l-4 border-amber-700 pl-8">
            {[
              { year: "2015", text: "FurnitureHouse was founded in a small Toronto garage, with a vision to blend art and utility." },
              { year: "2017", text: "Expanded into a full workshop and began local furniture exhibitions." },
              { year: "2020", text: "Launched our first online collection and began delivering across North America." },
              { year: "Today", text: "We serve thousands of homes and design spaces that feel lived in and loved." }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="absolute -left-4 w-8 h-8 bg-amber-700 text-white flex items-center justify-center rounded-full font-bold">{item.year[0]}</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-amber-700">{item.year}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </motion.div>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
                <h4 className="font-semibold text-lg">Team Member {i}</h4>
                <p className="text-sm text-gray-500">Role/Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to bring comfort home?</h2>
          <p className="text-gray-600 mb-6">Explore our curated collections or reach out to customize your dream setup.</p>
          <a href="/collections" className="inline-block bg-amber-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-800 transition">
            Browse Collections
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;