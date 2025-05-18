import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPaperPlane 
} from 'react-icons/fa';

const ContactContainer = styled.section`
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
`;

const ContactContent = styled.div`
  display: flex;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const InfoIcon = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  margin-top: 0.25rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const ContactForm = styled.form`
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <Subtitle>We'd love to hear from you!</Subtitle>
        
        <ContactContent>
          <ContactInfo>
            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              <InfoText>123 Fitness Street, Health City, Dubai, UAE</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaPhone /></InfoIcon>
              <InfoText>+971 4 123 4567</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaEnvelope /></InfoIcon>
              <InfoText>hello@quwa.ae</InfoText>
            </InfoItem>
            
            <SocialMedia>
              <SocialLink 
                href="#"
                whileHover={{ y: -5, backgroundColor: "#3b5998", color: "#fff" }}
              >
                <FaFacebookF />
              </SocialLink>
              <SocialLink 
                href="#"
                whileHover={{ y: -5, backgroundColor: "#1DA1F2", color: "#fff" }}
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink 
                href="#"
                whileHover={{ y: -5, backgroundColor: "#E1306C", color: "#fff" }}
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink 
                href="#"
                whileHover={{ y: -5, backgroundColor: "#0077B5", color: "#fff" }}
              >
                <FaLinkedinIn />
              </SocialLink>
            </SocialMedia>
          </ContactInfo>
          
          <ContactForm>
            <FormGroup>
              <Input type="text" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <Input type="text" placeholder="Subject" />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="Your Message" required />
            </FormGroup>
            <SubmitButton
              whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(108, 99, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;