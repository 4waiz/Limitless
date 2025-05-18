import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegMoon, FaFire, FaLeaf, FaWater } from 'react-icons/fa';

const HormoneContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;

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

const PhaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const PhaseCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
`;

const PhaseHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const PhaseIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color}20;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const PhaseTitle = styled.h4`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
`;

const PhaseDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const CycleImage = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;

function HormoneCycle() {
  const phases = [
    {
      icon: <FaRegMoon />,
      title: "Menstrual Phase",
      description: "Best time for rest or gentle exercises like walking, yoga, and stretching.",
      color: "#6C63FF"
    },
    {
      icon: <FaLeaf />,
      title: "Follicular Phase",
      description: "Increased energy makes this time optimal for strength and endurance workouts.",
      color: "#4D44DB"
    },
    {
      icon: <FaFire />,
      title: "Ovulatory Phase",
      description: "Best time for energizing workouts like HIIT with plyometrics or dance workouts.",
      color: "#FF6584"
    },
    {
      icon: <FaWater />,
      title: "Luteal Phase",
      description: "Focus on relaxation and stress-relief with strength, low intensity cardio, or yoga.",
      color: "#6BFFD3"
    }
  ];

  return (
    <HormoneContainer>
      <Container>
        <SectionTitle>Workouts Synced to Your Cycle</SectionTitle>
        <Subtitle>
          Women's bodies go through natural hormonal fluctuations each month. 
          Quwa develops workout plans that work with your body, not against it.
        </Subtitle>
        
        <Content>
          <TextContent>
            <h3>Natural Hormone Fluctuation Overview</h3>
            <p>
              Rather than fighting your body's natural changes in energy levels, 
              Quwa develops workout plans that take into account where you are in 
              your monthly cycle to encourage exercises that align with your body's needs.
            </p>
            
            <PhaseGrid>
              {phases.map((phase, index) => (
                <PhaseCard 
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <PhaseHeader>
                    <PhaseIcon color={phase.color}>{phase.icon}</PhaseIcon>
                    <PhaseTitle>{phase.title}</PhaseTitle>
                  </PhaseHeader>
                  <PhaseDescription>{phase.description}</PhaseDescription>
                </PhaseCard>
              ))}
            </PhaseGrid>
          </TextContent>
          
          <ImageContent>
            <CycleImage src="/images/cycle-chart.png" alt="Menstrual Cycle Chart" />
          </ImageContent>
        </Content>
      </Container>
    </HormoneContainer>
  );
}

export default HormoneCycle;