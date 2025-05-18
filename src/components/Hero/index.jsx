import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
  color: ${({ theme }) => theme.colors.background};
  padding-top: 120px;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 120px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.background};
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(motion.button).attrs({
  whileHover: { y: -3 },
  whileTap: { scale: 0.95 }
})`
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.background};
`;

const ImageContainer = styled(motion.div).attrs({
  animate: {
    y: [0, -20, 0]
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
})`
  flex: 1;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
`;

function Hero() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <TextContent>
          <Title>Fitness Inspired by Nature</Title>
          <Subtitle>
            Quwa by Limitless - The first AI-powered fitness app designed specifically 
            for women's bodies and hormonal cycles.
          </Subtitle>
          <CTAButtons>
            <PrimaryButton>Download Now</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </CTAButtons>
        </TextContent>
        
        <ImageContainer>
          <HeroImage src="https://via.placeholder.com/500x500" alt="Quwa App Screenshot" />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;