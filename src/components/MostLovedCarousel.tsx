import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
 import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

type Product = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  count: number;
};

const products: Product[] = [
  { id: 1, image: '/images/adhesive-bra.jpg', title: 'BOOB TAPE', subtitle: 'Secure Hold', count: 24 },
  { id: 2, image: '/images/bikini.jpg', title: 'SUMMER BIKINI', subtitle: 'Beach Ready', count: 12 },
  { id: 3, image: '/images/dress.jpg', title: 'FLORAL DRESS', subtitle: 'Spring Style', count: 8 },
  { id: 4, image: '/images/lingerie.jpg', title: 'LUXE LINGERIE', subtitle: 'Elegant Fit', count: 15 },
  { id: 5, image: '/images/winter.jpg', title: 'COZY JACKET', subtitle: 'Warm & Soft', count: 10 },
];

const MostLovedCarousel: React.FC = () => {
  return (
    <div className="bg-pink-50 py-8">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id} className="w-72">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <Image
                src={p.image}
                alt={p.title}
                width={288}
                height={360}
                className="object-cover w-full h-56"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
              </div>
              <div className="px-4 pb-4 flex items-center justify-between">
                <span className="text-sm font-medium">{p.count} items</span>
                <button className="bg-red-500 text-white text-sm py-1 px-3 rounded-full">SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostLovedCarousel;
