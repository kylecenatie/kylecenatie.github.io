import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ChevronDown, Calendar } from 'lucide-react';
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
  background: var(--color-paper-dark);
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
  
  /* Subtle diagonal texture */
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
  max-width: var(--max-width-content);
  margin: 0 auto;
  padding: 0 var(--space-6);
  
  @media (max-width: 768px) {
    padding: 0 var(--space-4);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
`;

const AccentLine = styled.div`
  width: 40px;
  height: 3px;
  background: var(--color-rust);
  border-radius: 2px;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 400;
  color: var(--color-charcoal);
  
  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`;

const HeaderDecoration = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: auto;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const DecorativeSquare = styled.div`
  width: 8px;
  height: 8px;
  background: ${props => props.$filled ? 'var(--color-rust)' : 'transparent'};
  border: 2px solid var(--color-rust);
  transform: rotate(45deg);
  opacity: ${props => props.$opacity || 1};
`;

/* ==========================================================================
   ACCORDION STYLES
   ========================================================================== */
const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  position: relative;
  z-index: 1;
`;

const AccordionItem = styled.div`
  background: var(--color-paper-light);
  border: 2px solid ${props => props.$isOpen ? 'var(--color-rust)' : 'var(--color-paper-border)'};
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-slow);
  
  ${props => props.$isOpen && css`
    box-shadow: 
      0 20px 40px -12px rgba(45, 42, 38, 0.15),
      0 0 0 1px rgba(181, 86, 58, 0.1);
    transform: scale(1.01);
  `}
  
  &:hover {
    border-color: ${props => props.$isOpen ? 'var(--color-rust)' : 'var(--color-rust-light)'};
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-6) var(--space-8);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-base);
  
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
    gap: var(--space-4);
    padding: var(--space-5);
  }
  
  &:hover {
    background: rgba(181, 86, 58, 0.03);
  }
`;

const IndexNumber = styled.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  color: ${props => props.$current ? 'var(--color-rust)' : 'var(--color-text-muted)'};
  letter-spacing: 0.1em;
  
  /* Bold number styling */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid ${props => props.$current ? 'var(--color-rust)' : 'var(--color-paper-border)'};
  border-radius: var(--radius-sm);
  background: ${props => props.$current ? 'rgba(181, 86, 58, 0.08)' : 'transparent'};
  
  ${props => props.$current && css`
    animation: ${pulseGlow} 3s infinite;
  `}
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const RoleTitle = styled.h3`
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 400;
  color: var(--color-charcoal);
  line-height: 1.2;
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    font-size: var(--text-lg);
  }
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--color-paper-light);
  background: linear-gradient(135deg, var(--color-rust), var(--color-rust-light));
  padding: 4px 10px;
  border-radius: 100px;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--color-paper-light);
    border-radius: 50%;
    animation: ${pulseGlow} 2s infinite;
  }
`;

const CompanyName = styled.span`
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-rust);
  font-weight: 500;
  letter-spacing: -0.01em;
  
  @media (max-width: 640px) {
    font-size: var(--text-sm);
  }
`;

const PeriodDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  white-space: nowrap;
  padding: var(--space-2) var(--space-4);
  background: var(--color-paper-dark);
  border-radius: var(--radius-md);
  
  svg {
    width: 14px;
    height: 14px;
    color: var(--color-text-muted);
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
  background: ${props => props.$isOpen ? 'var(--color-rust)' : 'var(--color-paper-dark)'};
  transition: all var(--transition-base);
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.$isOpen ? 'var(--color-paper-light)' : 'var(--color-text-muted)'};
    transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
    transition: transform var(--transition-base);
  }
`;

/* ==========================================================================
   EXPANDED CONTENT STYLES
   ========================================================================== */
const AccordionContent = styled.div`
  overflow: hidden;
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: all var(--transition-slow);
`;

const ContentInner = styled.div`
  padding: 0 var(--space-8) var(--space-8);
  padding-left: calc(36px + var(--space-8) + var(--space-5));
  animation: ${props => props.$isOpen ? slideIn : 'none'} 0.3s ease-out;
  
  @media (max-width: 768px) {
    padding: 0 var(--space-5) var(--space-6);
    padding-left: var(--space-5);
  }
`;

const ContentDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    var(--color-rust) 0%,
    var(--color-paper-border) 50%,
    transparent 100%
  );
  margin-bottom: var(--space-6);
`;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
  max-width: var(--max-width-prose);
`;

const MobilePeriod = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    margin-top: var(--space-4);
    padding-top: var(--space-4);
    border-top: 1px dashed var(--color-paper-border);
    
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
          <AccentLine />
          <SectionTitle>Career Journey</SectionTitle>
          <HeaderDecoration>
            <DecorativeSquare $filled $opacity={1} />
            <DecorativeSquare $opacity={0.6} />
            <DecorativeSquare $opacity={0.3} />
          </HeaderDecoration>
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
                    <Description>{exp.description}</Description>
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