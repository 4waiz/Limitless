import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.background};
  padding: 3rem 0;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Quwa by Limitless. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;