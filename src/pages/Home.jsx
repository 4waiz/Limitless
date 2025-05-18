import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import About from '../components/About';
import Algorithm from '../components/Algorithm';
import HormoneCycle from '../components/HormoneCycle';
import FormCorrection from '../components/FormCorrection';
import Team from '../components/Team';
import Contact from '../components/Contact';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Algorithm />
      <HormoneCycle />
      <FormCorrection />
      <Team />
      <Contact />
    </HomeContainer>
  );
}

export default Home;