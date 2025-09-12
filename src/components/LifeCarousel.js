import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function LifeCarousel() {
  const images = [
    "/images/life1.jpg",
    "/images/life2.jpg",
    "/images/life3.jpg",
    "/images/life4.jpg",
    "/images/life5.jpg",
    "/images/life6.jpg",
    "/images/life7.jpg"
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "650px",
        height: "650px",
        margin: "0 auto",
        overflow: "hidden",
       
      }}
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}  // ✅ 只显示一张
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center", // ✅ 居中
              alignItems: "center"
            }}
          >
            <img
              src={src}
              alt={`Life ${index + 1}`}
              style={{
                width: "60%",   // ✅ 图片宽度占容器80%
                height: "90%",  // ✅ 图片高度占容器80%
                objectFit: "cover",
                borderRadius: "5px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
