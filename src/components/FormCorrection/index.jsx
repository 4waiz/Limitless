import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCamera, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const FormContainer = styled.section`
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
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.dark};
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

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const DemoVideo = styled(motion.video)`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

function FormCorrection() {
  const features = [
    {
      icon: <FaCamera />,
      title: "Real-Time Analysis",
      description:
        "Simply perform your exercises in front of your smartphone camera for instant feedback.",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Form Correction",
      description:
        "Get alerts when your form needs adjustment to prevent injury and maximize effectiveness.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Confirmation",
      description:
        "Receive positive feedback when you're performing exercises correctly.",
    },
  ];

  return (
    <FormContainer>
      <Container>
        <SectionTitle>AI-Powered Form Correction</SectionTitle>

        <Content>
          <TextContent>
            <p>
              Quwa uses artificial intelligence to help ensure your form is correct,
              helping you target the right muscle groups and reducing injury risk.
            </p>

            <FeatureList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </FeatureItem>
              ))}
            </FeatureList>
          </TextContent>

          <ImageContent>
            <DemoVideo
              src="/Videos/form.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              whileHover={{ scale: 1.02 }}
            />
          </ImageContent>
        </Content>
      </Container>
    </FormContainer>
  );
}

export default FormCorrection;
