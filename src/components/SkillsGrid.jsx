import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { tokens } from './ReusableComponents';
import SkillIcon from './SkillIcon';
import skillsData from '../assets/skills.json';

/* ==========================================================================
   ANIMATIONS
   ========================================================================== */
const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ==========================================================================
   STYLED COMPONENTS
   ========================================================================== */
const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[4]};
  flex-wrap: wrap;
`;

const SectionTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.375rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin: 0;
`;

/* ---------- Tab Bar ---------- */
const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[1]};
  margin-bottom: ${tokens.spacing[5]};
`;

const Tab = styled.button`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  border: 1px solid ${props => props.$active ? tokens.colors.rust : tokens.colors.paperBorder};
  background: ${props => props.$active ? tokens.colors.rust : 'transparent'};
  color: ${props => props.$active ? tokens.colors.paperLight : tokens.colors.textMuted};
  cursor: pointer;
  transition: all ${tokens.transitions.fast};

  &:hover {
    border-color: ${props => props.$active ? tokens.colors.rustDark : tokens.colors.rust};
    color: ${props => props.$active ? tokens.colors.paperLight : tokens.colors.rust};
    background: ${props => props.$active ? tokens.colors.rustDark : 'rgba(181, 86, 58, 0.06)'};
  }
`;

/* ---------- Grid ---------- */
const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
  gap: ${tokens.spacing[3]};
  min-height: 100px;
`;

const Tile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[2]};
  padding: ${tokens.spacing[4]} ${tokens.spacing[2]};
  background: ${tokens.colors.paperLight};
  border: 1px solid ${tokens.colors.paperBorder};
  border-radius: ${tokens.radius.md};
  transition: all ${tokens.transitions.base};
  cursor: default;
  animation: ${fadeSlideIn} 0.25s ease both;

  &:hover {
    border-color: ${tokens.colors.rust};
    background: ${tokens.colors.paper};
    transform: translateY(-3px);
    box-shadow: 0 4px 14px rgba(181, 86, 58, 0.12);
  }
`;

const IconBox = styled.div`
  font-size: 1.6rem;
  color: ${tokens.colors.charcoalLight};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${tokens.transitions.fast};

  ${Tile}:hover & {
    color: ${tokens.colors.rust};
  }
`;

const SkillName = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${tokens.colors.textMuted};
  text-align: center;
  line-height: 1.3;
  transition: color ${tokens.transitions.fast};

  ${Tile}:hover & {
    color: ${tokens.colors.charcoal};
  }
`;

/* ==========================================================================
   TAB DEFINITIONS
   To add a new category: add an entry here + use the matching id in skills.json
   ========================================================================== */
const TABS = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'infra', label: 'Infra' },
    { id: 'cicd', label: 'CI/CD' },
];

/* ==========================================================================
   COMPONENT
   ========================================================================== */
const SkillsGrid = () => {
    const [activeTab, setActiveTab] = useState('languages');

    const visible = skillsData.filter(s => s.category === activeTab);

    return (
        <Wrapper>
            <Header>
                <SectionTitle>Tech Stack</SectionTitle>
            </Header>

            <TabBar>
                {TABS.map(tab => (
                    <Tab
                        key={tab.id}
                        $active={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Tab>
                ))}
            </TabBar>

            <Grid>
                {visible.map(skill => (
                    <Tile key={`${activeTab}-${skill.name}`}>
                        <IconBox>
                            <SkillIcon name={skill.name} />
                        </IconBox>
                        <SkillName>{skill.name}</SkillName>
                    </Tile>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default SkillsGrid;