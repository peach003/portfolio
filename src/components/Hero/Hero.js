import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          I'm{" "}

          <span
            style={{
              background: "linear-gradient(90deg, #9d4edd, #00b4d8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Lynn
          </span>
        </SectionTitle>
        <SectionText
          style={{
            textShadow: `
              0 0 5px rgba(229, 237, 240, 0.9),
              0 0 10px rgba(59, 166, 243, 0.8),
              0 0 20px rgba(29, 162, 214, 0.7),
              0 0 40px rgba(77,181,255,0.6),
              0 0 80px rgba(77,181,255,0.5)
            `
          }}
        >
          Once a banker of numbers, now an engineer of ideas — turning complex problems into elegant solutions.
        </SectionText>
        <a 
          href="https://www.linkedin.com/in/lynn-zhang-563b52335/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

