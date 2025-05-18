import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaDumbbell, 
  FaRunning, 
  FaAppleAlt, 
  FaUsers 
} from 'react-icons/fa';

const AlgorithmContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 5rem 0;
  scroll-margin-top: 80px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div).attrs({
  whileHover: { y: -10 }
})`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

function Algorithm() {
  const features = [
    { icon: <FaHeartbeat />, title: "Personalized Workouts", text: "Custom plans based on your goals and fitness level." },
    { icon: <FaDumbbell />, title: "Strength Training", text: "Progressive overload plans tailored to your ability." },
    { icon: <FaRunning />, title: "Cardio & Endurance", text: "Optimized cardio sessions based on your recovery." },
    { icon: <FaAppleAlt />, title: "Nutrition Guidance", text: "Diet recommendations synced with your cycle." },
    { icon: <FaUsers />, title: "Community Support", text: "Connect with other women on similar journeys." }
  ];

  return (
    <AlgorithmContainer id="services">
      <Container>
        <SectionTitle>Our AI-Powered Algorithm</SectionTitle>
        <Grid>
          {features.map((feature, index) => (
            <Card key={index}>
              <IconCircle>{feature.icon}</IconCircle>
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </AlgorithmContainer>
  );
}

export default Algorithm;