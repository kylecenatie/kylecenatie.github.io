import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Palette, 
  Settings, 
  Zap, 
  Shield,
  Cloud,
  Monitor,
  Cpu,
  Wifi,
  Box,
  GitBranch,
  Server,
  Terminal
} from 'lucide-react';

// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const slideUpFade = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const rotateGradient = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const Container = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 3s infinite;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e5d5ff 50%, #bfdbfe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.75rem;
  animation: ${slideUpFade} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #d1d5db;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  animation: ${slideUpFade} 0.8s ease-out 0.2s backwards;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${slideUpFade} 0.8s ease-out 0.4s backwards;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const CategoryTab = styled.button`
  background: ${props => props.active ? 
    'linear-gradient(135deg, #8b5cf6, #06b6d4)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.active ? 'white' : '#d1d5db'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #7c3aed, #0891b2)' : 
      'rgba(255, 255, 255, 0.15)'
    };
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  animation: ${slideUpFade} 0.8s ease-out 0.6s backwards;
  
  @media (max-width: 868px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

const IconItem = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${slideUpFade} 0.6s ease-out ${props => props.index * 0.1}s backwards;
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => props.gradient};
    border-radius: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    animation: ${rotateGradient} 3s linear infinite;
  }
  
  &:hover::before {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 1.25rem;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.gradient};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.index * 0.2}s;
  
  ${IconItem}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const IconLabel = styled.span`
  color: #e5e7eb;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  
  ${IconItem}:hover & {
    color: white;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const SkillLevel = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => {
    switch(props.level) {
      case 'expert': return '#10b981';
      case 'advanced': return '#06b6d4';
      case 'intermediate': return '#f59e0b';
      default: return '#8b5cf6';
    }
  }};
  animation: ${pulse} 2s infinite;
  
  &::after {
    content: '${props => {
      switch(props.level) {
        case 'expert': return 'Expert';
        case 'advanced': return 'Advanced';
        case 'intermediate': return 'Intermediate';
        default: return 'Learning';
      }
    }}';
    position: absolute;
    top: -30px;
    right: -20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 10;
  }
  
  ${IconItem}:hover &::after {
    opacity: 1;
  }
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${slideUpFade} 0.8s ease-out 1s backwards;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const IconGridContainer = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'cloud', label: 'Cloud' }
  ];

  const technologies = [
    {
      id: 1,
      name: 'React',
      icon: Code,
      category: 'frontend',
      level: 'expert',
      gradient: 'linear-gradient(135deg, #61dafb, #21b8c4)'
    },
    {
      id: 2,
      name: 'Node.js',
      icon: Server,
      category: 'backend',
      level: 'advanced',
      gradient: 'linear-gradient(135deg, #68d391, #38a169)'
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: Terminal,
      category: 'frontend',
      level: 'advanced',
      gradient: 'linear-gradient(135deg, #3178c6, #235a97)'
    },
    {
      id: 4,
      name: 'PostgreSQL',
      icon: Database,
      category: 'backend',
      level: 'intermediate',
      gradient: 'linear-gradient(135deg, #336791, #2d5a87)'
    },
    {
      id: 6,
      name: 'AWS',
      icon: Cloud,
      category: 'cloud',
      level: 'advanced',
      gradient: 'linear-gradient(135deg, #ff9900, #ec7211)'
    },

    {
      id: 8,
      name: 'Docker',
      icon: Box,
      category: 'tools',
      level: 'intermediate',
      gradient: 'linear-gradient(135deg, #2496ed, #1d63ed)'
    },
    {
      id: 9,
      name: 'GraphQL',
      icon: Zap,
      category: 'backend',
      level: 'intermediate',
      gradient: 'linear-gradient(135deg, #e10098, #c6007e)'
    },
    {
      id: 10,
      name: 'Figma',
      icon: Palette,
      category: 'tools',
      level: 'advanced',
      gradient: 'linear-gradient(135deg, #f24e1e, #a259ff)'
    },
    {
      id: 11,
      name: 'Git',
      icon: GitBranch,
      category: 'tools',
      level: 'expert',
      gradient: 'linear-gradient(135deg, #f14e32, #e94e32)'
    },
    {
      id: 12,
      name: 'Kubernetes',
      icon: Settings,
      category: 'cloud',
      level: 'learning',
      gradient: 'linear-gradient(135deg, #326ce5, #4285f4)'
    },
    {
      id: 13,
      name: 'MongoDB',
      icon: Database,
      category: 'backend',
      level: 'advanced',
      gradient: 'linear-gradient(135deg, #47a248, #3e8e3e)'
    },
    {
      id: 14,
      name: 'Redis',
      icon: Cpu,
      category: 'backend',
      level: 'intermediate',
      gradient: 'linear-gradient(135deg, #dc382d, #b32821)'
    }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const stats = [
    { number: '16+', label: 'Technologies', color: '#8b5cf6' },
    { number: '4', label: 'Categories', color: '#06b6d4' },
    { number: '5+', label: 'Years', color: '#ec4899' }
  ];

  return (
    <Container>
      <Header>
        <Title>Tech Stack</Title>
        <Subtitle>Technologies and tools I use to bring ideas to life</Subtitle>
        
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>
      </Header>

      <IconGrid>
        {filteredTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <IconItem 
              key={tech.id} 
              index={index}
              gradient={tech.gradient}
            >
              <SkillLevel level={tech.level} />
              <IconWrapper gradient={tech.gradient} index={index}>
                <Icon size={24} color="white" />
              </IconWrapper>
              <IconLabel>{tech.name}</IconLabel>
            </IconItem>
          );
        })}
      </IconGrid>

      {/* <StatsSection>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <StatNumber color={stat.color}>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsSection> */}
    </Container>
  );
};

export default IconGridContainer;