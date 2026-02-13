import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import {
  PageWrapper, Container, Flex, DisplayTitle, BodyLarge, Label,
  SocialLink, AccentLine, ProfileImage, GradientBackground, tokens, slideUp,
} from '../components/Styled';
import profileImage from '../images/e05.jpg';

/* ==========================================================================
   HOME PAGE - Dark Coastal Modern
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
    gap: ${tokens.spacing[10]};
  }
`;

const HeroText = styled.div`
  @media (max-width: 968px) { order: 2; }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 968px) { justify-content: center; order: 1; }
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[5]};
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.1s;
  
  @media (max-width: 968px) { justify-content: center; }
`;

const TitleWrapper = styled.div`
  margin-bottom: ${tokens.spacing[6]};
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;
`;

const Subtitle = styled.p`
  font-family: ${tokens.fonts.body};
  font-size: 1.25rem;
  font-weight: 400;
  color: ${tokens.colors.ice};
  margin-bottom: ${tokens.spacing[6]};
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.3s;
`;

const Description = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.4s;
`;

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[5]};
  padding: ${tokens.spacing[2]} ${tokens.spacing[4]};
  background: ${tokens.colors.slate};
  border: 1px solid ${tokens.colors.slateLight};
  border-radius: ${tokens.radius.sm};
  
  svg { color: ${tokens.colors.ice}; width: 14px; height: 14px; }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${tokens.spacing[3]};
  margin-top: ${tokens.spacing[8]};
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.5s;
  
  @media (max-width: 968px) { justify-content: center; }
`;

const ImageContainer = styled.div`
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.3s;
`;

const LargeProfileImage = styled(ProfileImage)`
  width: 360px;
  height: 450px;
  
  @media (max-width: 968px) { width: 260px; height: 325px; }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${tokens.spacing[10]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[2]};
  color: ${tokens.colors.textMuted};
  opacity: 0;
  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.8s;
  
  span {
    font-family: ${tokens.fonts.mono};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  svg { animation: bounce 2s infinite; }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }
  
  @media (max-width: 768px) { display: none; }
`;

const Home = () => {
  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    <PageWrapper>
      <GradientBackground />
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <Eyebrow>
                <AccentLine $width="32px" />
                <Label $accent>Software Engineer</Label>
              </Eyebrow>
              
              <TitleWrapper>
                <DisplayTitle>
                  Kyle<br /><span className="accent">Sjoberg</span>
                </DisplayTitle>
              </TitleWrapper>
              
              <Subtitle>Full Stack Developer · Seattle, WA</Subtitle>
              
              <Description>
                <BodyLarge $muted $prose>
                  I build scalable, cloud-native applications with {yearsOfExperience}+ years 
                  of experience across the full stack—from architecture and DevOps to 
                  clean code and intuitive interfaces.
                </BodyLarge>
                
                <LocationBadge>
                  <MapPin />
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
                <SocialLink href="mailto:cenatiempo.kyle@gmail.com" aria-label="Email">
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