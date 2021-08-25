import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

export interface PromoSlideshowContentProps {
  images: string[];
}

export default function Carousel({ images }: PromoSlideshowContentProps) {
  return (
    <div className="relative max-w-full" style={{ width: "800px" }}>
      <Swiper
        loop={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        allowTouchMove={false}
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
