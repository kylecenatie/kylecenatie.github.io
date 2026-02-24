import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, BodyLarge, Label, AccentLine, Tag, GradientBackground, AnimateOnScroll, tokens,
} from '../components/ReusableComponents';
import PageFooter from '../components/PageFooter';
import hobbies from '../assets/hobbies.json';
import Icons from '../components/Icons';

/* ==========================================================================
   HERO
   ========================================================================== */
const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[16]});
  text-align: center;
  padding-bottom: 20px;
`;

const HeroIntro = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

/* ==========================================================================
   GRID
   ========================================================================== */
const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing[6]};

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px)  { grid-template-columns: 1fr; }
`;

/* ==========================================================================
   CARD
   ========================================================================== */
const shimmer = keyframes`
  from { background-position: -200% center; }
  to   { background-position:  200% center; }
`;

const HobbyCard = styled.article`
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: border-color ${tokens.transitions.base},
              box-shadow    ${tokens.transitions.base},
              transform     ${tokens.transitions.base};

  /* top accent bar */
  &::before {
    content: '';
    display: block;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${tokens.colors.rust}      0%,
      ${tokens.colors.rustLight} 50%,
      ${tokens.colors.rust}      100%
    );
    background-size: 200% auto;
    opacity: 0;
    transition: opacity ${tokens.transitions.base};
  }

  &:hover {
    border-color: rgba(181, 86, 58, 0.3);
    box-shadow: 0 6px 24px rgba(45, 42, 38, 0.09);
    transform: translateY(-2px);

    &::before {
      opacity: 1;
      animation: ${shimmer} 2.5s linear infinite;
    }
  }

  ${props => props.$expanded && `
    border-color: ${tokens.colors.rust};
    &::before { opacity: 1; }
  `}
`;

/* ==========================================================================
   CARD HEADER  — icon vertically centered on left
   ========================================================================== */
const CardHeader = styled.div`
  padding: ${tokens.spacing[5]} ${tokens.spacing[6]};
  display: flex;
  align-items: center;   /* ← vertically centers icon with title + description */
  gap: ${tokens.spacing[4]};
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(181, 86, 58, 0.08);
  border: 1px solid rgba(181, 86, 58, 0.18);
  border-radius: ${tokens.radius.md};
  color: ${tokens.colors.rust};
  transition: background ${tokens.transitions.fast},
              border-color ${tokens.transitions.fast};

  ${HobbyCard}:hover & {
    background: rgba(181, 86, 58, 0.14);
    border-color: rgba(181, 86, 58, 0.32);
  }
`;

const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const HobbyTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.175rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin: 0 0 ${tokens.spacing[2]};
  padding-bottom: ${tokens.spacing[2]};
  line-height: 1.25;
  border-bottom: 1px solid ${tokens.colors.paperBorder};
`;

const HobbyDescription = styled.p`
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.55;
  margin: 0;
`;

const ChevronBtn = styled.div`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.$expanded
    ? tokens.colors.rust
    : tokens.colors.paperDark};
  color: ${props => props.$expanded
    ? tokens.colors.paperLight
    : tokens.colors.textMuted};
  transition: background ${tokens.transitions.base},
              color       ${tokens.transitions.base},
              transform   ${tokens.transitions.base};
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

/* ==========================================================================
   EXPANDED PANEL
   ========================================================================== */
const ExpandedContent = styled.div`
  max-height: ${props => props.$expanded ? '400px' : '0'};
  opacity:    ${props => props.$expanded ? '1'    : '0'};
  overflow: hidden;
  transition: max-height 400ms cubic-bezier(0.4, 0, 0.2, 1),
              opacity    300ms ease;
`;

const ExpandedInner = styled.div`
  padding: 0 ${tokens.spacing[6]} ${tokens.spacing[6]};
  border-top: 1px solid ${tokens.colors.paperBorder};
  padding-top: ${tokens.spacing[5]};
`;

const SkillsLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.textMuted};
  margin: 0 0 ${tokens.spacing[3]};
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
  border-left: 3px solid ${tokens.colors.rust};
  border-radius: ${tokens.radius.sm};
  padding: ${tokens.spacing[4]};
`;

const AchievementLabel = styled.p`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.rust};
  margin: 0 0 ${tokens.spacing[2]};
`;

const AchievementText = styled.p`
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
  margin: 0;
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const Hobbies = () => {
  const [expandedHobby, setExpandedHobby] = useState(null);

  return (
    <PageWrapper>
      <GradientBackground />

      <HeroSection>
        <Container>
          <AnimateOnScroll>
            <HeroIntro>
              <Flex $align="center" $justify="center" $gap={tokens.spacing[4]}
                    style={{ marginBottom: tokens.spacing[6] }}>
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
              const isExpanded = expandedHobby === hobby.id;

              return (
                <AnimateOnScroll key={hobby.id} $delay={`${0.05 * index}s`}>
                  <HobbyCard
                    $expanded={isExpanded}
                    onClick={() => setExpandedHobby(isExpanded ? null : hobby.id)}
                  >
                    <CardHeader>
                      <IconWrapper>
                        <Icons name={hobby.icon} />
                      </IconWrapper>

                      <CardContent>
                        <HobbyTitle>{hobby.title}</HobbyTitle>
                        <HobbyDescription>{hobby.description}</HobbyDescription>
                      </CardContent>

                      <ChevronBtn $expanded={isExpanded}>
                        <ChevronDown size={15} />
                      </ChevronBtn>
                    </CardHeader>

                    <ExpandedContent $expanded={isExpanded}>
                      <ExpandedInner>
                        <SkillsLabel>Skills &amp; Highlights</SkillsLabel>
                        <SkillsList>
                          {hobby.skills.map((s, i) => <Tag key={i}>{s}</Tag>)}
                        </SkillsList>
                        <AchievementBox>
                          <AchievementLabel>Achievement</AchievementLabel>
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

      <PageFooter nextLabel="Back Home" nextTo="/" />
    </PageWrapper>
  );
};

export default Hobbies;