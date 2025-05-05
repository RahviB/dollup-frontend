"use client";

import React from 'react';
import NewArrivals from './NewArrivals';


const HomeDashboard: React.FC = () => {
  // Categories with images
  const categories = [
    { id: 1, name: 'Dresses', icon: '👗', description: 'Elegant silhouettes for every occasion', image: '/images/dress.jpg' },
    { id: 2, name: 'Beachwear', icon: '👙', description: 'Stylish swimwear for sunny getaways', image: '/images/bikini.jpg' },
    { id: 3, name: 'Lingeries', icon: '✨', description: 'Delicate pieces for your intimate moments', image: '/images/lingerie.jpg' },
    { id: 4, name: 'Winter', icon: '❄️', description: 'Cozy essentials for the cold season', image: '/images/winter.jpg' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Removed the desktop header with navigation as we're using the global Navbar component */}

      {/* Mobile Top Bar - Hidden on desktop */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200 flex items-center justify-center">
            {/* Placeholder for profile image */}
            <span className="text-2xl">👩</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">Welcome</h2>
            <p className="text-gray-400">Hi Alina!</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-xl">🔔</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Search Section - Hidden on desktop */}
        <div className="lg:hidden px-4 pt-4">
          <div className="relative mb-6">
            <div className="flex items-center bg-gray-100 rounded-full p-3">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-full outline-none text-gray-700"
              />
              <button className="ml-2 text-gray-400">⚙️</button>
            </div>
          </div>
        </div>

        {/* Hero Section - Different styles for mobile and desktop */}
        <div className="lg:flex lg:items-center">
          {/* Mobile Promotional Banner */}
          <div className="lg:hidden px-4">
            <div className="bg-[#fce6ea] rounded-2xl p-4 mb-6 relative overflow-hidden">
              <div className="w-2/3">
                <h3 className="text-2xl font-bold mb-1">New Collections</h3>
                <p className="text-gray-700 mb-4">
                  discount 50% for every first transactions
                </p>
                <button className="bg-[#e97a7a] text-white px-6 py-2 rounded-full font-medium hover:bg-[#d56c6c] transition-colors">
                  Buy Now
                </button>
              </div>
              {/* This would be an image in production */}
              <div className="absolute right-0 bottom-0 w-1/3 h-full flex items-end justify-end">
                <div className="w-24 h-32 bg-amber-200 rounded-t-full opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Desktop Hero Section */}
          <div className="hidden lg:block relative w-full h-[650px]">
            <img
              src="/images/hero.webp"
              alt="Doll Up Boutique - Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20">
              <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
                Define Your Signature Look
              </h1>
              <p className="text-white mt-4 text-xl drop-shadow">
                Timeless. Confident. Made for Every Moment.
              </p>
              <a
                href="/shop"
                className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
              >
                Shop New Arrivals
              </a>
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-2">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of timeless pieces
              designed to elevate your everyday style.
            </p>
          </div>

          {/* Mobile Category Selector - Horizontal scroll */}
          <div className="md:hidden mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Categories</h3>
              <button className="text-[#e97a7a]">See All</button>
            </div>
            <div className="flex overflow-x-auto pb-2 gap-4 hide-scrollbar">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-1 flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Category Grid with Images */}
          <div className="hidden sm:grid grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative group overflow-hidden h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                  <p className="text-white text-sm mb-4 opacity-90">
                    {category.description}
                  </p>
                  <button className="uppercase text-sm tracking-wider border-b border-white pb-1 group-hover:border-opacity-100 transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
<NewArrivals />
        <footer className="hidden lg:block bg-white border-t border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">About Us</h3>
                <p className="text-gray-600 text-sm">
                  Elegance Fashion Boutique offers curated collections of
                  timeless, elegant pieces for the modern woman.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Subscribe to receive updates on new arrivals and special
                  promotions.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-300 px-3 py-2 text-sm flex-grow"
                  />
                  <button className="bg-gray-900 text-white px-4 py-2 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
              <p>© 2025 Elegance Fashion Boutique. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Bottom Navigation - Hidden on desktop */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#e97a7a] text-white rounded-t-3xl p-4">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <span>🏠</span>
            <span className="text-xs">Menu</span>
          </button>
          <button className="flex flex-col items-center">
            <span>🛒</span>
            <span className="text-xs">Cart</span>
          </button>
          <button className="flex flex-col items-center">
            <span>❤️</span>
            <span className="text-xs">Like</span>
          </button>
        </div>
      </div>

      {/* Custom styles for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomeDashboard;
