import React from 'react';
import Link from 'next/link';

const WelcomeScreen: React.FC = () => {
  // Placeholder colors for model circles
  const placeholderColors = [
    'bg-pink-300',
    'bg-purple-300',
    'bg-blue-300',
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full px-4 py-8 md:py-16 flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Welcome to Doll Up Boutique
        </h1>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-center text-gray-600 mb-8 max-w-2xl">
          Discover your fashion identity & shop the latest trends
        </p>
        
        {/* Circular Model Images (Placeholders) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8 w-full">
          {placeholderColors.map((color, index) => (
            <div 
              key={index} 
              className={`w-48 h-48 md:w-56 md:h-56 rounded-full ${color} border-4 border-pink-200 shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center`}
            >
              <span className="text-white text-lg font-semibold">Model {index + 1}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <Link href="/shop" passHref>
          <button 
            className="px-8 py-3 text-lg font-semibold text-white rounded-full 
                      bg-gradient-to-r from-pink-400 to-purple-500 
                      hover:from-pink-500 hover:to-purple-600 
                      transform transition-transform hover:scale-105 
                      shadow-lg"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
