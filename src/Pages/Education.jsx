import React from 'react';
import styled from 'styled-components';
import {
  PageWrapper, Container, Section, Flex, Heading1, Heading2, BodyLarge,
  Label, Card, AccentLine, StatBox, GradientBackground, AnimateOnScroll, tokens,
} from '../components/ReusableComponents';
import PageFooter from '../components/PageFooter';
import AcademicProjects from '../components/AcedemicProjects';
import DegreeCard from '../components/DegreeCard';
import courses from '../assets/learning.json';
import education from '../assets/education.json';
/* ─────────────────────────────────────────────
   HERO / STATS
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   EDUCATION GRID
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   CONTINUOUS LEARNING
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   PAGE DATA
───────────────────────────────────────────── */
const stats = [
  { value: '2',   label: 'Degrees' },
  { value: '25+', label: 'Courses' },
  { value: '3.5', label: 'GPA'     },
];


/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const Education = () => (
  <PageWrapper>
    <GradientBackground />

    {/* ── HERO ── */}
    <HeroSection>
      <Container>
        <AnimateOnScroll>
          <HeroIntro>
            <Flex $align="center" $justify="center" $gap={tokens.spacing[4]} style={{ marginBottom: tokens.spacing[6] }}>
              <AccentLine />
              <Label $accent>Education</Label>
              <AccentLine />
            </Flex>
            <Heading1 style={{ marginBottom: tokens.spacing[6] }}>Education &amp; Learning</Heading1>
            <BodyLarge $muted $prose style={{ margin: '0 auto' }}>
              My educational journey reflects a commitment to lifelong learning and staying at the forefront of technology.
            </BodyLarge>
          </HeroIntro>
        </AnimateOnScroll>

        <AnimateOnScroll $delay="0.2s">
          <StatsRow>
            {stats.map((stat, i) => (
              <StatBox key={i} $center>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </StatBox>
            ))}
          </StatsRow>
        </AnimateOnScroll>
      </Container>
    </HeroSection>

    {/* ── FORMAL EDUCATION ── */}
    <Section $tight>
      <Container>
        <SectionHeader>
          <AccentLine $width="40px" />
          <Heading2>Formal Education</Heading2>
        </SectionHeader>
        <SectionSubtitle>Strong academic foundation with hands-on experience.</SectionSubtitle>

        <EducationGrid>
          {education.map((edu, i) => (
            <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
              <DegreeCard edu={edu} animDelay={`${0.15 + 0.1 * i}s`} />
            </AnimateOnScroll>
          ))}
        </EducationGrid>
      </Container>
    </Section>
{/* ── ACADEMIC PROJECTS ── */}
    <CoursesSection>
      <Container>
        <AcademicProjects />
      </Container>
    </CoursesSection>

    {/* ── CONTINUOUS LEARNING ── */}
    <Section>
      <Container>
        <SectionHeader>
          <AccentLine $width="40px" />
          <Heading2>Continuous Learning</Heading2>
        </SectionHeader>
        <SectionSubtitle>Ongoing courses to stay current with evolving technologies.</SectionSubtitle>

        <CoursesGrid>
          {courses.map((course, i) => (
            <AnimateOnScroll key={i} $delay={`${0.1 * i}s`}>
              <CourseCard $hoverable>
                <CourseHeader>
                  <CourseTitle>{course.name}</CourseTitle>
                  <StatusBadge $completed={course.completed}>
                    {course.completed ? 'Completed' : 'In Progress'}
                  </StatusBadge>
                </CourseHeader>
                <Provider>{course.provider}</Provider>
                <ProgressBar><ProgressFill $progress={course.progress} /></ProgressBar>
                <CourseMeta>
                  <span>{course.progress}% Complete</span>
                  <span>{course.duration}</span>
                </CourseMeta>
              </CourseCard>
            </AnimateOnScroll>
          ))}
        </CoursesGrid>
      </Container>
    </Section>

    {/* ── ACADEMIC PROJECTS ── */}
    {/* <Section>
      <Container>
        <AcademicProjects />
      </Container>
    </Section> */}

    <PageFooter nextLabel="View Hobbies" nextTo="/hobbies" />
  </PageWrapper>
);

export default Education;