import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContent = styled.div`
  flex: 1;
  position: relative;
`;

const ImageFrame = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

function About() {
  return (
    <AboutContainer id="about">
      <Container>
        <SectionTitle>About Quwa</SectionTitle>
        
        <Content>
          <TextContent>
            <p>
              Quwa by Limitless is revolutionizing women's fitness through AI-powered technology 
              that adapts to your body's natural rhythms. Our mission is to empower women to achieve 
              their fitness goals in harmony with their physiology.
            </p>
            <p>
              Unlike traditional fitness programs designed for men's bodies, Quwa considers the unique 
              hormonal fluctuations women experience throughout their menstrual cycle, creating workout 
              plans that work with your body, not against it.
            </p>
          </TextContent>
          
          <ImageContent>
            <ImageFrame
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Replace with your actual image */}
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Women exercising" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  borderRadius: '10px'
                }}
              />
            </ImageFrame>
          </ImageContent>
        </Content>
      </Container>
    </AboutContainer>
  );
}

export default About;