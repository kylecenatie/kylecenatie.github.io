import React from 'react';
import styled from 'styled-components';
import { GraduationCap, BookOpen, Trophy, Calendar, MapPin, CheckCircle, Brain, Cloud, Database, Code2 } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, BodyLarge, BodyText,
  Label, Card, AccentLine, Tag, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/Styled';

const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[12]});
  text-align: center;
`;

const HeroIntro = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing[6]};
  max-width: 500px;
  margin: ${tokens.spacing[10]} auto;
  padding: ${tokens.spacing[6]} 0;
  border-top: 1px solid ${tokens.colors.slateLight};
  border-bottom: 1px solid ${tokens.colors.slateLight};
  
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: ${tokens.spacing[3]}; }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[2]};
`;

const SectionSubtitle = styled.p`
  color: ${tokens.colors.textSecondary};
  max-width: 550px;
  margin-bottom: ${tokens.spacing[8]};
  font-size: 0.95rem;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${tokens.spacing[6]};
  
  @media (max-width: 968px) { grid-template-columns: 1fr; }
`;

const DegreeCard = styled(Card)`
  padding: ${tokens.spacing[8]};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${tokens.colors.ice}, ${tokens.colors.frost});
  }
`;

const DegreeType = styled.span`
  display: inline-block;
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${tokens.colors.ice};
  background: rgba(126, 184, 201, 0.1);
  border: 1px solid rgba(126, 184, 201, 0.2);
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  margin-bottom: ${tokens.spacing[3]};
`;

const DegreeTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
  margin-bottom: ${tokens.spacing[1]};
`;

const Institution = styled.p`
  font-size: 0.95rem;
  color: ${tokens.colors.ice};
  margin-bottom: ${tokens.spacing[3]};
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[4]};
  padding-bottom: ${tokens.spacing[3]};
  border-bottom: 1px solid ${tokens.colors.slateLight};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: ${tokens.colors.textMuted};
  
  svg { width: 12px; height: 12px; }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${tokens.spacing[4]};
`;

const AchievementsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[2]};
  font-size: 0.85rem;
  color: ${tokens.colors.textSecondary};
  
  svg { color: ${tokens.colors.ice}; flex-shrink: 0; margin-top: 2px; width: 14px; height: 14px; }
`;

const CoursesSection = styled(Section)`
  background: linear-gradient(180deg, transparent 0%, ${tokens.colors.slate} 50%, transparent 100%);
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${tokens.spacing[5]};
`;

const CourseCard = styled(Card)`
  padding: ${tokens.spacing[5]};
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${tokens.spacing[2]};
  margin-bottom: ${tokens.spacing[2]};
`;

const CourseTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
`;

const StatusBadge = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: ${tokens.radius.sm};
  white-space: nowrap;
  background: ${props => props.$completed ? 'rgba(126, 184, 201, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.$completed ? tokens.colors.ice : tokens.colors.textMuted};
  border: 1px solid ${props => props.$completed ? 'rgba(126, 184, 201, 0.2)' : tokens.colors.slateLight};
`;

const Provider = styled.p`
  font-size: 0.8rem;
  color: ${tokens.colors.textMuted};
  margin-bottom: ${tokens.spacing[3]};
`;

const ProgressBar = styled.div`
  height: 3px;
  background: ${tokens.colors.slateLight};
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: ${tokens.spacing[2]};
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background: ${tokens.colors.ice};
  border-radius: 2px;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: ${tokens.colors.textMuted};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${tokens.spacing[5]};
`;

const SkillCategory = styled(Card)`
  padding: ${tokens.spacing[5]};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  margin-bottom: ${tokens.spacing[4]};
  
  svg { color: ${tokens.colors.ice}; }
`;

const CategoryTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${tokens.colors.silver};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
`;

const Education = () => {
  const stats = [{ value: '2', label: 'Degrees' }, { value: '25+', label: 'Courses' }, { value: '3.5', label: 'GPA' }];
  
  const education = [
    { type: "Master's", title: 'M.S. Computer Science', institution: 'Arizona State University', location: 'Tempe, AZ', period: '2022-2025', gpa: '3.4', description: 'Specialized in ML and Software Engineering with focus on scalable systems and AI.', achievements: ['Cum Laude', 'System Design', '3 Publications', 'IA for Capstone'] },
    { type: "Bachelor's", title: 'B.S. Software Engineering', institution: 'Arizona State University', location: 'Tempe, AZ', period: '2018-2022', gpa: '3.5', description: 'Foundation in software development, computer systems, and project management.', achievements: ['Cum Laude', 'Agile Methods', 'Design Patterns', 'Industry Internships'] }
  ];

  const courses = [
    { name: 'Advanced React Patterns', provider: 'Epic React', progress: 100, completed: true, duration: '40h' },
    { name: 'System Design Interview', provider: 'Educative', progress: 85, completed: false, duration: '30h' },
    { name: 'Docker & Kubernetes', provider: 'Udemy', progress: 90, completed: false, duration: '25h' }
  ];

  const skillCategories = [
    { name: 'Languages', icon: Brain, skills: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
    { name: 'Frameworks', icon: Code2, skills: ['React', 'Node.js', 'Express', 'Flask'] },
    { name: 'Cloud & DevOps', icon: Cloud, skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Databases', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'Redis'] }
  ];

  return (
    <PageWrapper>
      <GradientBackground />
      
      <HeroSection>
        <Container>
          <AnimateOnScroll>
            <HeroIntro>
              <Flex $align="center" $justify="center" $gap={tokens.spacing[3]} style={{ marginBottom: tokens.spacing[4] }}>
                <AccentLine $width="32px" />
                <Label $accent>Education</Label>
                <AccentLine $width="32px" />
              </Flex>
              <Heading1 style={{ marginBottom: tokens.spacing[4] }}>Education & Learning</Heading1>
              <BodyLarge $muted $prose style={{ margin: '0 auto' }}>
                Committed to lifelong learning and staying at the forefront of technology.
              </BodyLarge>
            </HeroIntro>
          </AnimateOnScroll>
          
          <AnimateOnScroll $delay="0.2s">
            <StatsRow>
              {stats.map((stat, i) => <StatBox key={i} $center><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></StatBox>)}
            </StatsRow>
          </AnimateOnScroll>
        </Container>
      </HeroSection>
      
      <Section $tight>
        <Container>
          <SectionHeader><AccentLine $width="32px" /><Heading2>Formal Education</Heading2></SectionHeader>
          <SectionSubtitle>Strong academic foundation with hands-on experience.</SectionSubtitle>
          
          <EducationGrid>
            {education.map((edu, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <DegreeCard $hoverable>
                  <DegreeType>{edu.type}</DegreeType>
                  <DegreeTitle>{edu.title}</DegreeTitle>
                  <Institution>{edu.institution}</Institution>
                  <MetaRow>
                    <MetaItem><MapPin />{edu.location}</MetaItem>
                    <MetaItem><Calendar />{edu.period}</MetaItem>
                    <MetaItem><Trophy />GPA: {edu.gpa}</MetaItem>
                  </MetaRow>
                  <Description>{edu.description}</Description>
                  <AchievementsList>
                    {edu.achievements.map((a, j) => <AchievementItem key={j}><CheckCircle />{a}</AchievementItem>)}
                  </AchievementsList>
                </DegreeCard>
              </AnimateOnScroll>
            ))}
          </EducationGrid>
        </Container>
      </Section>
      
      <CoursesSection>
        <Container>
          <SectionHeader><AccentLine $width="32px" /><Heading2>Continuous Learning</Heading2></SectionHeader>
          <SectionSubtitle>Ongoing courses to stay current.</SectionSubtitle>
          
          <CoursesGrid>
            {courses.map((course, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <CourseCard $hoverable>
                  <CourseHeader>
                    <CourseTitle>{course.name}</CourseTitle>
                    <StatusBadge $completed={course.completed}>{course.completed ? 'Done' : 'In Progress'}</StatusBadge>
                  </CourseHeader>
                  <Provider>{course.provider}</Provider>
                  <ProgressBar><ProgressFill $progress={course.progress} /></ProgressBar>
                  <CourseMeta><span>{course.progress}%</span><span>{course.duration}</span></CourseMeta>
                </CourseCard>
              </AnimateOnScroll>
            ))}
          </CoursesGrid>
        </Container>
      </CoursesSection>
      
      <Section>
        <Container>
          <SectionHeader><AccentLine $width="32px" /><Heading2>Skills</Heading2></SectionHeader>
          <SectionSubtitle>Technical expertise from education and experience.</SectionSubtitle>
          
          <SkillsGrid>
            {skillCategories.map((cat, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <SkillCategory $hoverable>
                  <CategoryHeader><cat.icon size={18} /><CategoryTitle>{cat.name}</CategoryTitle></CategoryHeader>
                  <SkillsList>{cat.skills.map((s, j) => <Tag key={j}>{s}</Tag>)}</SkillsList>
                </SkillCategory>
              </AnimateOnScroll>
            ))}
          </SkillsGrid>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default Education;