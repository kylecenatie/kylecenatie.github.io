import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled, { keyframes, css } from 'styled-components';
import logo from "../images/k-white-noback.png";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

// Keyframe animations
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(6, 182, 212, 0.3); }
`;

// Styled Components
const StyledNavbar = styled(Navbar)`
  background: rgba(26, 26, 46, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInDown} 0.8s ease-out;
  
  ${props => props.scrolled && css`
    background: rgba(26, 26, 46, 0.98) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 0.75rem 0;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), transparent);
  }
`;

const LogoContainer = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none !important;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
  
  &:hover {
    filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));
    transform: rotate(5deg);
  }
`;

const BrandText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e5d5ff 50%, #bfdbfe 100%);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  letter-spacing: 0.5px;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 991px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledNavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    background: rgba(26, 26, 46, 0.98);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-top: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StyledNav = styled(Nav)`
  gap: 0.5rem;
  
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: #d1d5db !important;
  font-weight: 500;
  padding: 0.75rem 1.25rem !important;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-decoration: none;
  border: 1px solid transparent;
  
  &:hover {
    color: white !important;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &.active {
    color: white !important;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
    border: 1px solid rgba(139, 92, 246, 0.3);
    animation: ${glow} 2s ease-in-out infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1));
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    color: #d1d5db !important;
    font-weight: 500;
    padding: 0.75rem 1.25rem !important;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    background: none !important;
    
    &:hover {
      color: white !important;
      background: rgba(255, 255, 255, 0.1) !important;
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    &::after {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
    
    &[aria-expanded="true"]::after {
      transform: rotate(180deg);
    }
  }
  
  .dropdown-menu {
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 0.75rem;
    margin-top: 0.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    .dropdown-item {
      color: #d1d5db;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 500;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        transform: translateX(5px);
      }
      
      &:focus {
        background: rgba(139, 92, 246, 0.2);
        color: white;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  
  @media (max-width: 991px) {
    justify-content: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d5db;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    color: white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  &.github:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-color: #8b5cf6;
  }
  
  &.linkedin:hover {
    background: linear-gradient(135deg, #0ea5e9, #06b6d4);
    border-color: #06b6d4;
  }
  
  &.email:hover {
    background: linear-gradient(135deg, #f59e0b, #f97316);
    border-color: #f59e0b;
  }
`;

const CustomToggle = styled(Navbar.Toggle)`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
  }
  
  .navbar-toggler-icon {
    display: none;
  }
`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <StyledNavbar 
      scrolled={isScrolled} 
      sticky="top" 
      expand="lg" 
      expanded={isExpanded}
    >
      <Container>
        <LogoContainer as={NavLink} to="/" onClick={closeNavbar}>
          <LogoImage
            alt="Logo"
            src={logo}
          />
          <BrandText>YLE SJOBERG</BrandText>
        </LogoContainer>
        
        <NavSection>
          <CustomToggle 
            aria-controls="basic-navbar-nav" 
            onClick={handleToggle}
          >
            {isExpanded ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
          </CustomToggle>
          
          <StyledNavCollapse id="basic-navbar-nav">
            <StyledNav>
              <StyledNavLink 
                as={NavLink} 
                to="/"
                onClick={closeNavbar}
              >
                Home
              </StyledNavLink>
              <StyledNavLink 
                as={NavLink} 
                to="/about"
                onClick={closeNavbar}
              >
                About
              </StyledNavLink>
              <StyledNavLink 
                as={NavLink} 
                to="/education"
                onClick={closeNavbar}
              >
                Education
              </StyledNavLink>
              <StyledNavLink 
                as={NavLink} 
                to="/hobbies"
                onClick={closeNavbar}
              >
                Hobbies
              </StyledNavLink>
              
              <StyledNavDropdown title="Contact" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="mailto:cenatiempo.kyle@gmail.com">
                  <Mail size={18} />
                  Email
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/kyle-cena/">
                  <Linkedin size={18} />
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/kylecenatie">
                  <Github size={18} />
                  GitHub
                </NavDropdown.Item>
              </StyledNavDropdown>
            </StyledNav>
            
            {/* <SocialIcons>
              <SocialLink href="https://github.com/kylecenatie" className="github">
                <Github size={18} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/kyle-cena/" className="linkedin">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href="mailto:cenatiempo.kyle@gmail.com" className="email">
                <Mail size={18} />
              </SocialLink>
            </SocialIcons> */}
          </StyledNavCollapse>
        </NavSection>
      </Container>
    </StyledNavbar>
  );
}