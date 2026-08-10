"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  items: React.ReactNode[];

  slidesPerView?: number;
  spaceBetween?: number;

  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };
}

export default function Slider({
  items,
  slidesPerView = 3,
  spaceBetween = 24,

  breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
}: SliderProps) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!flex !justify-center"
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination mt-8 flex items-center justify-center" />

      <style jsx global>{`
        .swiper-pagination {
          position: static !important;
          margin-top: 14px !important;
        }

        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          margin: 0 4px !important;

          background-color: #e4e7ec !important;
          opacity: 0.4 !important;

          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 28px !important;
          opacity: 1 !important;
          background-color: #f97316 !important;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}