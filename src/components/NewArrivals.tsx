import React, { useRef } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  price: string;
}

const products: Product[] = [
  { id: 1, image: '/images/hero.webp', category: 'Dresses', name: 'Silk Midi Dress', price: '$149' },
  { id: 2, image: '/images/winter.jpg', category: 'Outerwear', name: 'Linen Blend Blazer', price: '$189' },
  { id: 3, image: '/images/bikini.jpg', category: 'Bottoms', name: 'High-Waisted Wide Leg Pants', price: '$129' },
  { id: 4, image: '/images/dress.jpg', category: 'Tops', name: 'Satin Slip Top', price: '$89' },
];

const NewArrivals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({ left: scrollLeft + (direction === 'left' ? -clientWidth : clientWidth), behavior: 'smooth' });
  };

  return (
    <>
      {/* Hide only New Arrivals on mobile */}
      <div className="hidden sm:block">
        <section aria-labelledby="new-arrivals-title" className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="new-arrivals-title" className="text-2xl font-semibold text-gray-900">
                  New Arrivals
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  The latest additions to our collection – fresh styles for the season ahead.
                </p>
              </div>
            </div>

            <div ref={scrollRef} className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {products.map((product) => (
                <div key={product.id} className="min-w-[200px] md:min-w-[240px] lg:min-w-[280px]">
                  <div className="relative bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold uppercase px-2 py-1">
                      New
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">{product.category}</p>
                    <h3 className="mt-1 text-sm font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 rounded-full bg-white shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 rounded-full bg-white shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <section aria-labelledby="adult-corner-title" className="relative h-64 mt-12">
        <Image
          src="/images/lingerie.jpg"
          alt="Adult Corner"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 id="adult-corner-title" className="text-3xl font-bold">
            SPICE UP YOUR LOVE LIFE
          </h2>
          <p className="mt-2 text-sm tracking-widest">ADULT CORNER</p>
        </div>
      </section>

      <section aria-labelledby="women-essentials-title" className="bg-[#f5f1e7] py-12">
        <div className="container mx-auto px-4">
          <h2 id="women-essentials-title" className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Most Loved
          </h2>
          <div className="flex space-x-6">
            <div className="w-1/4">
              <div className="relative bg-white">
                <Image
                  src="/images/boob-tape.jpg"
                  alt="Boob Tape"
                  width={280}
                  height={280}
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-100 text-pink-600 text-xs font-semibold uppercase px-2 py-1 rounded">
                  Hot
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Boob Tape</h3>
              <p className="mt-1 text-md text-gray-900">Rs 832.00</p>
              <button className="mt-4 w-full border border-pink-500 text-pink-500 font-bold uppercase py-2 bg-white rounded">
                Add to Cart
              </button>
            </div>
            <div className="w-1/4">
              <div className="relative bg-white">
                <Image
                  src="/images/shapewear.jpg"
                  alt="Shapewear"
                  width={280}
                  height={280}
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-100 text-pink-600 text-xs font-semibold uppercase px-2 py-1 rounded">
                  Hot
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Shapewear</h3>
              <p className="mt-1 text-md text-gray-900">Rs 832.00</p>
              <button className="mt-4 w-full border border-pink-500 text-pink-500 font-bold uppercase py-2 bg-white rounded">
                Add to Cart
              </button>
            </div>
            <div className="w-1/4">
              <div className="relative bg-white">
                <Image
                  src="/images/adhesive-bra.jpg"
                  alt="Adhesive Bra"
                  width={280}
                  height={280}
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-100 text-pink-600 text-xs font-semibold uppercase px-2 py-1 rounded">
                  Hot
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Adhesive Bra</h3>
              <p className="mt-1 text-md text-gray-900">Rs 832.00</p>
              <button className="mt-4 w-full border border-pink-500 text-pink-500 font-bold uppercase py-2 bg-white rounded">
                Add to Cart
              </button>
            </div>
            <div className="w-1/4">
              <div className="relative bg-white">
                <Image
                  src="/images/nipple-cover.jpg"
                  alt="Nipple Cover"
                  width={280}
                  height={280}
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-100 text-pink-600 text-xs font-semibold uppercase px-2 py-1 rounded">
                  Hot
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Nipple Cover</h3>
              <p className="mt-1 text-md text-gray-900">Rs 832.00</p>
              <button className="mt-4 w-full border border-pink-500 text-pink-500 font-bold uppercase py-2 bg-white rounded">  
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
