import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ChevronDown, Calendar } from 'lucide-react';
import { tokens, AccentLine, Label } from './ReusableComponents';
import workHistory from '../assets/work_history.json';

/* ==========================================================================
   ANIMATIONS
   ========================================================================== */
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(181, 86, 58, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(181, 86, 58, 0);
  }
`;

/* ==========================================================================
   SECTION STYLES
   ========================================================================== */
const ExperienceWrapper = styled.section`
  background: ${tokens.colors.paperDark};
  padding: ${tokens.spacing[24]} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 80px,
      rgba(181, 86, 58, 0.02) 80px,
      rgba(181, 86, 58, 0.02) 81px
    );
    pointer-events: none;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${tokens.spacing[6]};
  
  @media (max-width: 768px) {
    padding: 0 ${tokens.spacing[4]};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${tokens.spacing[12]};
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[6]};
`;

const SectionTitle = styled.h2`
  font-family: ${tokens.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  line-height: 1.2;
`;



/* ==========================================================================
   ACCORDION STYLES
   ========================================================================== */
const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[3]};
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  background: ${tokens.colors.paperLight};
  border: 2px solid ${props => props.$isOpen ? tokens.colors.rust : tokens.colors.paperBorder};
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  transition: all ${tokens.transitions.slow};
  
  ${props => props.$isOpen && css`
    box-shadow: 
      0 20px 40px -12px rgba(45, 42, 38, 0.15),
      0 0 0 1px rgba(181, 86, 58, 0.1);
    transform: scale(1.01);
  `}
  
  &:hover {
    border-color: ${props => props.$isOpen ? tokens.colors.rust : tokens.colors.rustLight};
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: ${tokens.spacing[5]};
  padding: ${tokens.spacing[6]} ${tokens.spacing[8]};
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all ${tokens.transitions.base};
  
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
    gap: ${tokens.spacing[4]};
    padding: ${tokens.spacing[5]};
  }
  
  &:hover {
    background: rgba(181, 86, 58, 0.03);
  }
`;

const IndexNumber = styled.div`
  font-family: ${tokens.fonts.mono};
  font-size: ${props => props.$current ? '0.7rem' : '0.7rem'};
  font-weight: 600;
  color: ${props => props.$current ? tokens.colors.rust : tokens.colors.textMuted};
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid ${props => props.$current ? tokens.colors.rust : tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  background: ${props => props.$current ? 'rgba(181, 86, 58, 0.08)' : 'transparent'};
  flex-shrink: 0;
  
  ${props => props.$current && css`
    animation: ${pulseGlow} 3s infinite;
  `}
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[1]};
  min-width: 0;
`;

const RoleTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.25rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  line-height: 1.2;
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${tokens.fonts.mono};
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: ${tokens.colors.paperLight};
  background: linear-gradient(135deg, ${tokens.colors.rust}, ${tokens.colors.rustLight});
  padding: 4px 10px;
  border-radius: 100px;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: ${tokens.colors.paperLight};
    border-radius: 50%;
    animation: ${pulseGlow} 2s infinite;
  }
`;

const CompanyName = styled.span`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  color: ${tokens.colors.rust};
  font-weight: 500;
  letter-spacing: -0.01em;
  
  @media (max-width: 640px) {
    font-size: 0.875rem;
  }
`;

const PeriodDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  font-family: ${tokens.fonts.mono};
  font-size: 0.875rem;
  color: ${tokens.colors.textMuted};
  white-space: nowrap;
  padding: ${tokens.spacing[2]} ${tokens.spacing[4]};
  background: ${tokens.colors.paperDark};
  border-radius: ${tokens.radius.md};
  
  svg {
    width: 14px;
    height: 14px;
    color: ${tokens.colors.textMuted};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.$isOpen ? tokens.colors.rust : tokens.colors.paperDark};
  transition: all ${tokens.transitions.base};
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.$isOpen ? tokens.colors.paperLight : tokens.colors.textMuted};
    transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
    transition: transform ${tokens.transitions.base};
  }
`;

/* ==========================================================================
   EXPANDED CONTENT STYLES
   ========================================================================== */
const AccordionContent = styled.div`
  overflow: hidden;
  max-height: ${props => props.$isOpen ? '600px' : '0'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: all ${tokens.transitions.slow};
`;

const ContentInner = styled.div`
  padding: 0 ${tokens.spacing[8]} ${tokens.spacing[8]};
  padding-left: calc(36px + ${tokens.spacing[8]} + ${tokens.spacing[5]});
  animation: ${props => props.$isOpen ? css`${slideIn} 0.3s ease-out` : 'none'};
  
  @media (max-width: 768px) {
    padding: 0 ${tokens.spacing[5]} ${tokens.spacing[6]};
    padding-left: ${tokens.spacing[5]};
  }
`;

const ContentDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    ${tokens.colors.rust} 0%,
    ${tokens.colors.paperBorder} 50%,
    transparent 100%
  );
  margin-bottom: ${tokens.spacing[6]};
`;

const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[3]};
  max-width: 65ch;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[3]};
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: ${tokens.colors.textSecondary};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${tokens.colors.rust};
    flex-shrink: 0;
    margin-top: 0.55em;
  }
`;

const MobilePeriod = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${tokens.spacing[2]};
    font-family: ${tokens.fonts.mono};
    font-size: 0.75rem;
    color: ${tokens.colors.textMuted};
    margin-top: ${tokens.spacing[4]};
    padding-top: ${tokens.spacing[4]};
    border-top: 1px dashed ${tokens.colors.paperBorder};
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;


const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const isCurrent = (period) => {
    return period.toLowerCase().includes('present') || period.toLowerCase().includes('current');
  };

  const formatIndex = (index) => {
    return String(index + 1).padStart(2, '0');
  };

  return (
    <ExperienceWrapper>
      <Container>
        <SectionHeader>
          <Eyebrow>
            <AccentLine />
            <Label $accent>Professional Work History</Label>
            <AccentLine />
          </Eyebrow>
          <SectionTitle>Career Journey</SectionTitle>
        </SectionHeader>

        <AccordionContainer>
          {workHistory.map((exp, index) => {
            const isOpen = openIndex === index;
            const current = isCurrent(exp.period);

            return (
              <AccordionItem key={index} $isOpen={isOpen}>
                <AccordionHeader
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`content-${index}`}
                >
                  <IndexNumber $current={current}>
                    {formatIndex(index)}
                  </IndexNumber>

                  <TitleGroup>
                    <RoleTitle>
                      {exp.role}
                      {current && <CurrentBadge>Now</CurrentBadge>}
                    </RoleTitle>
                    <CompanyName>{exp.company}</CompanyName>
                  </TitleGroup>

                  <PeriodDisplay>
                    <Calendar />
                    {exp.period}
                  </PeriodDisplay>

                  <ChevronIcon $isOpen={isOpen}>
                    <ChevronDown />
                  </ChevronIcon>
                </AccordionHeader>

                <AccordionContent
                  id={`content-${index}`}
                  $isOpen={isOpen}
                  aria-hidden={!isOpen}
                >
                  <ContentInner $isOpen={isOpen}>
                    <ContentDivider />
                    <DescriptionList>
                      {exp.description.map((item, i) => (
                        <DescriptionItem key={i}>{item}</DescriptionItem>
                      ))}
                    </DescriptionList>
                    <MobilePeriod>
                      <Calendar />
                      {exp.period}
                    </MobilePeriod>
                  </ContentInner>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </AccordionContainer>
      </Container>
    </ExperienceWrapper>
  );
};

export default ExperienceSection;