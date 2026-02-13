import React from 'react';
import styled from 'styled-components';
import { tokens } from './Styled';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${tokens.spacing[4]};
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[2]};
  padding: ${tokens.spacing[4]};
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transitions.base};
  
  &:hover {
    border-color: ${tokens.colors.rust};
    background: ${tokens.colors.paper};
    transform: translateY(-2px);
  }
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${tokens.colors.charcoal};
`;

const TechLabel = styled.span`
  font-size: 0.7rem;
  color: ${tokens.colors.textMuted};
  text-align: center;
  font-weight: 500;
`;

const SectionTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.375rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin-bottom: ${tokens.spacing[6]};
`;

const techStack = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
];

const IconGridContainer = () => (
  <div>
    <SectionTitle>Tech Stack</SectionTitle>
    <GridWrapper>
      {techStack.map((tech, index) => (
        <TechItem key={index}>
          <IconBox>{tech.icon}</IconBox>
          <TechLabel>{tech.name}</TechLabel>
        </TechItem>
      ))}
    </GridWrapper>
  </div>
);

export default IconGridContainer;