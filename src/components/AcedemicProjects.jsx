import React from 'react';
import styled from 'styled-components';
import { tokens, AccentLine, Heading2, Card } from './ReusableComponents';
import projectsData from '../assets/projects.json';

/* ==========================================================================
   STYLED COMPONENTS
   ========================================================================== */
const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[3]};
`;

const SectionSubtitle = styled.p`
  color: ${tokens.colors.textSecondary};
  max-width: 600px;
  margin-bottom: ${tokens.spacing[10]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${tokens.spacing[6]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  padding: ${tokens.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[4]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${tokens.colors.rust};
    opacity: 0;
    transition: opacity ${tokens.transitions.base};
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: ${tokens.colors.accentSubtle};
    box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
    transform: translateY(-2px);
  }
`;

const ProjectNumber = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${tokens.colors.rust};
`;

const ProjectTitle = styled.h4`
  font-family: ${tokens.fonts.display};
  font-size: 1.2rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9375rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.7;
  flex: 1;
`;

const OutcomeBox = styled.div`
  background: ${tokens.colors.paperDark};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  padding: ${tokens.spacing[4]};
`;

const OutcomeLabel = styled.p`
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

const OutcomeText = styled.p`
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[2]};
`;

const TechTag = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  background: rgba(181, 86, 58, 0.1);
  color: ${tokens.colors.rust};
  border: 1px solid rgba(181, 86, 58, 0.25);
  transition: all ${tokens.transitions.fast};

  &:hover {
    background: rgba(181, 86, 58, 0.18);
    border-color: ${tokens.colors.rust};
  }
`;

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const AcademicProjects = () => (
  <div>
    <SectionHeader>
      <AccentLine $width="40px" />
      <Heading2>Academic Projects</Heading2>
    </SectionHeader>
    <SectionSubtitle>
      Hands-on projects from graduate and undergraduate coursework, applying theory to real problems.
    </SectionSubtitle>

    <Grid>
      {projectsData.map((project, i) => (
        <ProjectCard key={i} $hoverable>
          <ProjectNumber>Project {String(i + 1).padStart(2, '0')}</ProjectNumber>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <OutcomeBox>
            <OutcomeLabel>Key Outcome</OutcomeLabel>
            <OutcomeText>{project.outcome}</OutcomeText>
          </OutcomeBox>
          <TechStack>
            {project.tech.map((t, j) => (
              <TechTag key={j}>{t}</TechTag>
            ))}
          </TechStack>
        </ProjectCard>
      ))}
    </Grid>
  </div>
);

export default AcademicProjects;