import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

// Styled components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme, $scrolled }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : theme.colors.background};
  box-shadow: ${({ $scrolled }) => 
    $scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(ScrollLink)`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }
`;

const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  position: relative;
  text-decoration: none;
  font-size: 1rem;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <NavContainer>
        <Logo to="home" smooth={true} duration={500}>Quwa</Logo>
        
        <NavLinks $isOpen={isOpen}>
          <li><NavLink to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="about" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="services" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Services</NavLink></li>
          <li><NavLink to="team" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Our Team</NavLink></li>
          <li><NavLink to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;