



import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Camera, Music, Palette, Coffee, MapPin, BookOpen, Mountain, LandPlot, Bike, PawPrint, Code } from 'lucide-react';

// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
`;

const slideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  position: relative;
  overflow: hidden;
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(40px);
  animation: ${float} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => 20 + Math.sin(props.delay * 2) * 30}%;
  top: ${props => 30 + Math.cos(props.delay * 2) * 20}%;
  width: ${props => 100 + Math.sin(props.delay) * 50}px;
  height: ${props => 100 + Math.sin(props.delay) * 50}px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
`;

const MouseFollower = styled.div`
  position: fixed;
  width: 384px;
  height: 384px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.1;
  filter: blur(60px);
  transition: all 0.3s ease-out;
  z-index: 0;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.2), transparent);
  left: ${props => props.x - 192}px;
  top: ${props => props.y - 192}px;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  animation: ${slideUp} 1s ease-out;
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #e5d5ff 50%, #bfdbfe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 5s ease infinite;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.75;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 6rem;
  height: 4px;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HobbyCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${slideUp} 1s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: backwards;
  
  &:hover {
    transform: scale(1.05) translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  ${props => props.isActive && css`
    transform: scale(1.05);
    ring: 2px solid #a855f7;
    box-shadow: 0 0 0 2px #a855f7;
  `}
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.gradient};
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: 1.5rem;
  
  ${HobbyCard}:hover & {
    opacity: 0.1;
  }
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${props => props.gradient};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  ${HobbyCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const HobbyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  ${HobbyCard}:hover & {
    background: linear-gradient(135deg, #e5d5ff, #bfdbfe);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const HobbyDescription = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.75;
`;

const ExpandableContent = styled.div`
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${props => props.isActive ? '400px' : '0'};
  opacity: ${props => props.isActive ? '1' : '0'};
`;

const ExpandableInner = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
`;

const SkillsTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #e5d5ff;
  margin-bottom: 0.75rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #d1d5db;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const AchievementBox = styled.div`
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 0.5rem;
  padding: 0.75rem;
  border: 1px solid rgba(147, 51, 234, 0.3);
`;

const AchievementTitle = styled.p`
  font-size: 0.875rem;
  color: #e5d5ff;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const AchievementText = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
`;

const ClickIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #9ca3af;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${HobbyCard}:hover & {
    opacity: 1;
  }
`;

const PhilosophySection = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const PhilosophyCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${slideUp} 1s ease-out 0.8s backwards;
`;

const PhilosophyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
`;

const PhilosophyText = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const Hobbies = () => {
  const [activeHobby, setActiveHobby] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const hobbies = [
    {
      id: 1,
      title: "Golfing",
      icon: LandPlot,
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      description: "Most difficult sport I have ever played",
      skills: ["Portrait Photography", "Landscape", "Street Photography", "Digital Editing"],
      achievement: "Best score 79"
    },
    {
      id: 2,
      title: "Mountain Biking",
      icon: Bike,
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
      description: "Downhill mountain trails include cuts and bruises",
      skills: ["AZ Desert Trails", "WA Mountain trails", "Galbraith Mtn", "Tiger Mtn"],
      achievement: "Have not broken any bones... so far."
    },
    {
      id: 3,
      title: "Camping & Hiking",
      icon: Mountain,
     gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
      description: "Finding peace and challenge in nature's greatest landscapes",
      skills: ["Navigation", "Wilderness Safety", "Backpacking", "Camping"],
      achievement: "San Gergonio, CA in 5 Days"
    },
    {
      id: 4,
      title: "Coffee Connoisseur",
      icon: Coffee,
      gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
      description: "The best way to start the morning is with a perfect brew",
      skills: ["Black Coffee", "Barista", "", "Brewing Methods"],
      achievement: "Make some cool latte art"
    },
    {
      id: 5,
      title: "Traveler",
      icon: MapPin,
      gradient: "linear-gradient(135deg, #ef4444, #f43f5e)",
      description: "Documenting adventures and cultural discoveries around the world",
      skills: ["Storytelling", "Cultural Research", "Photography", "Blog Writing"],
      achievement: "Published in 3 travel magazines"
    },
    {
      id: 6,
      title: "Pet Owner",
      icon: PawPrint,
      gradient: "linear-gradient(135deg, #64748b, #6b7280)",
      description: "",
      skills: ["Navigation", "Wilderness Safety", "Photography", "Camping"],
      achievement: "Completed Pacific Crest Trail section"
    }
  ];

  return (
    <PageContainer>
      {/* Animated Background Elements */}
      <div>
        {[0, 1, 2, 3].map(delay => (
          <FloatingOrb key={delay} delay={delay} />
        ))}
      </div>

      {/* Mouse Follower */}
      <MouseFollower x={mousePosition.x} y={mousePosition.y} />

      <ContentContainer>
        {/* Header Section */}
        <Header>
          <MainTitle>My Passions</MainTitle>
          <Subtitle>
            Beyond the professional realm, these creative pursuits fuel my innovation, 
            teach me resilience, and bring unique perspectives to everything I do.
          </Subtitle>
          <Divider />
        </Header>

        {/* Hobbies Grid */}
        <HobbiesGrid>
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            const isActive = activeHobby === hobby.id;
            
            return (
              <HobbyCard
                key={hobby.id}
                index={index}
                isActive={isActive}
                onClick={() => setActiveHobby(isActive ? null : hobby.id)}
              >
                <GradientBackground gradient={hobby.gradient} />
                
                <IconContainer gradient={hobby.gradient}>
                  <Icon size={32} color="white" />
                </IconContainer>

                <HobbyTitle>{hobby.title}</HobbyTitle>
                <HobbyDescription>{hobby.description}</HobbyDescription>

                <ExpandableContent isActive={isActive}>
                  <ExpandableInner>
                    <SkillsTitle>Skills & Places</SkillsTitle>
                    <SkillsContainer>
                      {hobby.skills.map((skill, skillIndex) => (
                        <SkillTag key={skillIndex}>{skill}</SkillTag>
                      ))}
                    </SkillsContainer>
                    <AchievementBox>
                      <AchievementTitle>🏆 Achievement</AchievementTitle>
                      <AchievementText>{hobby.achievement}</AchievementText>
                    </AchievementBox>
                  </ExpandableInner>
                </ExpandableContent>

                <ClickIndicator>Click to explore</ClickIndicator>
              </HobbyCard>
            );
          })}
        </HobbiesGrid>

        {/* Philosophy Section */}
        <PhilosophySection>
          <PhilosophyCard>
            <BookOpen size={48} color="#a855f7" style={{ margin: '0 auto 1.5rem' }} />
            <PhilosophyTitle>The Creative Connection</PhilosophyTitle>
            <PhilosophyText>
              Each hobby teaches me something unique that enhances my professional work. 
              Photography sharpens my eye for detail and composition, music production develops 
              my understanding of rhythm and flow, while travel writing expands my cultural awareness 
              and communication skills.
            </PhilosophyText>
            <StatsGrid>
              <StatItem>
                <StatNumber color="#a855f7">150+</StatNumber>
                <StatLabel>Photos Captured</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber color="#06b6d4">25+</StatNumber>
                <StatLabel>Countries Visited</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber color="#f43f5e">500+</StatNumber>
                <StatLabel>Miles Hiked</StatLabel>
              </StatItem>
            </StatsGrid>
          </PhilosophyCard>
        </PhilosophySection>
      </ContentContainer>
    </PageContainer>
  );
};

export default Hobbies;