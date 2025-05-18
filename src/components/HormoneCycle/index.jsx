import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegMoon, FaFire, FaLeaf, FaWater } from 'react-icons/fa';
import AppScreenshot from '../../images/Cycle.png';

// Styled Components
const HormoneContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
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
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  color: ${({ theme }) => theme.colors.text};
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const PhaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PhaseCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
`;

const PhaseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PhaseIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ color }) => color};
`;

const PhaseTitle = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`;

const PhaseDescription = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CycleImage = styled.img`
  width: 400%;
  max-width: 400px;
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
            <CycleImage src={AppScreenshot} alt="Cycle tracking and workout suggestions in app" />
          </ImageContent>
        </Content>
      </Container>
    </HormoneContainer>
  );
}

export default HormoneCycle;
