import React, { useState } from 'react';
import styled from 'styled-components';
import { Coffee, MapPin, BookOpen, Mountain, Bike, PawPrint, Flag, ChevronDown } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, BodyLarge,
  Label, Card, AccentLine, Tag, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/Styled';

const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[12]});
  text-align: center;
`;

const HeroIntro = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing[5]};
  
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const HobbyCard = styled.article`
  background: ${tokens.colors.slate};
  border: 1px solid ${tokens.colors.slateLight};
  border-radius: ${tokens.radius.md};
  overflow: hidden;
  transition: all ${tokens.transitions.base};
  cursor: pointer;
  
  &:hover {
    background: ${tokens.colors.slateLight};
    border-color: ${tokens.colors.slateLighter};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  
  ${props => props.$expanded && `
    border-color: ${tokens.colors.ice};
    background: ${tokens.colors.slateLight};
  `}
`;

const CardHeader = styled.div`
  padding: ${tokens.spacing[5]};
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[3]};
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(126, 184, 201, 0.1);
  border: 1px solid rgba(126, 184, 201, 0.2);
  border-radius: ${tokens.radius.sm};
  flex-shrink: 0;
  
  svg { color: ${tokens.colors.ice}; }
`;

const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const HobbyTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
  margin-bottom: ${tokens.spacing[1]};
`;

const HobbyDescription = styled.p`
  font-size: 0.85rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.5;
`;

const ExpandIcon = styled.div`
  color: ${tokens.colors.textMuted};
  transition: transform ${tokens.transitions.base};
  ${props => props.$expanded && `transform: rotate(180deg);`}
`;

const ExpandedContent = styled.div`
  max-height: ${props => props.$expanded ? '300px' : '0'};
  opacity: ${props => props.$expanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const ExpandedInner = styled.div`
  padding: 0 ${tokens.spacing[5]} ${tokens.spacing[5]};
  border-top: 1px solid ${tokens.colors.slateLighter};
  padding-top: ${tokens.spacing[4]};
`;

const SkillsLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${tokens.colors.textMuted};
  margin-bottom: ${tokens.spacing[2]};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
  margin-bottom: ${tokens.spacing[4]};
`;

const AchievementBox = styled.div`
  background: rgba(126, 184, 201, 0.08);
  border: 1px solid rgba(126, 184, 201, 0.15);
  border-radius: ${tokens.radius.sm};
  padding: ${tokens.spacing[3]};
`;

const AchievementLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${tokens.colors.ice};
  margin-bottom: ${tokens.spacing[1]};
`;

const AchievementText = styled.p`
  font-size: 0.85rem;
  color: ${tokens.colors.textSecondary};
`;

const PhilosophySection = styled(Section)`
  background: linear-gradient(180deg, transparent 0%, ${tokens.colors.slate} 50%, transparent 100%);
`;

const PhilosophyCard = styled(Card)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: ${tokens.spacing[10]};
`;

