import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Code, Coffee } from 'lucide-react';
import profileImage from '../images/e05.jpg';
// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(120deg); }
  66% { transform: translateY(8px) rotate(240deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideUpFade = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const scaleIn = keyframes`
  from { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  filter: blur(40px);
  animation: ${float} ${props => 4 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => 15 + Math.sin(props.delay * 3) * 35}%;
  top: ${props => 25 + Math.cos(props.delay * 3) * 25}%;
  width: ${props => 120 + Math.sin(props.delay * 2) * 80}px;
  height: ${props => 120 + Math.sin(props.delay * 2) * 80}px;
  background: ${props => props.gradient};
`;

const MouseFollower = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.08;
  filter: blur(50px);
  transition: all 0.3s ease-out;
  z-index: 1;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.2), transparent);
  left: ${props => props.x - 150}px;
  top: ${props => props.y - 150}px;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto 3rem;
  animation: ${scaleIn} 1s ease-out 0.5s backwards;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid transparent;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4, #ec4899, #f59e0b);
  background-size: 400% 400%;
  animation: ${gradientShift} 8s ease infinite;
  padding: 4px;
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: #374151;
  transition: all 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
  
  &:hover {
    filter: brightness(1.1) saturate(1.1);
  }
`;

const ProfileImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #374151, #4b5563);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3px solid #8b5cf6;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: ${float} 1s linear infinite;
  }
`;

const GlowRing = styled.div`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #8b5cf6, #06b6d4, #ec4899, #f59e0b, #8b5cf6);
  opacity: 0.3;
  filter: blur(20px);
  animation: ${gradientShift} 6s linear infinite;
  z-index: -1;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #e5d5ff 50%, #bfdbfe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 5s ease infinite, ${slideUpFade} 1s ease-out 0.8s backwards;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypewriterContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TypewriterText = styled.span`
  font-size: 1.5rem;
  color: #a855f7;
  font-weight: 500;
  border-right: 2px solid #a855f7;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: 
    ${typing} 2s steps(20) 1.5s forwards,
    ${blink} 1s step-end infinite 1.5s;
    
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: ${slideUpFade} 1s ease-out 1.2s backwards;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e5d5ff;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 3rem;
  animation: ${slideUpFade} 1s ease-out 1.5s backwards;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  animation: ${slideUpFade} 1s ease-out 1.8s backwards;
`;

const SocialLink = styled.a`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d5db;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  
  &:hover {
    background: ${props => props.hoverColor || 'rgba(255, 255, 255, 0.2)'};
    color: white;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const CTASection = styled.div`
  animation: ${slideUpFade} 1s ease-out 2.1s backwards;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #7c3aed, #0891b2);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
  animation: ${slideUpFade} 1s ease-out 2.5s backwards;
`;

const ScrollArrow = styled.div`
  animation: ${bounce} 2s infinite;
`;

const QuickStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  animation: ${slideUpFade} 1s ease-out 2.8s backwards;
  
  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const fullText = "Full Stack Developer with Innovative Mindset";
  
  // Method 1: Import from src/assets (recommended for bundled assets)
 
  const imageSrc = profileImage;
  
  // Method 2: Public folder (for static assets)
  //const imageSrc = 'src/images/prof_pic.jpg'; // Place in public/images/
  
  // Method 3: Environment variable (for different environments)
  // const imageSrc = process.env.REACT_APP_PROFILE_IMAGE || '/images/default-profile.jpg';
  
  // Method 4: Dynamic import (for lazy loading)
  // const [imageSrc, setImageSrc] = useState(null);
  // useEffect(() => {
  //   import('../assets/images/profile.jpg').then(image => {
  //     setImageSrc(image.default);
  //   });
  // }, []);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbGradients = [
    'radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(147, 51, 234, 0.1))',
    'radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.1))',
    'radial-gradient(circle, rgba(236, 72, 153, 0.3), rgba(219, 39, 119, 0.1))',
    'radial-gradient(circle, rgba(245, 158, 11, 0.3), rgba(249, 115, 22, 0.1))'
  ];

  return (
    <PageContainer>
      {/* Animated Background Elements */}
      <div>
        {orbGradients.map((gradient, index) => (
          <FloatingOrb key={index} delay={index * 0.8} gradient={gradient} />
        ))}
      </div>

      {/* Mouse Follower */}
      <MouseFollower x={mousePosition.x} y={mousePosition.y} />

      <ContentContainer>
        {/* Profile Image */}
        <ProfileImageContainer>
          <GlowRing />
          <ProfileImageWrapper>
            <ProfileImage 
              src={imageSrc}
              alt="Profile"
              loaded={imageLoaded}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: imageError ? 'none' : 'block' }}
            />
            <ProfileImagePlaceholder show={!imageLoaded || imageError}>
              {imageError ? 'Failed to load' : 'Loading...'}
            </ProfileImagePlaceholder>
          </ProfileImageWrapper>
        </ProfileImageContainer>

        {/* Main Content */}
        <MainTitle>Kyle Sjoberg</MainTitle>
        
        <TypewriterContainer>
          <TypewriterText>{fullText}</TypewriterText>
        </TypewriterContainer>

        <Description>
          I’m a full-stack software engineer with 5+ years of experience transforming ideas into scalable, user-friendly solutions. From cloud architecture and DevOps to clean code and thoughtful design patterns, I thrive at the intersection of structure and creativity. I’m passionate about building elegant, functional experiences that connect innovative technology with real human needs. Whether architecting systems or refining UI flows, I bring ideas to life through code, collaboration, and a constant drive to learn and improve.
          {/* I’m a full-stack software engineer with 5+ years of experience turning ideas into scalable, user-friendly software. From cloud architecture to DevOps to clean design patterns, I love blending structure with creativity. Always learning, always building—and always up for a good challenge.
          Passionate about creating beautiful, functional experiences that bridge the gap 
          between innovative technology and human-centered design. I bring ideas to life 
          through code, creativity, and collaboration. */}
        </Description>

        <LocationBadge>
          <MapPin size={16} />
          Seattle, Washington
        </LocationBadge>

        {/* Social Links */}
        <SocialLinks>
          <SocialLink 
            href="https://github.com/kylecenatie" 
            hoverColor="rgba(36, 41, 46, 0.8)"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </SocialLink>
          <SocialLink 
            href="https://www.linkedin.com/in/kyle-sjoberg/" 
            hoverColor="rgba(0, 119, 181, 0.8)"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink 
            href="mailto:cenatiempo.kyle@gmail.com" 
            hoverColor="rgba(239, 68, 68, 0.8)"
          >
            <Mail size={24} />
          </SocialLink>
        </SocialLinks>

        {/* Call to Action */}
        {/* <CTASection>
          <CTAButton href="#portfolio">
            <Code size={20} />
            View My Work
          </CTAButton>
        </CTASection> */}

        {/* Quick Stats */}
        {/* <QuickStats>
          <StatItem>
            <StatNumber color="#8b5cf6">30+</StatNumber>
            <StatLabel>Projects</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber color="#06b6d4">5+</StatNumber>
            <StatLabel>Years Exp</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber color="#ec4899">∞</StatNumber>
            <StatLabel>Coffee Cups</StatLabel>
          </StatItem>
        </QuickStats> */}
      </ContentContainer>

      {/* Scroll Indicator */}
      {/* <ScrollIndicator>
        <span>Scroll to explore</span>
        <ScrollArrow>
          <ArrowDown size={20} />
        </ScrollArrow>
      </ScrollIndicator> */}
    </PageContainer>
  );
};

export default Home;