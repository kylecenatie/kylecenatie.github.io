import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Github, Linkedin, Mail, MapPin, Coffee, Code, Heart, Zap, Star, ArrowRight, Download } from 'lucide-react';
import IconGridContainer from '../components/IconGridContainer';
import profileImage from '../images/c_gorge.jpg';
// Keyframe animations
const pulse = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  color: white;
  overflow: hidden;
  position: relative;
`;

const BackgroundElement = styled.div`
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(40px);
  animation: ${pulse} 4s ease-in-out infinite;
  
  &:nth-child(1) {
    top: -160px;
    right: -160px;
    width: 320px;
    height: 320px;
    background: #a855f7;
  }
  
  &:nth-child(2) {
    bottom: -160px;
    left: -160px;
    width: 320px;
    height: 320px;
    background: #06b6d4;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    top: 50%;
    left: 50%;
    width: 320px;
    height: 320px;
    background: #ec4899;
    animation-delay: 1s;
  }
`;

const MouseFollower = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #06b6d4, #a855f7);
  border-radius: 50%;
  pointer-events: none;
  z-index: 50;
  mix-blend-mode: difference;
  transition: all 150ms ease-out;
  transform: ${props => `translate(${props.x - 12}px, ${props.y - 12}px) scale(${props.visible ? 1 : 0})`};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 64px;
  transition: all 1s ease-out;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '40px'});
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
`;

const ProfileImage = styled.img`
  width: 170px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const StatusDot = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 32px;
  height: 32px;
  background: #10b981;
  border-radius: 50%;
  border: 4px solid #0f172a;
  animation: ${bounce} 2s infinite;
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: bold;
  margin-bottom: 16px;
  background: linear-gradient(45deg, #06b6d4, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${float} 6s ease-in-out infinite;
`;

const DynamicText = styled.div`
  font-size: 1.5rem;
  color: #d1d5db;
  margin-bottom: 24px;
  height: 32px;
  
  span {
    display: inline-block;
    transition: all 0.5s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  animation-delay: ${props => props.delay}ms;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
  
  svg {
    width: 32px;
    height: 32px;
    margin: 0 auto 12px;
    color: #06b6d4;
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const AboutSection = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: white;
  }
  
  p {
    color: #d1d5db;
    line-height: 1.7;
    margin-bottom: 16px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 16px;
  
  .location, .status {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9ca3af;
  }
  
  .status {
    color: #10b981;
    
    .dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: ${pulse} 2s infinite;
    }
  }
`;

const SkillsSection = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: white;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 16px;
  cursor: pointer;
  
  .skill-header {
    display: flex;
    justify-content: between;
    align-items: center;
    margin-bottom: 8px;
    
    .name {
      color: white;
      font-weight: 500;
    }
    
    .percentage {
      color: #9ca3af;
      font-size: 0.875rem;
    }
  }
`;

const SkillBar = styled.div`
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  
  .fill {
    height: 100%;
    border-radius: 6px;
    transition: all 1s ease-out;
    transform: ${props => props.active ? 'scaleY(1.2)' : 'scaleY(1)'};
    width: ${props => props.level}%;
    background: linear-gradient(45deg, ${props => props.gradient});
  }
`;

const ExperienceSection = styled.div`
  margin-bottom: 64px;
  
  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 32px;
    text-align: center;
    color: white;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 32px;
  border-left: 2px solid rgba(168, 85, 247, 0.3);
  margin-bottom: 32px;
  transition: all 0.3s ease;
  
  &:hover {
    border-left-color: #a855f7;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #a855f7;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.25);
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.01);
  }
  
  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
    }
    
    .period {
      color: #a855f7;
      font-weight: 500;
    }
  }
  
  .company {
    color: #06b6d4;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .description {
    color: #d1d5db;
  }
