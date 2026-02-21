import React from 'react';
import styled from 'styled-components';
import { GraduationCap, BookOpen, Trophy, Calendar, MapPin, CheckCircle, Brain, Cloud, Database, Code2 } from 'lucide-react';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, BodyLarge, Label, Card, AccentLine, Tag, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/ReusableComponents';
// Hobbies.jsx
import PageFooter from '../components/PageFooter';


const HeroSection = styled(Section)`
  padding-top: calc(72px + ${tokens.spacing[16]});
  text-align: center;
  padding-bottom: 4px;
`;

const HeroIntro = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing[8]};
  max-width: 600px;
  margin: ${tokens.spacing[10]} auto;
  padding: ${tokens.spacing[5]} 0;
  border-top: 1px solid ${tokens.colors.paperBorder};
  border-bottom: 1px solid ${tokens.colors.paperBorder};
  
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: ${tokens.spacing[4]}; }
`;

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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${tokens.spacing[8]};
  
  @media (max-width: 968px) { grid-template-columns: 1fr; }
`;

const DegreeCard = styled(Card)`
  padding: ${tokens.spacing[10]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${tokens.colors.rust};
  }
`;

const DegreeType = styled.span`
  display: inline-block;
  font-family: ${tokens.fonts.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${tokens.colors.rust};
  background: rgba(181, 86, 58, 0.1);
  border: 1px solid rgba(181, 86, 58, 0.2);
  padding: ${tokens.spacing[1]} ${tokens.spacing[3]};
  border-radius: ${tokens.radius.sm};
  margin-bottom: ${tokens.spacing[4]};
`;

const DegreeTitle = styled.h3`
  font-family: ${tokens.fonts.display};
  font-size: 1.375rem;
  font-weight: 400;
  color: ${tokens.colors.charcoal};
  margin-bottom: ${tokens.spacing[2]};
`;

const Institution = styled.p`
  font-size: 1rem;
  color: ${tokens.colors.rust};
  font-weight: 500;
  margin-bottom: ${tokens.spacing[4]};
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[4]};
  margin-bottom: ${tokens.spacing[6]};
  padding-bottom: ${tokens.spacing[4]};
  border-bottom: 1px solid ${tokens.colors.paperBorder};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[1]};
  font-size: 0.8rem;
  color: ${tokens.colors.textMuted};
  svg { width: 12px; height: 12px; }
`;

const Description = styled.p`
  font-size: 0.9375rem;
  color: ${tokens.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${tokens.spacing[6]};
`;

const AchievementsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[3]};
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[2]};
  font-size: 0.875rem;
  color: ${tokens.colors.textSecondary};
  svg { color: ${tokens.colors.rust}; flex-shrink: 0; margin-top: 2px; }
`;

const CoursesSection = styled(Section)`
  background: ${tokens.colors.paperDark};
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${tokens.spacing[6]};
`;

const CourseCard = styled(Card)`
  padding: ${tokens.spacing[6]};
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[3]};
`;

const CourseTitle = styled.h4`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: ${tokens.colors.charcoal};
`;

const StatusBadge = styled.span`
  font-family: ${tokens.fonts.mono};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: ${tokens.spacing[1]} ${tokens.spacing[2]};
  border-radius: ${tokens.radius.sm};
  white-space: nowrap;
  background: ${props => props.$completed ? 'rgba(74, 159, 110, 0.1)' : 'rgba(181, 86, 58, 0.1)'};
  color: ${props => props.$completed ? '#4a9f6e' : tokens.colors.rust};
  border: 1px solid ${props => props.$completed ? 'rgba(74, 159, 110, 0.2)' : 'rgba(181, 86, 58, 0.2)'};
`;

const Provider = styled.p`
  font-size: 0.8rem;
  color: ${tokens.colors.textMuted};
  margin-bottom: ${tokens.spacing[4]};
`;

const ProgressBar = styled.div`
  height: 4px;
  background: ${tokens.colors.paperBorder};
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: ${tokens.spacing[3]};
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background: ${tokens.colors.rust};
  border-radius: 2px;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${tokens.colors.textMuted};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${tokens.spacing[6]};
`;

const SkillCategory = styled(Card)`
  padding: ${tokens.spacing[6]};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  margin-bottom: ${tokens.spacing[5]};
  svg { color: ${tokens.colors.rust}; }
`;

const CategoryTitle = styled.h4`
  font-family: ${tokens.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: ${tokens.colors.charcoal};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[2]};
