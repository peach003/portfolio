import React from "react";
import styled, { keyframes } from "styled-components";

// 呼吸光晕动画
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 30px rgba(199, 114, 202, 0.6); }
  50% { box-shadow: 0 0 60px rgba(0, 240, 255, 0.9); }
`;

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  transform: translate(100px, 100px);
`;

// 呼吸光晕
const GlowRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 4s ease-in-out infinite;
`;

// 透明中空渐变描边
const GradientBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid transparent; /* 透明的边框占位 */
  background: linear-gradient(135deg, #9d4edd, #00b4d8) border-box;
  background-clip: border-box;
`;

// 头像容器
const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
`;

// 头像
const MyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export default function BackgroundAnimation() {
  return (
    <Container>
      <GlowRing />
      <GradientBorder /> {/* 描边中间是透明的 */}
      <ImageWrapper>
        <MyImage src="/images/me.jpg" alt="头像" />
      </ImageWrapper>
    </Container>
  );
}

