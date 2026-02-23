import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { tokens } from './ReusableComponents';


const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${tokens.transitions.base};
  background: ${props => props.$scrolled
    ? 'rgba(247, 243, 237, 0.95)'
    : 'transparent'} !important;
  border-bottom: 1px solid ${props => props.$scrolled
    ? tokens.colors.paperBorder
    : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  padding: 0 !important;

  .navbar-toggler {
    border: none;
    padding: ${tokens.spacing[2]};
    
    &:focus {
      box-shadow: none;
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%232d2d2d' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    &:hover .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23B5563A' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }

  .navbar-collapse {
    @media (max-width: 768px) {
      background: ${tokens.colors.paper};
      padding: ${tokens.spacing[4]};
      border-top: 1px solid ${tokens.colors.paperBorder};
      margin-top: ${tokens.spacing[2]};
    }
  }
`;

const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing[6]};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  
  @media (max-width: 768px) {
    padding: 0 ${tokens.spacing[4]};
    min-height: 64px;
  }
`;

const Logo = styled(NavLink)`
  font-family: ${tokens.fonts.display};
  font-size: 1.25rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal} !important;
  text-decoration: none !important;
  transition: color ${tokens.transitions.fast};
  
  &:hover {
    color: ${tokens.colors.rust} !important;
  }
  
  span {
    font-style: italic;
    color: ${tokens.colors.rust};
  }
`;

const StyledNav = styled(Nav)`
  align-items: center;
  gap: ${tokens.spacing[6]};
  
  @media (max-width: 768px) {
    gap: ${tokens.spacing[2]};
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: ${tokens.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${tokens.colors.textSecondary} !important;
  text-decoration: none !important;
  position: relative;
  padding: ${tokens.spacing[2]} ${tokens.spacing[1]};
  transition: color ${tokens.transitions.fast};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${tokens.colors.rust};
    transition: width ${tokens.transitions.base};
  }
  
  &:hover {
    color: ${tokens.colors.charcoal} !important;
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    color: ${tokens.colors.charcoal} !important;
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-family: ${tokens.fonts.display};
    font-size: 1.5rem;
    padding: ${tokens.spacing[3]} 0;
    border-bottom: 1px solid ${tokens.colors.paperBorder};
    
    &::after {
      display: none;
    }
  }
`;


const ContactDropdown = styled(NavDropdown)`
  .nav-link {
    font-family: ${tokens.fonts.body};
    font-size: 0.875rem;
    font-weight: 600;
    color: ${tokens.colors.paperLight} !important;
    background: ${tokens.colors.rust};
    padding: ${tokens.spacing[2]} ${tokens.spacing[5]} !important;
    border-radius: ${tokens.radius.sm};
    transition: all ${tokens.transitions.fast};
    
    &:hover {
      background: ${tokens.colors.rustDark};
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(181, 86, 58, 0.2);
    }
    
    &::after {
      margin-left: ${tokens.spacing[2]};
      vertical-align: middle;
    }
  }
  
  .dropdown-menu {
    background: ${tokens.colors.paper};
    border: 1px solid ${tokens.colors.paperBorder};
    border-radius: ${tokens.radius.md};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: ${tokens.spacing[2]} 0;
    margin-top: ${tokens.spacing[2]} !important;
    min-width: 180px;
  }
  
  .dropdown-item {
    font-family: ${tokens.fonts.body};
    font-size: 0.875rem;
    color: ${tokens.colors.textSecondary};
    padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
    transition: all ${tokens.transitions.fast};
    display: flex;
    align-items: center;
    gap: ${tokens.spacing[2]};
    
    svg {
      font-size: 1.1rem;
      color: ${tokens.colors.rust};
    }
    
    &:hover {
      background: ${tokens.colors.paperDark};
      color: ${tokens.colors.charcoal};
      
      svg {
        color: ${tokens.colors.rustDark};
      }
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: ${tokens.spacing[4]};
    
    .nav-link {
      text-align: center;
      padding: ${tokens.spacing[4]} ${tokens.spacing[6]} !important;
      display: block;
    }
    
    .dropdown-menu {
      border: none;
      box-shadow: none;
      text-align: center;
      padding: ${tokens.spacing[2]} 0;
    }
    
    .dropdown-item {
      justify-content: center;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  return (
    <StyledNavbar
      expand="md"
      $scrolled={scrolled || expanded}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <NavbarInner>
        <Logo to="/" onClick={closeMenu}>
          Kyle <span>Sjoberg</span>
        </Logo>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <StyledNav className="ms-auto">
            <StyledNavLink to="/" end onClick={closeMenu}>
              Home
            </StyledNavLink>

            <StyledNavLink to="/about" onClick={closeMenu}>
              About
            </StyledNavLink>

            <StyledNavLink to="/education" onClick={closeMenu}>
              Education
            </StyledNavLink>

            <StyledNavLink to="/hobbies" onClick={closeMenu}>
              Hobbies
            </StyledNavLink>

            <ContactDropdown title="Contact" id="contact-dropdown">
              <NavDropdown.Item href="mailto:sjobergky@gmail.com">
                <AiOutlineMail /> Email
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/kyle-sjoberg/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin /> LinkedIn
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="https://github.com/kylecenatie" target="_blank" rel="noopener noreferrer">
                <BsGithub /> Github
              </NavDropdown.Item> */}
            </ContactDropdown>
          </StyledNav>
        </Navbar.Collapse>
      </NavbarInner>
    </StyledNavbar>
  );
};

export default Header;