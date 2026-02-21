import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { NavLink } from 'react-router';
import {
  PageWrapper,
  Container,
  DisplayTitle,
  BodyLarge,
  Label,
  SocialLink,
  AccentLine,
  ProfileImage,
  GradientBackground,
  tokens,
  slideUp,
} from '../components/ReusableComponents';
import profileImage from '../images/e05.jpg';

/* ==========================================================================
   CURSOR
   ========================================================================== */
const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${tokens.colors.rust};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  will-change: transform;
`;

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1.5px solid ${tokens.colors.rust};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: 
    width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s ease;
  will-change: transform;
`;

/* ==========================================================================
   HERO STYLES
   ========================================================================== */
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 72px;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${tokens.spacing[16]};
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${tokens.spacing[12]};
  }
`;

const HeroText = styled.div`
  @media (max-width: 968px) { order: 2; }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 968px) {
    justify-content: center;
    order: 1;
  }
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[6]};
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 968px) { justify-content: center; }
`;

const TitleWrapper = styled.div`
  margin-bottom: ${tokens.spacing[6]};
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.4s;
`;

const Subtitle = styled.p`
  font-family: ${tokens.fonts.display};
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-style: italic;
  color: ${tokens.colors.rust};
  margin-bottom: ${tokens.spacing[8]};
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.6s;
`;

const Description = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.8s;
`;

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[6]};
  padding: ${tokens.spacing[2]} ${tokens.spacing[4]};
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  
  svg { color: ${tokens.colors.rust}; }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${tokens.spacing[3]};
  margin-top: ${tokens.spacing[10]};
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 1s;
  
  @media (max-width: 968px) { justify-content: center; }
`;

const ImageContainer = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.6s;
`;

const LargeProfileImage = styled(ProfileImage)`
  width: 360px;
  height: 450px;
  
  @media (max-width: 968px) {
    width: 260px;
    height: 325px;
  }
`;

const ScrollIndicator = styled(NavLink)`
  position: absolute;
  bottom: ${tokens.spacing[12]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[3]};
  color: ${tokens.colors.textMuted};
  text-decoration: none;
  opacity: 0;
  animation: ${slideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 1.4s;

  /* Hide the native cursor only over this element */
  cursor: none;
  
  span {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color ${tokens.transitions.fast};
  }

  svg {
    animation: bounce 2s infinite;
    transition: color ${tokens.transitions.fast};
  }

  &:hover span,
  &:hover svg {
    color: ${tokens.colors.rust};
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(6px); }
    60% { transform: translateY(3px); }
  }
  
  @media (max-width: 768px) { display: none; }
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const Home = () => {
  const yearsOfExperience = new Date().getFullYear() - 2020;

  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    dotRef.current.style.left  = `${x}px`;
    dotRef.current.style.top   = `${y}px`;
    ringRef.current.style.left = `${x}px`;
    ringRef.current.style.top  = `${y}px`;
  };

  return (
    <PageWrapper>
      {/* Cursor — only visible when hovering the ScrollIndicator */}
      <CursorDot  ref={dotRef}  style={{ opacity: cursorVisible ? 1 : 0 }} />
      <CursorRing ref={ringRef} style={{ opacity: cursorVisible ? 1 : 0 }} />

      <GradientBackground />
      
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <Eyebrow>
                <AccentLine />
                <Label $accent>Software Engineer</Label>
              </Eyebrow>
              
              <TitleWrapper>
                <DisplayTitle>
                  Kyle<br />
                  <em>Sjoberg</em>
                </DisplayTitle>
              </TitleWrapper>
              
              <Subtitle>
                Full Stack Developer with Innovative Mindset
              </Subtitle>
              
              <Description>
                <BodyLarge $muted $prose>
                  I'm a full-stack software engineer with {yearsOfExperience}+ years of
                  experience building scalable, cloud-native applications from concept to production. 
                  I work across the entire stack—from system architecture and DevOps to writing clean, 
                  maintainable code and crafting intuitive user interfaces.
                </BodyLarge>
                
                <LocationBadge>
                  <MapPin size={14} />
                  <Label>Seattle, Washington</Label>
                </LocationBadge>
              </Description>
              
              <SocialLinks>
                <SocialLink href="https://github.com/kylecenatie" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/kyle-sjoberg/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </SocialLink>
                <SocialLink href="mailto:sjobergky@gmail.com" aria-label="Email">
                  <Mail size={18} />
                </SocialLink>
              </SocialLinks>
            </HeroText>
            
            <HeroImageWrapper>
              <ImageContainer>
                <LargeProfileImage>
                  <img src={profileImage} alt="Kyle Sjoberg" />
                </LargeProfileImage>
              </ImageContainer>
            </HeroImageWrapper>
          </HeroContent>
        </Container>
<NextPageLink
                to={nextTo}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                onMouseMove={handleMouseMove}
              >
                <span>{nextLabel || 'Continue'}</span>
                <ArrowDown size={16} />
              </NextPageLink>
        {/* <ScrollIndicator
          to="/about"
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
          onMouseMove={handleMouseMove}
        >
          <span>View About</span>
          <ArrowDown size={16} />
        </ScrollIndicator> */}
      </HeroSection>
    </PageWrapper>
  );
};

export default Home;