"use client";

import React, { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Silk Midi Dress",
    price: "$149.99",
    image: "/images/product1.jpg",
    category: "Dresses",
  },
  {
    id: 2,
    name: "Beige Linen Set",
    price: "$129.99",
    image: "/images/product2.jpg",
    category: "Sets",
  },
  {
    id: 3,
    name: "Summer Blazer",
    price: "$189.99",
    image: "/images/product3.jpg",
    category: "Tops",
  },
  {
    id: 4,
    name: "Pleated Skirt",
    price: "$89.99",
    image: "/images/product4.jpg",
    category: "Bottoms",
  },
  {
    id: 5,
    name: "Floral Maxi Dress",
    price: "$159.99",
    image: "/images/product5.jpg",
    category: "Dresses",
  },
  {
    id: 6,
    name: "Linen Pants",
    price: "$99.99",
    image: "/images/product6.jpg",
    category: "Bottoms",
  },
  {
    id: 7,
    name: "Silk Blouse",
    price: "$119.99",
    image: "/images/product7.jpg",
    category: "Tops",
  },
  {
    id: 8,
    name: "Cotton Jumpsuit",
    price: "$139.99",
    image: "/images/product8.jpg",
    category: "Sets",
  },
];

// Navigation items
const navItems = [
  { name: "NEW ARRIVALS", href: "#" },
  { name: "DRESSES", href: "#" },
  { name: "TOPS", href: "#" },
  { name: "BOTTOMS", href: "#" },
  { name: "OUTERWEAR", href: "#" },
  { name: "ACCESSORIES", href: "#" },
  { name: "SALE", href: "#" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
      <div className="lg:hidden flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-gray-600">←</span>
            </button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-700">Shop</h1>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button aria-label="Cart" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Breadcrumb - Hidden on mobile */}
      <div className="hidden lg:block bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Shop</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6 lg:py-10">
        {/* Page Title and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-serif font-medium text-gray-800 mb-4 lg:mb-0">Shop All</h1>
          
          <div className="flex items-center">
            <div className="mr-4 hidden lg:block">
              <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
              <select 
                id="sort" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-b border-gray-300 py-1 pr-8 bg-transparent focus:outline-none"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
            
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 lg:border lg:border-gray-300 lg:px-4 lg:py-2 lg:rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 lg:pb-0 lg:flex-wrap gap-3 hide-scrollbar">
            {["All", "Dresses", "Sets", "Tops", "Bottoms", "Accessories", "Sale"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <Link href="/product" key={product.id} className="group">
              <div className="bg-gray-50 overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl bg-gray-200">
                    👗
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                  <p className="text-sm font-semibold mt-1 text-gray-900">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-800 bg-gray-800 text-white">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Footer - Hidden on mobile */}
      <footer className="hidden lg:block bg-white border-t border-gray-200 py-12 mt-12">
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

      {/* Mobile Bottom Navigation - Hidden on desktop */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1 text-gray-600">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e97a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-xs mt-1 text-[#e97a7a]">Shop</span>
          </button>
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs mt-1 text-gray-600">Wishlist</span>
          </button>
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1 text-gray-600">Account</span>
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
}