const PhilosophyIcon = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto ${tokens.spacing[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(126, 184, 201, 0.1);
  border: 1px solid rgba(126, 184, 201, 0.2);
  border-radius: 50%;
  
  svg { color: ${tokens.colors.ice}; }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing[6]};
  margin-top: ${tokens.spacing[8]};
  padding-top: ${tokens.spacing[6]};
  border-top: 1px solid ${tokens.colors.slateLight};
  
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: ${tokens.spacing[3]}; }
`;

const Hobbies = () => {
  const [expandedHobby, setExpandedHobby] = useState(null);

  const hobbies = [
    { id: 1, title: 'Golfing', icon: Flag, description: 'Most difficult sport I have ever played', skills: ['Patience', 'Strategy', 'Mental Game'], achievement: 'Best score 79' },
    { id: 2, title: 'Mountain Biking', icon: Bike, description: 'Downhill trails with cuts and bruises', skills: ['AZ Trails', 'WA Trails', 'Galbraith Mtn'], achievement: 'No broken bones... yet' },
    { id: 3, title: 'Hiking', icon: Mountain, description: "Finding peace in nature's landscapes", skills: ['Navigation', 'Safety', 'Backpacking'], achievement: 'San Gorgonio in 5 days' },
    { id: 4, title: 'Coffee', icon: Coffee, description: 'The perfect morning brew', skills: ['Black Coffee', 'Pour Over', 'Latte Art'], achievement: 'Some cool latte art' },
    { id: 5, title: 'Travel', icon: MapPin, description: 'Documenting adventures worldwide', skills: ['Photography', 'Planning', 'Culture'], achievement: '25+ countries' },
    { id: 6, title: 'Pets', icon: PawPrint, description: 'Proud pet parent', skills: ['Training', 'Trail Running', 'Patience'], achievement: 'Best hiking buddy' }
  ];

  const stats = [{ value: '150+', label: 'Photos' }, { value: '25+', label: 'Countries' }, { value: '500+', label: 'Miles Hiked' }];

  return (
    <PageWrapper>
      <GradientBackground />
      
      <HeroSection>
        <Container>
          <AnimateOnScroll>
            <HeroIntro>
              <Flex $align="center" $justify="center" $gap={tokens.spacing[3]} style={{ marginBottom: tokens.spacing[4] }}>
                <AccentLine $width="32px" />
                <Label $accent>Beyond Code</Label>
                <AccentLine $width="32px" />
              </Flex>
              <Heading1 style={{ marginBottom: tokens.spacing[4] }}>My Passions</Heading1>
              <BodyLarge $muted $prose style={{ margin: '0 auto' }}>
                Creative pursuits that fuel innovation and bring unique perspectives.
              </BodyLarge>
            </HeroIntro>
          </AnimateOnScroll>
        </Container>
      </HeroSection>
      
      <Section $tight>
        <Container>
          <HobbiesGrid>
            {hobbies.map((hobby, i) => {
              const Icon = hobby.icon;
              const isExpanded = expandedHobby === hobby.id;
              
              return (
                <AnimateOnScroll key={hobby.id} $delay={`${0.05 * i}s`}>
                  <HobbyCard $expanded={isExpanded} onClick={() => setExpandedHobby(isExpanded ? null : hobby.id)}>
                    <CardHeader>
                      <IconWrapper><Icon size={20} /></IconWrapper>
                      <CardContent>
                        <HobbyTitle>{hobby.title}</HobbyTitle>
                        <HobbyDescription>{hobby.description}</HobbyDescription>
                      </CardContent>
                      <ExpandIcon $expanded={isExpanded}><ChevronDown size={16} /></ExpandIcon>
                    </CardHeader>
                    
                    <ExpandedContent $expanded={isExpanded}>
                      <ExpandedInner>
                        <SkillsLabel>Highlights</SkillsLabel>
                        <SkillsList>{hobby.skills.map((s, j) => <Tag key={j}>{s}</Tag>)}</SkillsList>
                        <AchievementBox>
                          <AchievementLabel>🏆 Achievement</AchievementLabel>
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
      
      <PhilosophySection>
        <Container>
          <AnimateOnScroll>
            <PhilosophyCard>
              <PhilosophyIcon><BookOpen size={24} /></PhilosophyIcon>
              <Heading2 style={{ marginBottom: tokens.spacing[4] }}>The Creative Connection</Heading2>
              <BodyLarge $muted $prose style={{ margin: '0 auto', maxWidth: '500px' }}>
                Each hobby teaches something unique that enhances my professional work—attention to detail, patience, and creative problem-solving.
              </BodyLarge>
              <StatsGrid>
                {stats.map((stat, i) => <StatBox key={i} $center><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></StatBox>)}
              </StatsGrid>
            </PhilosophyCard>
          </AnimateOnScroll>
        </Container>
      </PhilosophySection>
    </PageWrapper>
  );
};

export default Hobbies;