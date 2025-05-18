import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AppScreenshot from '../../images/App.png'; // Correct import path

const HeroContainer = styled.section`
  background-color: #fce9ee;
  color: ${({ theme }) => theme.colors.primary};
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
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 3rem;
  min-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
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
  min-width: 300px;
  margin-top: 2rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 380px; /* Reduced from 500px */
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
`;


function Hero() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <TextContent>
          <Title>Fitness Inspired by Nature</Title>
          <Subtitle>
            Quwa by Limitless – The first AI-powered fitness app designed specifically 
            for women's bodies and hormonal cycles.
          </Subtitle>
          <CTAButtons>
            <PrimaryButton>Download Now</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </CTAButtons>
        </TextContent>

        <ImageContainer>
          <HeroImage 
            src={AppScreenshot} 
            alt="Quwa App showing personalized workout recommendations based on menstrual cycle" 
          />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;