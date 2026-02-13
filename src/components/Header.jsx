import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { tokens } from './Styled';

/* ==========================================================================
   HEADER / NAVIGATION
   Warm Paper Theme
   ========================================================================== */

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${tokens.transitions.base};
  background: ${props => props.$scrolled 
    ? 'rgba(247, 243, 237, 0.95)' 
    : 'transparent'};
  border-bottom: 1px solid ${props => props.$scrolled 
    ? tokens.colors.paperBorder 
    : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
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
  font-size: 1.25rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  text-decoration: none;
  transition: color ${tokens.transitions.fast};
  
  &:hover {
    color: ${tokens.colors.rust};
  }
  
  span {
    font-style: italic;
    color: ${tokens.colors.rust};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[8]};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$active 
    ? tokens.colors.charcoal 
    : tokens.colors.textSecondary};
  text-decoration: none;
  position: relative;
  padding: ${tokens.spacing[2]} 0;
  transition: color ${tokens.transitions.fast};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${tokens.colors.rust};
    transition: width ${tokens.transitions.base};
  }
  
  &:hover {
    color: ${tokens.colors.charcoal};
    
    &::after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${tokens.colors.paperLight};
  background: ${tokens.colors.rust};
  padding: ${tokens.spacing[2]} ${tokens.spacing[5]};
  border-radius: ${tokens.radius.sm};
  text-decoration: none;
  transition: all ${tokens.transitions.fast};
  
  &:hover {
    background: ${tokens.colors.rustDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(181, 86, 58, 0.2);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${tokens.colors.charcoal};
  padding: ${tokens.spacing[2]};
  cursor: pointer;
  transition: color ${tokens.transitions.fast};
  
  &:hover {
    color: ${tokens.colors.rust};
  }
  
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
    background: ${tokens.colors.paper};
    flex-direction: column;
    padding: ${tokens.spacing[8]};
    gap: ${tokens.spacing[6]};
    border-top: 1px solid ${tokens.colors.paperBorder};
  }
`;

const MobileNavLink = styled.a`
  font-family: ${tokens.fonts.display};
  font-size: 1.75rem;
  color: ${props => props.$active 
    ? tokens.colors.charcoal 
    : tokens.colors.textSecondary};
  text-decoration: none;
  padding: ${tokens.spacing[3]} 0;
  border-bottom: 1px solid ${tokens.colors.paperBorder};
  transition: color ${tokens.transitions.fast};
  
  &:hover {
    color: ${tokens.colors.rust};
  }
`;

const MobileContactButton = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: ${tokens.colors.paperLight};
  background: ${tokens.colors.rust};
  padding: ${tokens.spacing[4]} ${tokens.spacing[6]};
  border-radius: ${tokens.radius.sm};
  text-decoration: none;
  text-align: center;
  margin-top: ${tokens.spacing[4]};
  transition: all ${tokens.transitions.fast};
  
  &:hover {
    background: ${tokens.colors.rustDark};
  }
`;

const Header = ({ currentPage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/about', id: 'about' },
    { label: 'Education', href: '/education', id: 'education' },
    { label: 'Hobbies', href: '/hobbies', id: 'hobbies' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderWrapper $scrolled={scrolled || mobileMenuOpen}>
        <HeaderInner>
          <Logo href="/">
            Kyle <span>Sjoberg</span>
          </Logo>

          <Nav>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                $active={currentPage === item.id}
              >
                {item.label}
              </NavLink>
            ))}
            <ContactButton href="mailto:sjobergky@gmail.com">
              Contact
            </ContactButton>
          </Nav>

          <MobileMenuButton 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderInner>
      </HeaderWrapper>

      <MobileMenu $open={mobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.id}
            href={item.href}
            $active={currentPage === item.id}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <MobileContactButton href="mailto:sjobergky@gmail.com">
          Contact
        </MobileContactButton>
      </MobileMenu>
    </>
  );
};

export default Header;