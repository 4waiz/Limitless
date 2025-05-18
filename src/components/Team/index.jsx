import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const defaultColors = {
  light: '#f9f9f9',
  dark: '#222',
  text: '#555',
  background: '#fff',
  primary: '#6c63ff',
  secondary: '#3f3d56',
  shadows: {
    small: '0 2px 8px rgba(0,0,0,0.1)'
  }
};

const TeamContainer = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 80px;
  background-color: ${({ theme }) => (theme?.colors?.light || defaultColors.light)};
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
  color: ${({ theme }) => (theme?.colors?.dark || defaultColors.dark)};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => (theme?.colors?.text || defaultColors.text)};
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
  background-color: ${({ theme }) => (theme?.colors?.background || defaultColors.background)};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => (theme?.shadows?.small || defaultColors.shadows.small)};
  transition: all 0.3s ease;
`;

const TeamImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  position: relative;
  border: 5px solid ${({ theme }) => (theme?.colors?.light || defaultColors.light)};

  &:hover .social-links {
    opacity: 1;
    bottom: -10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialLinks = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => (theme?.colors?.primary || defaultColors.primary)};
  color: ${({ theme }) => (theme?.colors?.background || defaultColors.background)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme?.colors?.secondary || defaultColors.secondary)};
    transform: translateY(-5px);
  }
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme?.colors?.dark || defaultColors.dark)};
`;

const TeamRole = styled.p`
  color: ${({ theme }) => (theme?.colors?.primary || defaultColors.primary)};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: ${({ theme }) => (theme?.colors?.text || defaultColors.text)};
`;

function Team() {
  const teamMembers = [
    {
      name: "Awaiz Ahmed",
      role: "Mobile Developer",
      bio: "Former professional athlete turned tech entrepreneur with a passion for women's health.",
      image: "/images/team-member1.png",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Simeone Wansi",
      role: "Lead Developer",
      bio: "Tech wizard with expertise in AI and machine learning applications for health.",
      image: "/images/team-member2.png",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Coleen Madeer",
      role: "Head of Nutrition",
      bio: "Registered dietitian with 10+ years experience in women's health and sports nutrition.",
      image: "/images/team-member3.png",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Alaa Al-Mansoori",
      role: "Regional Director",
      bio: "Fitness expert with deep knowledge of women's health challenges in the Middle East.",
      image: "/images/team-member4.png",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
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
                <Image 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                    console.error(`Failed to load image: ${member.image}`);
                  }}
                />
                <SocialLinks className="social-links">
                  <SocialLink href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </SocialLink>
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
