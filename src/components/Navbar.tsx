'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  LogOut, 
  Heart, 
  Package, 
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClothingOpen, setIsClothingOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Sample search suggestions
  const searchSuggestions = [
    'Red satin dress',
    'Black lace top',
    'Summer beach wear',
    'Floral maxi dress'
  ];

  // Sample cart count
  const cartCount = 3;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16">
                <Image 
                  src="/images/logo.png" 
                  alt="Doll Up Boutique" 
                  width={64} 
                  height={64} 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/shop?filter=new" 
              className="text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
            >
              NEW ARRIVALS
            </Link>
            
            {/* Clothing Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
                onClick={() => setIsClothingOpen(!isClothingOpen)}
              >
                CLOTHING
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isClothingOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link 
                    href="/shop?category=dresses" 
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase text-sm"
                  >
                    DRESSES
                  </Link>
                  <Link 
                    href="/shop?category=tops" 
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase text-sm"
                  >
                    TOPS
                  </Link>
                  <Link 
                    href="/shop?category=bottoms" 
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase text-sm"
                  >
                    BOTTOMS
                  </Link>
                  <Link 
                    href="/shop?category=outerwear" 
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase text-sm"
                  >
                    OUTERWEAR
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/shop?filter=beachwear" 
              className="text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
            >
              BEACHWEAR
            </Link>
            
            <Link 
              href="/shop?filter=lingerie" 
              className="text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
            >
              LINGERIE
            </Link>
            
            <Link 
              href="/shop?filter=accessories" 
              className="text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
            >
              ACCESSORIES
            </Link>
            
            <Link 
              href="/shop?filter=sale" 
              className="text-gray-700 hover:text-pink-500 transition-colors uppercase text-sm tracking-wide"
            >
              <span className="text-pink-500 font-medium">SALE</span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center border rounded-full overflow-hidden bg-gray-50 hover:bg-white focus-within:bg-white transition-colors">
                <input
                  type="text"
                  placeholder="Search: red dress, satin top..."
                  className="py-2 pl-4 pr-10 w-48 md:w-64 focus:outline-none bg-transparent"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                />
                <Search className="h-5 w-5 text-gray-400 mr-3" />
              </div>
              
              {/* Search Suggestions */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md py-2 z-10">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Account Icon & Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
              >
                <User className="h-6 w-6" />
              </button>
              
              {isAccountOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link 
                    href="/account" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <User className="h-4 w-4 mr-2" />
                    My Account
                  </Link>
                  <Link 
                    href="/orders" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    My Orders
                  </Link>
                  <Link 
                    href="/favorites" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    My Favorites
                  </Link>
                  <Link 
                    href="/points" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    My Points
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link 
                    href="/logout" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </div>
              )}
            </div>
            
            {/* Cart Icon with Badge */}
            <div className="relative">
              <Link href="/cart" className="text-gray-700 hover:text-pink-500 transition-colors">
                <ShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
