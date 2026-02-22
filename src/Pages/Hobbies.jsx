import React, { useState } from 'react';
import styled from 'styled-components';
import { Coffee, MapPin, BookOpen, Mountain, Bike, PawPrint, Flag, ChevronDown } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, BodyLarge, Label, Card, AccentLine, Tag, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/ReusableComponents';
import PageFooter from '../components/PageFooter';
const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[16]});
  text-align: center;
  padding-bottom: 20px;
  
`;

const HeroIntro = styled.div`
  max-width: 650px;
  
  margin: 0 auto;
`;

const HobbiesGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  gap: ${tokens.spacing[6]};
  
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const HobbyCard = styled.article`
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.md};
  overflow: hidden;
  transition: all ${tokens.transitions.base};
  cursor: pointer;
  
  &:hover {
    border-color: ${tokens.colors.accentSubtle};
    box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
    transform: translateY(-2px);
  }
  
  ${props => props.$expanded && `
    border-color: ${tokens.colors.rust};
  `}
`;

const CardHeader = styled.div`
  padding: ${tokens.spacing[6]};
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[4]};
`;

const IconWrapper = styled.div`

  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(181, 86, 58, 0.1);
  border: 1px solid rgba(181, 86, 58, 0.15);
  border-radius: ${tokens.radius.sm};
  flex-shrink: 0;
  
  svg { color: ${tokens.colors.rust}; }
`;

const CardContent = styled.div`

  flex: 1;
  min-width: 0;
`;

const HobbyTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.25rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin-bottom: ${tokens.spacing[2]};
`;

const HobbyDescription = styled.p`
  font-size: 0.9rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.6;
`;

const ExpandIcon = styled.div`
  color: ${tokens.colors.textMuted};
  transition: transform ${tokens.transitions.base};
  ${props => props.$expanded && `transform: rotate(180deg);`}
`;

const ExpandedContent = styled.div`
  max-height: ${props => props.$expanded ? '400px' : '0'};
  opacity: ${props => props.$expanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ExpandedInner = styled.div`
  padding: 0 ${tokens.spacing[6]} ${tokens.spacing[6]};
  border-top: 1px solid ${tokens.colors.paperBorder};
  padding-top: ${tokens.spacing[5]};
`;

const SkillsLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.textMuted};
  margin-bottom: ${tokens.spacing[3]};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
  margin-bottom: ${tokens.spacing[5]};
`;

const AchievementBox = styled.div`
  background: ${tokens.colors.paperDark};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  padding: ${tokens.spacing[4]};
`;

const AchievementLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.rust};
  margin-bottom: ${tokens.spacing[2]};
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
`;

const AchievementText = styled.p`
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
`;



const Hobbies = () => {
  const [expandedHobby, setExpandedHobby] = useState(null);

  const hobbies = [
    { id: 1, title: 'Golfing', icon: Flag, description: 'Most difficult sport I have ever played', skills: ['Patience', 'Strategy', 'Course Management', 'Mental Game'], achievement: 'Best score 79' },
    { id: 2, title: 'Mountain Biking', icon: Bike, description: 'Downhill mountain trails include cuts and bruises', skills: ['AZ Desert Trails', 'WA Mountain trails', 'Galbraith Mtn', 'Tiger Mtn'], achievement: 'Have not broken any bones... so far.' },
    { id: 3, title: 'Camping & Hiking', icon: Mountain, description: "Finding peace and challenge in nature's landscapes", skills: ['Navigation', 'Wilderness Safety', 'Backpacking', 'Camping'], achievement: 'San Gorgonio, CA in 5 Days' },
    { id: 4, title: 'Coffee Enthusiast', icon: Coffee, description: 'The best way to start the morning', skills: ['Black Coffee', 'Barista Skills', 'Pour Over', 'Brewing Methods'], achievement: 'Make some cool latte art' },
    { id: 5, title: 'Travel', icon: MapPin, description: 'Documenting adventures around the world', skills: ['Storytelling', 'Cultural Research', 'Photography', 'Planning'], achievement: 'Visited 25+ countries' },
    { id: 6, title: 'Pet Owner', icon: PawPrint, description: 'Proud parent to furry companions', skills: ['Dog Training', 'Trail Running', 'Patience'], achievement: 'Best hiking buddy' }
  ];


  return (
    <PageWrapper>
      <GradientBackground />

      <HeroSection>
        <Container>
          <AnimateOnScroll>
            <HeroIntro>
              <Flex $align="center" $justify="center" $gap={tokens.spacing[4]} style={{ marginBottom: tokens.spacing[6] }}>
                <AccentLine />
                <Label $accent>Beyond Code</Label>
                <AccentLine />
              </Flex>
              <Heading1 style={{ marginBottom: tokens.spacing[6] }}>My Passions</Heading1>
              <BodyLarge $muted $prose style={{ margin: '0 auto' }}>
                Beyond the professional realm, these creative pursuits fuel my innovation,
                teach me resilience, and bring unique perspectives to everything I do.
              </BodyLarge>
            </HeroIntro>
          </AnimateOnScroll>
        </Container>
      </HeroSection>

      <Section $tight>
        <Container>
          <HobbiesGrid>
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              const isExpanded = expandedHobby === hobby.id;

              return (
                <AnimateOnScroll key={hobby.id} $delay={`${0.05 * index}s`}>
                  <HobbyCard $expanded={isExpanded} onClick={() => setExpandedHobby(isExpanded ? null : hobby.id)}>
                    <CardHeader>
                      <IconWrapper><Icon size={22} /></IconWrapper>
                      <CardContent>
                        <HobbyTitle>{hobby.title}</HobbyTitle>
                        <HobbyDescription>{hobby.description}</HobbyDescription>
                      </CardContent>
                      <ExpandIcon $expanded={isExpanded}><ChevronDown size={18} /></ExpandIcon>
                    </CardHeader>

                    <ExpandedContent $expanded={isExpanded}>
                      <ExpandedInner>
                        <SkillsLabel>Skills & Places</SkillsLabel>
                        <SkillsList>{hobby.skills.map((s, i) => (<Tag key={i}>{s}</Tag>))}</SkillsList>
                        <AchievementBox>
                          <AchievementLabel><span>🏆</span> Achievement</AchievementLabel>
                          <AchievementText>{hobby.achievement}</AchievementText>
                        </AchievementBox>
                      </ExpandedInner>
                    </ExpandedContent>
                  </HobbyCard>
                </AnimateOnScroll>
              );
            })}
          </HobbiesGrid>
        </Container>
      </Section>
      <PageFooter nextLabel={"Back Home"} nextTo={'/'} />
    </PageWrapper>
  );
};

export default Hobbies;