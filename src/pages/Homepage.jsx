import React, { useEffect, useState } from "react";
import SofaLoader from "../components/SofaLoader";
import HeroVideo from "../components/HeroVideo";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import leafAnimation from "../animations/leaves falling.json";
import chairAnimation from "../animations/sofa.json";
import wrenchAnimation from "../animations/Hammer.json";
import Slider from "react-slick";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SofaLoader />;

  const features = [
    { title: "Sustainable Materials", desc: "We use ethically sourced hardwood.", icon: leafAnimation },
    { title: "Timeless Design", desc: "Classic craftsmanship with modern aesthetics.", icon: chairAnimation },
    { title: "Lifetime Support", desc: "We’re here long after purchase.", icon: wrenchAnimation },
  ];

  const collection = [
    { name: "Sofa", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop" },
    { name: "Dining Set", img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&auto=format&fit=crop" },
    { name: "Bed Frame", img: "https://plus.unsplash.com/premium_photo-1661694497699-90eee9b1aa32?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const testimonials = [
    { text: "Absolutely beautiful pieces. Solid build quality!", name: "Alex D." },
    { text: "Furniture arrived perfectly. Highly recommend.", name: "Samantha P." },
    { text: "Elegant design, comfortable and durable.", name: "Michael T." },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <main className="bg-[#fdfaf6] font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
            Timeless Wooden Elegance
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8">
            Handcrafted furniture made to last generations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 transition rounded-xl text-lg shadow-xl"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Featured Collection
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {collection.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Crafted with precision. Designed for elegance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Why Choose Furniture House?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <Lottie animationData={feature.icon} className="w-24 h-24" loop />
                <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-[#fcf7ef] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-14">
          <motion.img
            src="https://images.unsplash.com/photo-1749572859224-49be3cb3e109?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=900&q=80"
            alt="Craftsman at work"
            className="rounded-2xl shadow-xl w-full object-cover"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Craft, Your Comfort</h2>
            <p className="text-lg text-gray-700 mb-6">
              Each piece is thoughtfully designed and made from sustainably sourced hardwood using age-old joinery techniques for unmatched quality and longevity.
            </p>
            <button className="px-6 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-14">What Our Customers Say</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#fffaf3] p-6 rounded-2xl shadow-md mx-4">
                <div className="mb-3 text-amber-500 text-xl">★★★★★</div>
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <p className="text-sm font-medium text-gray-800">— {t.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-amber-50 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 -z-10 animate-pulse-slow"></div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Ready to Elevate Your Space?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover pieces that reflect your personality and enhance your everyday living.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-amber-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-amber-800 transition shadow-md"
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
};

export default Homepage;