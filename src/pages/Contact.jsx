import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#f9f6f1] text-[#2f2f2f] px-6 py-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#aa8c5a]"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#aa8c5a]"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#aa8c5a]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#aa8c5a] text-white px-6 py-3 rounded-lg hover:bg-[#8e7248] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Visit our Studio</h2>
              <p>123 Furniture St, Artisan City, CA 90210</p>

              <h3 className="text-xl font-medium mt-6">Call or Email</h3>
              <p className="text-[#aa8c5a] font-semibold">+1 (555) 987-6543</p>
              <p className="text-[#aa8c5a] font-semibold">hello@furniturehouse.com</p>

              <h3 className="text-xl font-medium mt-6">Working Hours</h3>
              <p>Mon – Fri: 10:00am – 6:00pm</p>
              <p>Sat – Sun: By Appointment</p>
            </div>

            {/* Placeholder for Map */}
            <div className="mt-10">
              <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
                Google Maps Embed Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}