import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import {
  PageWrapper,
  Container,
  Flex,
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



const Home = () => {
  const yearsOfExperience = new Date().getFullYear() - 2020;

  return (
    <PageWrapper>
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
                  I'm a full-stack software engineer with {yearsOfExperience}+ years 
                  of experience building scalable, cloud-native applications from concept 
                  to production. I work across the stack—from architecture and DevOps to 
                  clean, maintainable code and intuitive user interfaces.
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
      </HeroSection>
    </PageWrapper>
  );
};

export default Home;