`;

const CTASection = styled.div`
  text-align: center;
  
  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: white;
  }
  
  p {
    color: #d1d5db;
    margin-bottom: 32px;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(45deg, #06b6d4, #a855f7);
  color: white;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 50px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: linear-gradient(45deg, #0891b2, #9333ea);
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);
    
    .arrow {
      transform: translateX(4px);
    }
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
`;

const SecondaryButton = styled.button`
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: white;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    
    svg {
      color: white;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: #9ca3af;
    transition: color 0.3s ease;
  }
`;

const About =()=> {
    const im1 = profileImage;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [textIndex, setTextIndex] = useState(0);

  const dynamicTexts = [
    "Full-Stack Developer",
    "Problem Solver", 
    "Creative Thinker",
    "Leader",
    "Mentor",
    "Tech Enthusiast"
  ];

  const skills = [
    { name: 'JavaScript', level: 95, gradient: '#facc15, #f97316' },
    { name: 'React', level: 90, gradient: '#60a5fa, #06b6d4' },
    { name: 'Node.js', level: 85, gradient: '#4ade80, #10b981' },
    { name: 'Python', level: 80, gradient: '#a78bfa, #ec4899' },
    { name: 'TypeScript', level: 88, gradient: '#818cf8, #3b82f6' },
    { name: 'UI/UX', level: 75, gradient: '#fb7185, #ef4444' }
  ];

  const experiences = [
    {
      role: "Full-Stack Software Engineer",
      company: "Nationwide",
      period: "2021 - Present",
      description: "Leading development of cutting-edge web applications"
    },
    {
      role: "Instructors Assistant & Grader",
      company: "Arizona State University",
      period: "2023 - 2024", 
      description: "Guided 300+ undergraduate software engineers complete their capstone projects"
    },
    {
      role: "Software Engineer Intern",
      company: "Arizona Public Services (APS)",
      period: "2021",
      description: "Implemented a continuous testing report for all APIs consumed. Developed an ALE/ETL React dashboard "
    }
  ];

  const stats = [
    { icon: Code, label: "Projects", value: "30+" },
    { icon: Coffee, label: "Coffee Cups", value: "∞" },
    // { icon: Heart, label: "Happy Clients", value: "25+" },
    { icon: Zap, label: "Years Coding", value: "5+" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <Container>
      <BackgroundElement />
      <BackgroundElement />  
      <BackgroundElement />
      
      {/* <MouseFollower 
        x={mousePosition.x} 
        y={mousePosition.y} 
        visible={mousePosition.x > 0}
      /> */}

      <ContentWrapper>
        <Header visible={isVisible}>
          <ProfileImageWrapper>
            <ProfileImage 
              src={im1}
              alt="Profile"
            />
            
          </ProfileImageWrapper>
          
          <MainTitle>Kyle Sjoberg</MainTitle>
          
          <DynamicText>
            <span>{dynamicTexts[textIndex]}</span>
          </DynamicText>
          
          <Description>
            Passionate about crafting exceptional digital experiences that bridge the gap between design and functionality. 
            I turn complex problems into elegant solutions.
          </Description>
        </Header>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} delay={index * 100}>
              <stat.icon />
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <AboutSection>
            <h2>About Me</h2>
            <p>
              I'm a passionate developer who believes great software should be both powerful and beautiful. 
              With over 5 years of experience, I've helped startups and enterprises build products that users love.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge through tech talks and mentoring.
            </p>
            <p>
              I thrive in collaborative environments and believe the best solutions come from combining 
              technical expertise with creative problem-solving.
            </p>
            
            <LocationInfo>
              <div className="location">
                <MapPin size={16} />
                <span>Seattle, WA</span>
              </div>
              <div className="status">
                <div className="dot"></div>
                <span>Available for projects</span>
              </div>
            </LocationInfo>
          </AboutSection>

          <SkillsSection>
            {/* <h3>Skills & Expertise</h3> */}
            <IconGridContainer />
            {/* {skills.map((skill, index) => (
              <SkillItem 
                key={index}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="skill-header">
                  <span className="name">{skill.name}</span>
                  <span className="percentage">{skill.level}%</span>
                </div>
                <SkillBar 
                  level={skill.level} 
                  gradient={skill.gradient}
                  active={activeSkill === index}
                >
                  <div className="fill" />
                </SkillBar>
              </SkillItem>
            ))} */}
          </SkillsSection>
        </ContentGrid>

        <ExperienceSection>
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <ExperienceCard>
                <div className="header">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="company">{exp.company}</div>
                <div className="description">{exp.description}</div>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </ExperienceSection>

        <CTASection>
          <h2>Let's Build Something Amazing</h2>
          <p>
            Ready to bring your ideas to life? I'm always excited to work on new challenges and collaborate with amazing people.
          </p>
          
          <ButtonGroup>
            <PrimaryButton>
              <Mail size={20} />
              Get In Touch
              <ArrowRight size={16} className="arrow" />
            </PrimaryButton>
            
            <SecondaryButton>
              <Download size={20} />
              Download Resume
            </SecondaryButton>
          </ButtonGroup>

          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink key={index} href={social.href} aria-label={social.label}>
                <social.icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </CTASection>
      </ContentWrapper>
    </Container>
  );
}
export default About;