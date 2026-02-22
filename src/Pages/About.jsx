import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
  SocialLink,
  AccentLine,
  ProfileImage,
  StatBox,
  GradientBackground,
  AnimateOnScroll,
  tokens,
} from '../components/ReusableComponents';
import SkillsGrid from '../components/SkillsGrid';

import ExperienceSection from '../components/ExperienceSection';
import profileImage from '../images/c_gorge.jpg';

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

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[5]} 0;
  border-top: 1px solid ${tokens.colors.paperBorder};
  border-bottom: 1px solid ${tokens.colors.paperBorder};
  margin-top: ${tokens.spacing[8]};
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${tokens.spacing[4]};
    text-align: center;
  }
`;

const CompactStatBox = styled.div`
  text-align: left;
  
  .stat-value {
    font-family: ${tokens.fonts.display};
    font-size: 1.75rem;
    font-weight: 400;
    color: ${tokens.colors.charcoal};
    line-height: 1;
    margin-bottom: ${tokens.spacing[1]};
  }
  
  .stat-label {
    font-family: ${tokens.fonts.mono};
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: ${tokens.colors.textMuted};
  }
`;

const ContentDivider = styled.hr`
  border: none;
  height: 1px;
  background: ${tokens.colors.paperBorder};
  margin: ${tokens.spacing[12]} 0 0 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${tokens.spacing[16]};
  margin-top: ${tokens.spacing[10]};
  
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
    { value: '30+', label: 'Projects' },
    { value: `${yearsOfExperience}+`, label: 'Yrs Experience' },
    { value: '∞', label: 'Coffee' },
  ];
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kylecenatie', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kyle-sjoberg/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sjobergky@gmail.com', label: 'Email' },
  ];

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
                <StatsRow>
                  {stats.map((stat, index) => (
                    <CompactStatBox key={index}>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </CompactStatBox>
                  ))}
                </StatsRow>
              </AnimateOnScroll>
            </div>
          </HeroGrid>
          
          <ContentDivider />
          
          <ContentGrid>
            <AnimateOnScroll $delay="0.4s">
              <AboutContent>
                <Heading3 style={{ marginBottom: tokens.spacing[6] }}>About Me</Heading3>
                <BodyText $muted>
                As a full-stack software engineer, I enjoy turning complex ideas into 
                scalable, well-designed solutions. Over the past {yearsOfExperience}+ years, 
                I've worked with small businesses and Fortune 500 companies to build 
                cloud-native applications that are reliable, maintainable, and user-focused.
                </BodyText>
              <BodyText $muted>
                I'm driven by continuous learning and a genuine curiosity for how things work — 
                always seeking challenges that require both technical depth and creative 
                problem-solving, whether that means exploring new architectures, sharpening 
                my skills, or building software that makes a real difference.
              </BodyText>
              </AboutContent>
            </AnimateOnScroll>
            
        
            <AnimateOnScroll $delay="0.5s">
              <SkillsGrid />
            </AnimateOnScroll>
          </ContentGrid>
        </Container>
      </HeroSection>
      
      {/* Experience Section */}
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