`;

const Education = () => {
  const stats = [{ value: '2', label: 'Degrees' }, { value: '25+', label: 'Courses' }, { value: '3.5', label: 'GPA' }];
  
  const education = [
    { type: "Master's Degree", title: 'M.S. in Computer Science', institution: 'Arizona State University', location: 'Tempe, AZ', period: '2022 - 2025', gpa: '3.4', description: 'Specialized in Machine Learning and Software Engineering with focus on scalable systems.', achievements: ['Augmented Intelligence', 'System Design Architecture', 'Big Data', 'IA for Capstone'] },
    { type: "Bachelor's Degree", title: 'B.S. in Software Engineering', institution: 'Arizona State University', location: 'Tempe, AZ', period: '2018 - 2022', gpa: '3.5', description: 'Comprehensive foundation in software development and project management.', achievements: ['Cum Laude graduate', 'Agile methodologies', 'Design Patterns', 'Industry internships'] }
  ];
  
  const courses = [
    { name: 'Advanced React Patterns', provider: 'Epic React', progress: 100, completed: true, duration: '40 hours' },
    { name: 'System Design Interview', provider: 'Educative', progress: 85, completed: false, duration: '30 hours' },
    { name: 'Docker & Kubernetes', provider: 'Udemy', progress: 90, completed: false, duration: '25 hours' }
  ];
  
  const skillCategories = [
    { name: 'Programming Languages', icon: Brain, skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'] },
    { name: 'Frameworks', icon: Code2, skills: ['React', 'Angular', 'Node.js', 'Express', "Spring Boot", 'Flask'] },
    { name: 'Cloud & DevOps', icon: Cloud, skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Jenkins'] },
    { name: 'Databases', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] }
  ];

  return (
    <PageWrapper>
      <GradientBackground />
      
      <HeroSection>
        <Container>
          <AnimateOnScroll>
            <HeroIntro>
              <Flex $align="center" $justify="center" $gap={tokens.spacing[4]} style={{ marginBottom: tokens.spacing[6] }}>
                <AccentLine />
                <Label $accent>Education</Label>
                <AccentLine />
              </Flex>
              <Heading1 style={{ marginBottom: tokens.spacing[6] }}>Education & Learning</Heading1>
              <BodyLarge $muted $prose style={{ margin: '0 auto' }}>
                My educational journey reflects a commitment to lifelong learning and staying at the forefront of technology.
              </BodyLarge>
            </HeroIntro>
          </AnimateOnScroll>
          
          <AnimateOnScroll $delay="0.2s">
            <StatsRow>
              {stats.map((stat, i) => (<StatBox key={i} $center><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></StatBox>))}
            </StatsRow>
          </AnimateOnScroll>
        </Container>
      </HeroSection>
      
      <Section $tight>
        <Container>
          <SectionHeader><AccentLine $width="40px" /><Heading2>Formal Education</Heading2></SectionHeader>
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
                    {edu.achievements.map((a, j) => (<AchievementItem key={j}><CheckCircle size={14} />{a}</AchievementItem>))}
                  </AchievementsList>
                </DegreeCard>
              </AnimateOnScroll>
            ))}
          </EducationGrid>
        </Container>
      </Section>
      
      <CoursesSection>
        <Container>
          <SectionHeader><AccentLine $width="40px" /><Heading2>Continuous Learning</Heading2></SectionHeader>
          <SectionSubtitle>Ongoing courses to stay current with evolving technologies.</SectionSubtitle>
          
          <CoursesGrid>
            {courses.map((course, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <CourseCard $hoverable>
                  <CourseHeader>
                    <CourseTitle>{course.name}</CourseTitle>
                    <StatusBadge $completed={course.completed}>{course.completed ? 'Completed' : 'In Progress'}</StatusBadge>
                  </CourseHeader>
                  <Provider>{course.provider}</Provider>
                  <ProgressBar><ProgressFill $progress={course.progress} /></ProgressBar>
                  <CourseMeta><span>{course.progress}% Complete</span><span>{course.duration}</span></CourseMeta>
                </CourseCard>
              </AnimateOnScroll>
            ))}
          </CoursesGrid>
        </Container>
      </CoursesSection>
      
      <Section>
        <Container>
          <SectionHeader><AccentLine $width="40px" /><Heading2>Skills Acquired</Heading2></SectionHeader>
          <SectionSubtitle>Technical expertise from education and hands-on experience.</SectionSubtitle>
          
          <SkillsGrid>
            {skillCategories.map((cat, i) => (
              <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
                <SkillCategory $hoverable>
                  <CategoryHeader><cat.icon size={20} /><CategoryTitle>{cat.name}</CategoryTitle></CategoryHeader>
                  <SkillsList>{cat.skills.map((s, j) => (<Tag key={j}>{s}</Tag>))}</SkillsList>
                </SkillCategory>
              </AnimateOnScroll>
            ))}
          </SkillsGrid>
        </Container>
      </Section> 
<PageFooter nextLabel="View Hobbies" nextTo="/hobbies" />
    </PageWrapper>
  );
};

export default Education;