import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

const TeamContainer = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
`;

const TeamImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  position: relative;
  border: 5px solid ${({ theme }) => theme.colors.light};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialLinks = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  opacity: 0;
  transition: all 0.3s ease;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
  }
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const TeamRole = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

function Team() {
  const teamMembers = [
    {
      name: "Awaiz Ahmed",
      role: "Mobile Developer",
      bio: "Former professional athlete turned tech entrepreneur with a passion for women's health.",
      image: "/images/team-member1.jpg"
    },
    {
      name: "Simeone Wansi",
      role: "Lead Developer",
      bio: "Tech wizard with expertise in AI and machine learning applications for health.",
      image: "/images/team-member2.jpg"
    },
    {
      name: "Coleen Madeer",
      role: "Head of Nutrition",
      bio: "Registered dietitian with 10+ years experience in women's health and sports nutrition.",
      image: "/images/team-member3.jpg"
    },
    {
      name: "Alaa Al-Mansoori",
      role: "Regional Director",
      bio: "Fitness expert with deep knowledge of women's health challenges in the Middle East.",
      image: "/images/team-member4.jpg"
    }
  ];

  return (
    <TeamContainer id="team">
      <Container>
        <SectionTitle>Meet Our Team</SectionTitle>
        <Subtitle>The passionate people behind Quwa by Limitless</Subtitle>
        
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(108, 99, 255, 0.1)" }}
            >
              <TeamImage>
                <Image src={member.image} alt={member.name} />
                <SocialLinks
                  initial={{ opacity: 0, bottom: -20 }}
                  whileHover={{ opacity: 1, bottom: -10 }}
                >
                  <SocialLink href="#"><FaTwitter /></SocialLink>
                  <SocialLink href="#"><FaLinkedin /></SocialLink>
                  <SocialLink href="#"><FaInstagram /></SocialLink>
                </SocialLinks>
              </TeamImage>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamBio>{member.bio}</TeamBio>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamContainer>
  );
}

export default Team;