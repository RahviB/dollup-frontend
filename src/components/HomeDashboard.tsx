"use client";

import React from 'react';

const HomeDashboard: React.FC = () => {
  // Sample categories
  const categories = [
    { id: 1, name: 'Dresses', icon: '👗', description: 'Elegant silhouettes for every occasion' },
    { id: 2, name: 'Tops', icon: '👕', description: 'From casual to sophisticated' },
    { id: 3, name: 'Bottoms', icon: '👖', description: 'Tailored perfection for your wardrobe' },
    { id: 4, name: 'Accessories', icon: '👜', description: 'Complete your look with our curated selection' },
  ];

  // Sample products
  const products = [
    { id: 1, name: 'Satin Suit', price: 150.99, image: '/placeholder-product-1.jpg', isNew: true },
    { id: 2, name: 'Summer Dress', price: 89.99, image: '/placeholder-product-2.jpg', isNew: true },
    { id: 3, name: 'Elegant Blouse', price: 65.50, image: '/placeholder-product-3.jpg', isNew: true },
    { id: 4, name: 'Casual Pants', price: 79.99, image: '/placeholder-product-4.jpg', isNew: true },
  ];

  // Navigation items
  const navItems = [
    { name: 'NEW ARRIVALS', href: '#' },
    { name: 'DRESSES', href: '#' },
    { name: 'TOPS', href: '#' },
    { name: 'BOTTOMS', href: '#' },
    { name: 'OUTERWEAR', href: '#' },
    { name: 'ACCESSORIES', href: '#' },
    { name: 'SALE', href: '#' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Desktop Header - Hidden on mobile */}
      <header className="hidden lg:block border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-serif tracking-wider">
              <h1 className="uppercase font-bold">Elegance</h1>
              <p className="text-xs text-gray-500 uppercase">Fashion Boutique</p>
            </div>
            
            <nav className="hidden lg:flex space-x-6">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button aria-label="Account" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button aria-label="Cart" className="text-gray-600 hover:text-gray-900 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

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
        <div className="lg:flex lg:items-center lg:bg-gray-50">
          {/* Mobile Promotional Banner */}
          <div className="lg:hidden px-4">
            <div className="bg-[#fce6ea] rounded-2xl p-4 mb-6 relative overflow-hidden">
              <div className="w-2/3">
                <h3 className="text-2xl font-bold mb-1">New Collections</h3>
                <p className="text-gray-700 mb-4">discount 50% for every first transactions</p>
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
          <div className="hidden lg:flex container mx-auto">
            <div className="w-1/2 p-16 flex flex-col justify-center">
              <h1 className="text-5xl font-serif mb-2">
                Summer <br />
                Collection <span className="text-[#e97a7a]">2025</span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-md">
                Discover our latest collection of lightweight, flowy pieces perfect for warm summer days and balmy evenings.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-black transition-colors">
                  Shop New Arrivals
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
            <div className="w-1/2 bg-gray-100 flex items-center justify-center relative">
              {/* This would be a hero image in production */}
              <div className="w-64 h-64 rounded-full bg-gray-200 opacity-50 absolute"></div>
              <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                <p>FEATURED IMAGE</p>
                <p>Summer Collection Model</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-2">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of timeless pieces designed to elevate your everyday style.
            </p>
          </div>

          {/* Mobile Category Selector - Horizontal scroll */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Categories</h3>
              <button className="text-[#e97a7a]">See All</button>
            </div>
            <div className="flex overflow-x-auto pb-2 gap-4 hide-scrollbar">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#fce6ea] flex items-center justify-center mb-1 flex-shrink-0">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Category Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gray-50 p-8 flex flex-col items-center text-center group hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <button className="uppercase text-sm tracking-wider border-b border-gray-400 pb-1 group-hover:border-gray-900 transition-colors">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif">New Arrivals</h2>
              <a href="#" className="text-sm uppercase tracking-wider hidden lg:block">View All</a>
            </div>
            <p className="text-gray-600 mb-8 hidden lg:block">
              The latest additions to our collection - fresh styles for the season ahead.
            </p>

            {/* Mobile Popular Sales Section */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Popular Sales</h3>
                <button className="text-[#e97a7a]">See All</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {products.slice(0, 2).map((product) => (
                  <div key={product.id} className="bg-gray-100 rounded-2xl overflow-hidden relative">
                    <div className="h-40 bg-amber-100 flex items-center justify-center">
                      {/* Placeholder for product image */}
                      <span className="text-4xl">👚</span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-lg font-bold">${product.price}</p>
                    </div>
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#e97a7a] font-bold">+</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop New Arrivals Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-100 group relative">
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 uppercase">
                      New
                    </div>
                  )}
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for product image */}
                    <span className="text-4xl">👚</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-gray-900 px-4 py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Footer - Hidden on mobile */}
        <footer className="hidden lg:block bg-white border-t border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">About Us</h3>
                <p className="text-gray-600 text-sm">
                  Elegance Fashion Boutique offers curated collections of timeless, elegant pieces for the modern woman.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                  <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
                  <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-gray-900">Sale</a></li>
                  <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-2">Subscribe to receive updates on new arrivals and special promotions.</p>
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
