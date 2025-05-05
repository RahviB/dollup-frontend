import React from 'react'
import Image from 'next/image'
import { Plus, Home, ShoppingBag, ShoppingCart, User, Heart, Search, Sliders } from 'lucide-react'
import MostLovedCarousel from './MostLovedCarousel'

export default function MobileHomePage() {
  const categories = [
    { src: '/images/dress.jpg', label: 'Dresses' },
    { src: '/images/bikini.jpg', label: 'Beachwear' },
    { src: '/images/lingerie.jpg', label: 'Lingeries' },
    { src: '/images/adhesive-bra.jpg', label: 'Accessories' },
  ]

  const reviews = [
    { src: '/images/hero.webp', name: 'Emily R.', text: 'Absolutely love the product! So comfortable.' },
    { src: '/images/lingerie.jpg', name: 'Sophia L.', text: 'Quality is amazing, will buy again.' },
    { src: '/images/winter.jpg', name: 'Olivia K.', text: 'Fast shipping and great customer service.' },
  ]

  return (
    <main className="bg-[#fdfaf5] min-h-screen pb-24 px-4 pt-6">
      {/* Search */}
      <section className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
        <Search className="h-5 w-5 text-[#555]" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 ml-2 outline-none placeholder-[#ccc] text-[#1e1e1e] text-sm"
        />
        <button className="p-1">
          <Sliders className="h-5 w-5 text-[#555]" />
        </button>
      </section>

      {/* Hero Banner */}
      <section className="bg-pink-100 rounded-xl p-4 mb-6 flex items-center space-x-3">
        <Heart className="h-6 w-6 text-pink-500" />
        <div>
          <h1 className="text-lg font-bold text-[#1e1e1e]">👋 Discover your perfect fit</h1>
          <p className="text-sm text-[#555]">New arrivals dropping daily</p>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-6">
        <p className="text-[#1e1e1e] font-semibold text-base mb-3">Categories</p>
        <div className="flex justify-between">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center space-y-1">
              <Image
                src={cat.src}
                alt={cat.label}
                width={80}
                height={80}
                className="rounded-lg object-cover shadow-sm"
              />
              <p className="text-[#555] text-xs">{cat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-6">
        <p className="text-[#1e1e1e] font-semibold text-base mb-3">New Arrivals</p>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm relative">
              <Image
                src="/images/dress.jpg"
                alt="Product"
                width={150}
                height={150}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-[#1e1e1e] text-sm font-bold">Product Name</p>
                <p className="text-[#555] text-xs mt-1">$99.99</p>
              </div>
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                <Plus className="h-4 w-4 text-[#555]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Most Loved */}
      <section className="mb-6">
        <p className="text-[#1e1e1e] font-semibold text-base mb-3">Most Loved</p>
        <MostLovedCarousel />
      </section>

      {/* Client Reviews */}
      <section className="mb-6">
        <p className="text-[#1e1e1e] font-semibold text-base mb-3">Client Reviews</p>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm flex space-x-3">
              <Image
                src={review.src}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[#1e1e1e] text-sm font-medium">{review.name}</p>
                <p className="text-[#555] text-xs mt-1">{review.text}</p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, k) => (
                    <svg
                      key={k}
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.151c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.922-.755 1.688-1.538 1.118l-3.356-2.44a1 1 0 00-1.175 0l-3.356 2.44c-.783.57-1.838-.196-1.538-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.073 9.377c-.783-.57-.38-1.81.588-1.81h4.151a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adult Corner */}
      <section className="mb-6 bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
        <p className="text-[#1e1e1e] font-bold text-base">Adult Corner</p>
        <button className="bg-[#fce6ea] text-[#1e1e1e] text-sm font-medium rounded-full px-3 py-1">
          Explore
        </button>
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-md py-2 px-6 flex justify-between">
        {[
          { icon: <Home className="h-6 w-6" />, label: 'Home', active: true },
          { icon: <ShoppingBag className="h-6 w-6" />, label: 'Shop', active: false },
          { icon: <ShoppingCart className="h-6 w-6" />, label: 'Cart', active: false },
          { icon: <User className="h-6 w-6" />, label: 'Account', active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center text-xs">
            <div className={tab.active ? 'text-[#fce6ea]' : 'text-[#555]'}>
              {tab.icon}
            </div>
            <p className={tab.active ? 'text-[#1e1e1e]' : 'text-[#555]'}>
              {tab.label}
            </p>
          </div>
        ))}
      </nav>
    </main>
  )
}
