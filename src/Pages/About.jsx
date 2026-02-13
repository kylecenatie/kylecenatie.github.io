import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin, Briefcase, Calendar } from 'lucide-react';
import {
  PageWrapper,
  Container,
  Section,
  Flex,
  Heading1,
  Heading2,
  Heading3,
  BodyText,
  Label,
  Card,
  SocialLink,
  AccentLine,
  ProfileImage,
  StatBox,
  GradientBackground,
  AnimateOnScroll,
  tokens,
} from '../components/Styled';
import IconGridContainer from '../components/TechGridContainer';
import ExperienceSection from '../components/ExperienceSection';
import profileImage from '../images/c_gorge.jpg';
import workHistory from '../assets/work_history.json';

/* ==========================================================================
   HERO SECTION STYLES
   ========================================================================== */
const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[16]});
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${tokens.spacing[16]};
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${tokens.spacing[10]};
  }
`;

const HeroImageCol = styled.div`
  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
  }
`;

const RolesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[4]};
`;

const Role = styled.span`
  font-family: ${tokens.fonts.display};
  font-size: 1rem;
  font-style: italic;
  color: ${tokens.colors.rust};
  
  &:not(:last-child)::after {
    content: '·';
    margin-left: ${tokens.spacing[2]};
    color: ${tokens.colors.textMuted};
  }
`;

const LocationStatus = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[6]};
  margin-top: ${tokens.spacing[8]};
  padding-top: ${tokens.spacing[6]};
  border-top: 1px solid ${tokens.colors.paperBorder};
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  color: ${tokens.colors.textSecondary};
  font-size: 0.875rem;
  
  svg { color: ${props => props.$green ? tokens.colors.rust : tokens.colors.textMuted}; }
`;

const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  background: #4a9f6e;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${tokens.spacing[8]};
  padding: ${tokens.spacing[10]} 0;
  border-top: 1px solid ${tokens.colors.paperBorder};
  border-bottom: 1px solid ${tokens.colors.paperBorder};
  margin: ${tokens.spacing[12]} 0;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${tokens.spacing[6]};
    text-align: center;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${tokens.spacing[16]};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${tokens.spacing[10]};
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: ${tokens.spacing[6]};
    &:last-child { margin-bottom: 0; }
  }
`;







/* ==========================================================================
   CTA SECTION
   ========================================================================== */
const CTASection = styled.div`
  text-align: center;
  padding: ${tokens.spacing[1]} 0;
`;

const SocialLinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing[4]};
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2020;
  const roles = ['Full-Stack Developer', 'Problem Solver', 'Creative Thinker', 'Leader', 'Mentor'];
  
  const stats = [
    { value: '3', label: 'Production Apps' },
    { value: '10', label: 'Automation Scripts' },
    { value: '30+', label: 'Individual Projects' },
    { value: `${yearsOfExperience}+`, label: 'Years Experience' },
    { value: '∞', label: 'Coffee Consumed' },
  ];
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kylecenatie', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kyle-sjoberg/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sjobergky@gmail.com', label: 'Email' },
  ];

  // Extract year from period string
  const getYear = (period) => {
    const match = period.match(/(\d{4})/);
    return match ? match[1] : '';
  };

  // Check if position is current
  const isCurrent = (period) => {
    return period.toLowerCase().includes('present') || period.toLowerCase().includes('current');
  };

  return (
    <PageWrapper>
      <GradientBackground />
      
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroImageCol>
              <AnimateOnScroll>
                <ProfileImage $size="260px">
                  <img src={profileImage} alt="Kyle Sjoberg" />
                </ProfileImage>
              </AnimateOnScroll>
            </HeroImageCol>
            
            <div>
              <AnimateOnScroll $delay="0.1s">
                <Flex $align="center" $gap={tokens.spacing[4]} style={{ marginBottom: tokens.spacing[4] }}>
                  <AccentLine />
                  <Label $accent>About</Label>
                </Flex>
                <Heading1>Kyle Sjoberg</Heading1>
                <RolesList>
                  {roles.map((role, index) => (<Role key={index}>{role}</Role>))}
                </RolesList>
              </AnimateOnScroll>
              
              <AnimateOnScroll $delay="0.2s">
                <LocationStatus>
                  <StatusItem><MapPin size={14} />Seattle, WA</StatusItem>
                  <StatusItem $green><StatusDot />Available for projects</StatusItem>
                </LocationStatus>
              </AnimateOnScroll>
            </div>
          </HeroGrid>
          
          <AnimateOnScroll $delay="0.3s">
            <StatsRow>
              {stats.map((stat, index) => (
                <StatBox key={index}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </StatBox>
              ))}
            </StatsRow>
          </AnimateOnScroll>
          
          <ContentGrid>
            <AnimateOnScroll $delay="0.4s">
              <AboutContent>
                <Heading3 style={{ marginBottom: tokens.spacing[6] }}>About Me</Heading3>
                <BodyText $muted>
                  I'm a passionate developer who believes great software should be both 
                  powerful and beautiful. With over {yearsOfExperience} years of experience, I've helped 
                  startups and enterprises build products that users love.
                </BodyText>
                <BodyText $muted>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge through 
                  tech talks and mentoring.
                </BodyText>
                <BodyText $muted>
                  I thrive in collaborative environments and believe the best solutions 
                  come from combining technical expertise with creative problem-solving.
                </BodyText>
              </AboutContent>
            </AnimateOnScroll>
            
            <AnimateOnScroll $delay="0.5s">
              <IconGridContainer />
            </AnimateOnScroll>
          </ContentGrid>
        </Container>
      </HeroSection>
      
      {/* Experience Section - Horizontal Timeline */}
  <ExperienceSection />
      
      {/* Social Links */}
      <Section $tight>
        <Container>
          <CTASection>
            <SocialLinksRow>
              {socialLinks.map((social, index) => (
                <SocialLink 
                  key={index} 
                  href={social.href} 
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </SocialLink>
              ))}
            </SocialLinksRow>
          </CTASection>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default About;