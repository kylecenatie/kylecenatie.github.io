import React from 'react';
import styled from 'styled-components';
import { tokens } from './Styled';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: ${tokens.spacing[3]};
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[2]};
  padding: ${tokens.spacing[3]};
  background: ${tokens.colors.slate};
  border: 1px solid ${tokens.colors.slateLight};
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transitions.base};
  
  &:hover {
    background: ${tokens.colors.slateLight};
    border-color: ${tokens.colors.ice};
    transform: translateY(-2px);
  }
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${tokens.colors.silver};
`;

const TechLabel = styled.span`
  font-size: 0.65rem;
  color: ${tokens.colors.textMuted};
  text-align: center;
  font-weight: 500;
`;

const SectionTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
  margin-bottom: ${tokens.spacing[4]};
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
      {techStack.map((tech, i) => (
        <TechItem key={i}>
          <IconBox>{tech.icon}</IconBox>
          <TechLabel>{tech.name}</TechLabel>
        </TechItem>
      ))}
    </GridWrapper>
  </div>
);

export default IconGridContainer;