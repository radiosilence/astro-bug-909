import React from "react";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/lazy/lazy.min.css";
import SwiperCore, { A11y, Autoplay, EffectFade, Lazy } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([A11y, EffectFade, Autoplay, Lazy]);

export interface PromoSlideshowContentProps {
  images: string[];
}

export function Carousel({ images }: PromoSlideshowContentProps) {
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
