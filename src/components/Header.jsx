import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { tokens } from './Styled';

/* ==========================================================================
   HEADER / NAVIGATION
   Dark Coastal Modern Theme
   ========================================================================== */


const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${tokens.transitions.base};
  background: ${props => props.$scrolled ? 'rgba(13, 16, 23, 0.95)' : 'transparent'};
  border-bottom: 1px solid ${props => props.$scrolled ? tokens.colors.slateLight : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing[6]};
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 0 ${tokens.spacing[4]};
    height: 64px;
  }
`;

const Logo = styled.a`
  font-family: ${tokens.fonts.display};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color ${tokens.transitions.fast};
  
  &:hover { color: ${tokens.colors.ice}; }
  
  span { color: ${tokens.colors.ice}; }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[6]};
  
  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$active ? tokens.colors.ice : tokens.colors.textSecondary};
  text-decoration: none;
  padding: ${tokens.spacing[2]} 0;
  transition: color ${tokens.transitions.fast};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 1px;
    background: ${tokens.colors.ice};
    transition: width ${tokens.transitions.base};
  }
  
  &:hover {
    color: ${tokens.colors.silver};
    &::after { width: 100%; }
  }
`;

const ContactButton = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${tokens.colors.slateDeep};
  background: ${tokens.colors.ice};
  padding: ${tokens.spacing[2]} ${tokens.spacing[5]};
  border-radius: ${tokens.radius.sm};
  text-decoration: none;
  transition: all ${tokens.transitions.fast};
  
  &:hover {
    background: ${tokens.colors.iceLight};
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${tokens.colors.silver};
  padding: ${tokens.spacing[2]};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$open ? 'flex' : 'none'};
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${tokens.colors.slateDeep};
    flex-direction: column;
    padding: ${tokens.spacing[8]};
    gap: ${tokens.spacing[4]};
    border-top: 1px solid ${tokens.colors.slateLight};
  }
`;

const MobileNavLink = styled.a`
  font-family: ${tokens.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.$active ? tokens.colors.ice : tokens.colors.textSecondary};
  text-decoration: none;
  padding: ${tokens.spacing[3]} 0;
  border-bottom: 1px solid ${tokens.colors.slateLight};
  
  &:hover { color: ${tokens.colors.silver}; }
`;

const MobileContactButton = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${tokens.colors.slateDeep};
  background: ${tokens.colors.ice};
  padding: ${tokens.spacing[4]} ${tokens.spacing[6]};
  border-radius: ${tokens.radius.sm};
  text-decoration: none;
  text-align: center;
  margin-top: ${tokens.spacing[4]};
`;

const Header = ({ currentPage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/about', id: 'About' },
    { label: 'Education', href: '/education', id: 'education' },
    { label: 'Hobbies', href: '/hobbies', id: 'hobbies' },
  ];

  return (
    <>
      <HeaderWrapper $scrolled={scrolled || mobileMenuOpen}>
        <HeaderInner>
          <Logo href="/">Kyle Sjoberg<span>.</span></Logo>
          <Nav>
            {navItems.map((item) => (
              <NavLink key={item.id} href={item.href} $active={currentPage === item.id}>
                {item.label}
              </NavLink>
            ))}
            <ContactButton href="mailto:cenatiempo.kyle@gmail.com">Contact</ContactButton>
          </Nav>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderInner>
      </HeaderWrapper>

      <MobileMenu $open={mobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink key={item.id} href={item.href} $active={currentPage === item.id} onClick={() => setMobileMenuOpen(false)}>
            {item.label}
          </MobileNavLink>
        ))}
        <MobileContactButton href="mailto:cenatiempo.kyle@gmail.com">Contact</MobileContactButton>
      </MobileMenu>
    </>
  );
};

export default Header;