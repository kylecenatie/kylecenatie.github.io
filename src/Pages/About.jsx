import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin, Code, Coffee, Zap } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, Heading3, Heading4,
  BodyLarge, BodyText, Label, Card, CardAccent, SocialLink, AccentLine,
  ProfileImage, TimelineItem, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/Styled';
import IconGridContainer from '../components/TechGridContainer';
import profileImage from '../images/c_gorge.jpg';
import workHistory from '../assets/work_history.json';

const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[12]});
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${tokens.spacing[12]};
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${tokens.spacing[8]};
  }
`;

const HeroImageCol = styled.div`
  @media (max-width: 968px) { display: flex; justify-content: center; }
`;

const RolesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[3]};
  margin-top: ${tokens.spacing[3]};
`;

const Role = styled.span`
  font-size: 0.9rem;
  color: ${tokens.colors.ice};
  
  &:not(:last-child)::after {
    content: '·';
    margin-left: ${tokens.spacing[3]};
    color: ${tokens.colors.textMuted};
  }
`;

const LocationStatus = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[5]};
  margin-top: ${tokens.spacing[6]};
  padding-top: ${tokens.spacing[5]};
  border-top: 1px solid ${tokens.colors.slateLight};
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  color: ${tokens.colors.textSecondary};
  font-size: 0.875rem;
  
  svg { color: ${props => props.$accent ? tokens.colors.ice : tokens.colors.textMuted}; width: 14px; height: 14px; }
`;

const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  background: ${tokens.colors.ice};
  border-radius: 50%;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${tokens.spacing[6]};
  padding: ${tokens.spacing[8]} 0;
  border-top: 1px solid ${tokens.colors.slateLight};
  border-bottom: 1px solid ${tokens.colors.slateLight};
  margin: ${tokens.spacing[10]} 0;
  
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: ${tokens.spacing[4]}; text-align: center; }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${tokens.spacing[12]};
  
  @media (max-width: 968px) { grid-template-columns: 1fr; gap: ${tokens.spacing[8]}; }
`;

const AboutContent = styled.div`
  p { margin-bottom: ${tokens.spacing[4]}; &:last-child { margin-bottom: 0; } }
`;

const ExperienceSection = styled(Section)`
  background: linear-gradient(180deg, transparent 0%, ${tokens.colors.slate} 50%, transparent 100%);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[8]};
`;

const Timeline = styled.div`
  max-width: 800px;
`;

const ExperienceCard = styled(CardAccent)`
  margin-bottom: ${tokens.spacing[2]};
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[2]};
  
  @media (max-width: 640px) { flex-direction: column; gap: ${tokens.spacing[1]}; }
`;

const Period = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.75rem;
  color: ${tokens.colors.ice};
`;

const Company = styled.span`
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
`;

const SocialLinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[12]} 0;
`;

const About = () => {
  const roles = ['Full-Stack Developer', 'Problem Solver', 'Leader', 'Mentor'];
  const stats = [
    { value: '30+', label: 'Projects' },
    { value: '30+', label: 'Projects' },
    { value: '5+', label: 'Years Exp' },
    { value: '∞', label: 'Coffee' },
  ];
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kylecenatie', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kyle-sjoberg/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cenatiempo.kyle@gmail.com', label: 'Email' },
  ];

  return (
    <PageWrapper>
      <GradientBackground />
      
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
                <Flex $align="center" $gap={tokens.spacing[3]} style={{ marginBottom: tokens.spacing[3] }}>
                  <AccentLine $width="32px" />
                  <Label $accent>About</Label>
                </Flex>
                <Heading1>Kyle Sjoberg</Heading1>
                <RolesList>
                  {roles.map((role, i) => <Role key={i}>{role}</Role>)}
                </RolesList>
              </AnimateOnScroll>
              
              <AnimateOnScroll $delay="0.2s">
                <LocationStatus>
                  <StatusItem><MapPin />Seattle, WA</StatusItem>
                </LocationStatus>
              </AnimateOnScroll>
            </div>
          </HeroGrid>
          
          <AnimateOnScroll $delay="0.3s">
            <StatsRow>
              {stats.map((stat, i) => (
                <StatBox key={i}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </StatBox>
              ))}
            </StatsRow>
          </AnimateOnScroll>
          
          <ContentGrid>
            <AnimateOnScroll $delay="0.4s">
              <AboutContent>
                <Heading3 style={{ marginBottom: tokens.spacing[4] }}>About Me</Heading3>
                <BodyText $muted>
                  I'm a developer who believes great software should be both powerful and beautiful. 
                  With 5+ years of experience, I've helped startups and enterprises build products users love.
                </BodyText>
                <BodyText $muted>
                  When not coding, I explore new technologies, contribute to open source, or mentor others.
                </BodyText>
                <BodyText $muted>
                  I thrive in collaborative environments where technical expertise meets creative problem-solving.
                </BodyText>
              </AboutContent>
            </AnimateOnScroll>
            
            <AnimateOnScroll $delay="0.5s">
              <IconGridContainer />
            </AnimateOnScroll>
          </ContentGrid>
        </Container>
      </HeroSection>
      
      <ExperienceSection>
        <Container>
          <SectionHeader>
            <AccentLine $width="32px" />
            <Heading2>Experience</Heading2>
          </SectionHeader>
          
          <Timeline>
            {workHistory.map((exp, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <TimelineItem>
                  <ExperienceCard>
                    <ExperienceHeader>
                      <div>
                        <Heading4>{exp.role}</Heading4>
                        <Company>{exp.company}</Company>
                      </div>
                      <Period>{exp.period}</Period>
                    </ExperienceHeader>
                    <BodyText $muted>{exp.description}</BodyText>
                  </ExperienceCard>
                </TimelineItem>
              </AnimateOnScroll>
            ))}
          </Timeline>
        </Container>
      </ExperienceSection>
      
      <Section $tight>
        <Container>
          <SocialLinksRow>
            {socialLinks.map((social, i) => (
              <SocialLink key={i} href={social.href} target={social.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={social.label}>
                <social.icon size={18} />
              </SocialLink>
            ))}
          </SocialLinksRow>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default About;