"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('cream');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('description');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
  
  // Sample recommended products
  const recommendedProducts = [
    { id: 1, name: 'Silk Blouse', price: 89.99, image: '/placeholder-product-1.jpg' },
    { id: 2, name: 'Linen Pants', price: 120.50, image: '/placeholder-product-2.jpg' },
    { id: 3, name: 'Cashmere Sweater', price: 199.99, image: '/placeholder-product-3.jpg' },
    { id: 4, name: 'Wool Coat', price: 250.00, image: '/placeholder-product-4.jpg' },
  ];

  // Available sizes
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Available colors
  const colors = [
    { name: 'cream', hex: '#f5f5dc' },
    { name: 'terracotta', hex: '#b35642' },
  ];

  // Product thumbnails (would be actual image paths in production)
  const thumbnails = [
    { id: 0, src: '/placeholder-product-1.jpg' },
    { id: 1, src: '/placeholder-product-2.jpg' },
    { id: 2, src: '/placeholder-product-3.jpg' },
    { id: 3, src: '/placeholder-product-4.jpg' },
  ];

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

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
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">NEW ARRIVALS</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">DRESSES</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">TOPS</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">BOTTOMS</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">OUTERWEAR</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">ACCESSORIES</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">SALE</a>
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
          <h1 className="text-xl font-semibold text-gray-700">Product Detail</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
          {/* Placeholder for user avatar */}
          <div className="w-full h-full bg-amber-200 flex items-center justify-center">
            <span className="text-sm">👩</span>
          </div>
        </div>
      </div>

      {/* Desktop Breadcrumb - Hidden on mobile */}
      <div className="hidden lg:block bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/dresses" className="hover:text-gray-700">Dresses</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Silk Midi Dress</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Product View */}
        <div className="lg:hidden relative min-h-[60vh] bg-gradient-to-b from-amber-100 to-amber-200 rounded-b-3xl overflow-hidden">
          {/* Product Image - Centered */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {/* This would be an actual image in production */}
            <div className="w-3/4 h-3/4 flex items-center justify-center">
              <div className="relative w-full h-full opacity-90">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  👗
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Product Layout */}
        <div className="hidden lg:block container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images - Left Side */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              {/* Main Image */}
              <div className="bg-gray-100 mb-4 aspect-square flex items-center justify-center">
                {/* This would be an actual image in production */}
                <div className="text-8xl">👗</div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex space-x-2">
                {thumbnails.map((thumb) => (
                  <button 
                    key={thumb.id}
                    className={`border p-1 ${selectedThumbnail === thumb.id ? 'border-gray-800' : 'border-gray-200'}`}
                    onClick={() => setSelectedThumbnail(thumb.id)}
                  >
                    <div className="w-20 h-20 bg-gray-100 flex items-center justify-center">
                      {/* This would be an actual thumbnail in production */}
                      <div className="text-2xl">👗</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details - Right Side */}
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-3xl font-serif mb-2">Silk Midi Dress</h1>
              <p className="text-2xl mb-6">$149</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm mb-2">Color: {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</p>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(color.name)}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Size</p>
                  <button 
                    className="text-sm text-gray-600 hover:text-gray-900 underline"
                    onClick={() => setIsSizeGuideOpen(true)}
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 border ${
                        selectedSize === size
                          ? 'border-gray-800 bg-gray-800 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex mb-8">
                <div className="flex border border-gray-300 mr-4">
                  <button 
                    className="px-4 py-2 border-r border-gray-300"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <div className="px-4 py-2 min-w-[40px] text-center">{quantity}</div>
                  <button 
                    className="px-4 py-2 border-l border-gray-300"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="flex-grow bg-gray-800 text-white py-2 px-6 hover:bg-black transition-colors">
                  Add to Cart
                </button>
              </div>
              
              {/* Product Information Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex">
                  <button
                    className={`py-2 px-4 text-sm font-medium ${
                      activeTab === 'description'
                        ? 'border-b-2 border-gray-800 text-gray-800'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`py-2 px-4 text-sm font-medium ${
                      activeTab === 'details'
                        ? 'border-b-2 border-gray-800 text-gray-800'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    Details
                  </button>
                  <button
                    className={`py-2 px-4 text-sm font-medium ${
                      activeTab === 'care'
                        ? 'border-b-2 border-gray-800 text-gray-800'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('care')}
                  >
                    Care
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {activeTab === 'description' && (
                  <p>
                    A flowy silk midi dress with a flattering silhouette, perfect for both day and evening occasions. Features a subtle V-neckline and delicate cap sleeves.
                  </p>
                )}
                {activeTab === 'details' && (
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>100% silk</li>
                      <li>Midi length</li>
                      <li>V-neckline</li>
                      <li>Cap sleeves</li>
                      <li>Side zip closure</li>
                      <li>Fully lined</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'care' && (
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Dry clean only</li>
                      <li>Do not bleach</li>
                      <li>Cool iron if needed</li>
                      <li>Store on padded hanger</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Product Details Section */}
        <div className="lg:hidden px-6 py-6 -mt-6 bg-white rounded-t-3xl z-10 flex-1">
          {/* Product Title */}
          <h2 className="text-2xl font-bold mb-1 text-gray-800">Silk Midi Dress</h2>
          <p className="text-xl font-bold mb-4 text-gray-800">$149</p>
          
          {/* Reviews */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-amber-400">★</span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">45+ Reviews</span>
          </div>

          {/* Color Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2 text-gray-600">Select Color</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-600">Select Size</h3>
              <button 
                className="text-sm text-[#e97a7a] hover:underline"
                onClick={() => setIsSizeGuideOpen(true)}
              >
                Size Guide
              </button>
            </div>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-amber-200 text-amber-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-2 text-gray-600">Description</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              A flowy silk midi dress with a flattering silhouette, perfect for both day and evening occasions. Features a subtle V-neckline and delicate cap sleeves.
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full py-4 px-6 bg-[#fce6ea] text-[#e97a7a] font-semibold rounded-full flex items-center justify-center gap-2 mb-8 hover:bg-[#f8d7dd] transition-colors">
            <span className="text-xl">+</span>
            Add to Cart
          </button>

          {/* Recommended Products */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">You might also like</h3>
              <button className="text-[#e97a7a] text-sm">See All</button>
            </div>
            
            <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
              {recommendedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[150px] bg-gray-50 rounded-xl overflow-hidden shadow-sm flex-shrink-0"
                >
                  <div className="h-24 bg-amber-100 flex items-center justify-center">
                    {/* Placeholder for product image */}
                    <span className="text-2xl">👚</span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-sm font-bold">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Size Guide</h3>
              <button 
                onClick={() => setIsSizeGuideOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <span className="text-gray-500 text-xl">×</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">Size</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Bust (cm)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Waist (cm)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Hips (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">S</td>
                    <td className="border border-gray-200 px-4 py-2">80–84</td>
                    <td className="border border-gray-200 px-4 py-2">60–64</td>
                    <td className="border border-gray-200 px-4 py-2">86–90</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">M</td>
                    <td className="border border-gray-200 px-4 py-2">85–89</td>
                    <td className="border border-gray-200 px-4 py-2">65–69</td>
                    <td className="border border-gray-200 px-4 py-2">91–95</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">L</td>
                    <td className="border border-gray-200 px-4 py-2">90–94</td>
                    <td className="border border-gray-200 px-4 py-2">70–74</td>
                    <td className="border border-gray-200 px-4 py-2">96–100</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">XL</td>
                    <td className="border border-gray-200 px-4 py-2">95–99</td>
                    <td className="border border-gray-200 px-4 py-2">75–79</td>
                    <td className="border border-gray-200 px-4 py-2">101–105</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">XXL</td>
                    <td className="border border-gray-200 px-4 py-2">100–104</td>
                    <td className="border border-gray-200 px-4 py-2">80–84</td>
                    <td className="border border-gray-200 px-4 py-2">106–110</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>These measurements are a general guide. For the best fit, we recommend taking your own measurements or visiting our store for a personalized fitting.</p>
            </div>
          </div>
        </div>
      )}

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

export default ProductDetail;
