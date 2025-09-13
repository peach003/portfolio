import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 呼吸光晕动画
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 30px rgba(199, 114, 202, 0.6); }
  50% { box-shadow: 0 0 60px rgba(0, 240, 255, 0.9); }
`;

// 移动端简化动画
const mobileGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(199, 114, 202, 0.4); }
  50% { box-shadow: 0 0 25px rgba(0, 240, 255, 0.6); }
`;

const Container = styled.div`
  position: relative;
  width: ${props => props.$isMobile ? '200px' : '350px'};
  height: ${props => props.$isMobile ? '200px' : '350px'};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* 确保在grid布局中正确显示 */
  grid-column: 2;
  align-self: center;
  justify-self: center;
  
  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
    grid-column: 1;
    margin: 2rem auto;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
    margin: 1.5rem auto;
  }
`;

// 呼吸光晕 - 响应式
const GlowRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.$isMobile ? '220px' : '370px'};
  height: ${props => props.$isMobile ? '220px' : '370px'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  
  /* 根据设备选择动画 */
  animation: ${props => props.$isMobile ? mobileGlow : glow} 4s ease-in-out infinite;
  
  /* 移动端性能优化 */
  will-change: box-shadow;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    animation: ${mobileGlow} 3s ease-in-out infinite;
  }
  
  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
    animation: ${mobileGlow} 2.5s ease-in-out infinite;
  }
  
  /* 如果用户偏好减少动画，则禁用动画 */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    box-shadow: 0 0 20px rgba(199, 114, 202, 0.5);
  }
`;

// 透明中空渐变描边 - 响应式
const GradientBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.$isMobile ? '220px' : '370px'};
  height: ${props => props.$isMobile ? '220px' : '370px'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: ${props => props.$isMobile ? '3px' : '5px'} solid transparent;
  background: linear-gradient(135deg, #9d4edd, #00b4d8) border-box;
  background-clip: border-box;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
    border-width: 2px;
  }
`;

// 头像容器 - 响应式
const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.$isMobile ? '200px' : '350px'};
  height: ${props => props.$isMobile ? '200px' : '350px'};
  border-radius: 50%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

// 头像 - 添加加载处理
const MyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block; /* 确保图片显示 */
  
  /* 图片加载时的处理 */
  &[src=""], &:not([src]) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

// 加载占位符
const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${props => props.$isMobile ? '14px' : '16px'};
`;

export default function BackgroundAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleImageLoad = () => {
    console.log('头像加载成功');
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error('头像加载失败: /images/me.jpg');
    setImageError(true);
  };

  return (
    <Container $isMobile={isMobile}>
      <GlowRing $isMobile={isMobile} />
      <GradientBorder $isMobile={isMobile} />
      <ImageWrapper $isMobile={isMobile}>
        <MyImage 
          src="/images/me.jpg" 
          alt="头像"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ 
            opacity: imageError ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        />
        {imageError && (
          <LoadingPlaceholder $isMobile={isMobile}>
            Lynn
          </LoadingPlaceholder>
        )}
      </ImageWrapper>
    </Container>
  );
}