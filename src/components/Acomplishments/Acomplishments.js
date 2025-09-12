import React, { useState } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CertificateImg } from './AcomplishmentsStyles';

// 3 个卡片数据，每个带有对应证书图片
const data = [
  { 
    number: 1, 
    text: 'AZ-204', 
    img: '/images/cert1.png'
  },
  { 
    number: 2, 
    text: 'AZ-104', 
    img: '/images/cert2.png'
  },
  { 
    number: 3, 
    text: 'AWS Certified Solutions Architect', 
    img: '/images/cert3.png'
  }
];

const Acomplishments = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = (img) => {
    setSelectedImg(img);
  };

  return (
    <Section>
      <SectionTitle>Professional Certificate</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box 
            key={index} 
            onClick={() => handleClick(card.img)} 
            style={{cursor: 'pointer'}}
          >
            <BoxNum>{`${card.number}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>

      {/* 点击后显示证书图片 */}
      {selectedImg && (
        <CertificateImg 
          src={selectedImg} 
          alt="Certificate" 
        />
      )}

      <SectionDivider/>
    </Section>
  );
};

export default Acomplishments;

