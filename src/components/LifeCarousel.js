import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import styled, { createGlobalStyle } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';

// 确保轮播效果正常的全局样式
const SwiperGlobalStyles = createGlobalStyle`
  .life-carousel-swiper {
    overflow: hidden !important;
    
    .swiper-slide {
      width: 100% !important;
      height: 100% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    
    .swiper-wrapper {
      align-items: center !important;
    }
    
    /* 确保fade效果正常工作 */
    &.swiper-fade .swiper-slide {
      pointer-events: none;
      transition-property: opacity;
    }
    
    &.swiper-fade .swiper-slide.swiper-slide-active {
      pointer-events: auto;
    }
  }
`;

// 响应式容器
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 650px;
  height: 400px;
  margin: 0 auto;
  overflow: visible;
  position: relative;
  
  @media ${props => props.theme.breakpoints.md} {
    max-width: 500px;
    height: 360px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    max-width: 100%;
    width: 100%;
    height: 320px;
    padding: 0 1rem;
    margin: 0 auto;
  }
  
  @media ${props => props.theme.breakpoints.xs} {
    height: 280px;
    padding: 0 0.5rem;
  }
`;

// 响应式图片样式
const ResponsiveImage = styled.img`
  width: 350px;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  
  @media ${props => props.theme.breakpoints.lg} {
    width: 300px;
    height: 340px;
  }
  
  @media ${props => props.theme.breakpoints.md} {
    width: 250px;
    height: 320px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    width: 90%;
    height: auto;
    max-width: 350px;
    min-height: 280px;
    max-height: 300px;
    object-fit: contain;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }
  
  @media ${props => props.theme.breakpoints.xs} {
    width: 85%;
    max-width: 300px;
    min-height: 240px;
    max-height: 260px;
    border-radius: 5px;
  }
`;

export default function LifeCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  
  const images = [
    "/images/life1.jpg",
    "/images/life2.jpg",
    "/images/life3.jpg",
    "/images/life4.jpg",
    "/images/life5.jpg",
    "/images/life6.jpg",
    "/images/life7.jpg"
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <SwiperGlobalStyles />
      <CarouselContainer>
      <Swiper
        effect="fade"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        fadeEffect={{
          crossFade: true
        }}
        speed={600}
        autoplay={{
          delay: isMobile ? 4000 : 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectFade, Autoplay]}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        className="life-carousel-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={`slide-${index}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: '100%',
              height: '100%',
            }}
          >
            <ResponsiveImage
              src={src}
              alt={`Life ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
    </>
  );
}
