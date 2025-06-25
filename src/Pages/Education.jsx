import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { GraduationCap, Award, BookOpen, Trophy, House, Calendar, MapPin, Star, Database, ExternalLink, Cloud, CheckCircle, Clock, Users, Brain } from 'lucide-react';

// Keyframe animations
const pulse = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 70%, #0f172a 100%);
  color: white;
  overflow: hidden;
  position: relative;
`;

const BackgroundElement = styled.div`
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(40px);
  animation: ${pulse} 4s ease-in-out infinite;
  
  &:nth-child(1) {
    top: -160px;
    right: -160px;
    width: 320px;
    height: 320px;
    background: #6366f1;
  }
  
  &:nth-child(2) {
    bottom: -160px;
    left: -160px;
    width: 320px;
    height: 320px;
    background: #06b6d4;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    top: 30%;
    right: 20%;
    width: 280px;
    height: 280px;
    background: #8b5cf6;
    animation-delay: 1s;
  }
  
  &:nth-child(4) {
    bottom: 30%;
    left: 70%;
    width: 240px;
    height: 240px;
    background: #10b981;
    animation-delay: 3s;
  }
`;

const MouseFollower = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #06b6d4, #6366f1);
  border-radius: 50%;
  pointer-events: none;
  z-index: 50;
  mix-blend-mode: difference;
  transition: all 150ms ease-out;
  transform: ${props => `translate(${props.x - 12}px, ${props.y - 12}px) scale(${props.visible ? 1 : 0})`};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 64px;
  transition: all 1s ease-out;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '40px'});
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: bold;
  margin-bottom: 16px;
  background: linear-gradient(45deg, #06b6d4, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${float} 6s ease-in-out infinite;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #d1d5db;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  svg {
    width: 32px;
    height: 32px;
    margin: 0 auto 12px;
    color: #06b6d4;
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const Section = styled.section`
  margin-bottom: 80px;
  
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
    background: linear-gradient(45deg, #06b6d4, #6366f1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .section-subtitle {
    text-align: center;
    color: #9ca3af;
    margin-bottom: 48px;
    font-size: 1.125rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EducationCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  .degree-type {
    display: inline-block;
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .degree-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 8px;
  }
  
  .institution {
    color: #06b6d4;
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 8px;
  }
  
  .details {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    color: #9ca3af;
    font-size: 0.875rem;
    
    .detail-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  
  .description {
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .achievements {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 8px;
      color: #d1d5db;
      font-size: 0.875rem;
      
      svg {
        color: #10b981;
        margin-top: 2px;
        flex-shrink: 0;
      }
    }
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const CertificationCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .cert-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    
    .cert-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(45deg, #06b6d4, #6366f1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .cert-info {
      flex: 1;
      
      h3 {
        font-size: 1.125rem;
        font-weight: bold;
        color: white;
        margin-bottom: 4px;
      }
      
      .issuer {
        color: #06b6d4;
        font-weight: 500;
        font-size: 0.875rem;
      }
    }
  }
  
  .cert-details {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
    
    .detail {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #9ca3af;
      font-size: 0.75rem;
    }
  }
  
  .cert-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    .skill-tag {
      background: rgba(99, 102, 241, 0.2);
      color: #a5b4fc;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
`;

const CoursesSection = styled.div`
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
`;

const CourseCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }
  
  .course-header {
    display: flex;
    justify-content: between;
    align-items: flex-start;
    margin-bottom: 12px;
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      flex: 1;
    }
    
    .status {
      background: ${props => props.completed ? 'linear-gradient(45deg, #10b981, #059669)' : 'linear-gradient(45deg, #f59e0b, #d97706)'};
      color: white;
      padding: 2px 8px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
  
  .provider {
    color: #06b6d4;
    font-size: 0.875rem;
    margin-bottom: 8px;
  }
  
  .progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 8px;
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(45deg, #06b6d4, #6366f1);
      border-radius: 3px;
      width: ${props => props.progress}%;
      transition: width 0.3s ease;
    }
  }
  
  .course-meta {
    display: flex;
    justify-content: space-between;
    color: #9ca3af;
    font-size: 0.75rem;
  }
`;

const SkillsVisualization = styled.div`
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  }
  
  .skill-category {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    h4 {
      color: white;
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .skill-badge {
        background: rgba(99, 102, 241, 0.2);
        color: #c7d2fe;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(99, 102, 241, 0.4);
          transform: scale(1.05);
        }
      }
    }
  }
`;

const Education=()=> {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { icon: GraduationCap, label: "Degrees", value: "2" },
    // { icon: Award, label: "Certifications", value: "8" },
    { icon: BookOpen, label: "Courses", value: "25+" },
    { icon: Trophy, label: "GPA", value: "3.5" }
  ];

  const education = [
    {
      type: "Master's Degree",
      title: "Master of Science in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      period: "2022 - 2025",
      gpa: "3.4",
      description: "Specialized in Machine Learning and Software Engineering with focus on scalable systems, big data, and AI applications.",
      achievements: [
        "Cum Laude graduate",
        "System Design Architecture",
        "Published 3 papers in top-tier conferences",
        "Instructors Assistant for Software Engineering Capstone"
      ]
    },
    {
      type: "Bachelor's Degree", 
      title: "Bachelor of Science in Software Engineering",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      period: "2018 - 2022",
      gpa: "3.5",
      description: "Comprehensive foundation in software development, computer systems, and project management.",
      achievements: [
        "Cum Laude graduate",
        "Agile",
        "Software Design Patterns",
        "Internship at SoftPoint (Summer 2020)",
        "Internship at Arizona Public Services (Summer 2021)"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      skills: ["Cloud Architecture", "AWS", "DevOps", "Security"]
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active", 
      skills: ["GCP", "Kubernetes", "Microservices", "CI/CD"]
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      status: "Active",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"]
    }
    // ,
    // {
    //   name: "Meta React Developer Professional",
    //   issuer: "Meta",
    //   date: "2022",
    //   status: "Active",
    //   skills: ["React", "JavaScript", "Frontend", "Mobile Development"]
    // }
  ];

  const courses = [
    {
      name: "Advanced React Patterns",
      provider: "Epic React",
      progress: 100,
      completed: true,
      duration: "40 hours"
    },
    {
      name: "System Design Interview",
      provider: "Educative",
      progress: 85,
      completed: false,
      duration: "30 hours"
    },
    // {
    //   name: "Machine Learning Specialization",
    //   provider: "Coursera",
    //   progress: 100,
    //   completed: true,
    //   duration: "60 hours"
    // },
    {
      name: "Docker & Kubernetes",
      provider: "Udemy",
      progress: 90,
      completed: false,
      duration: "25 hours"
    }
  ];

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: Brain,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"]
    },
    {
      name: "Frameworks & Libraries", 
      icon: House,
      skills: ["React", "Angular", "Node.js", "Express", "Flask", "Spring Boot"]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Harness", "Jenkins"]
    },
    {
      name: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <BackgroundElement />
      <BackgroundElement />  
      <BackgroundElement />
      <BackgroundElement />
      
      {/* <MouseFollower 
        x={mousePosition.x} 
        y={mousePosition.y} 
        visible={mousePosition.x > 0}
      /> */}

      <ContentWrapper>
        <Header visible={isVisible}>
          <MainTitle>Education & Learning</MainTitle>
          <Subtitle>Continuous Growth Through Knowledge</Subtitle>
          <Description>
            My educational journey reflects a commitment to lifelong learning and staying at the forefront of technology. 
            From formal degrees to cutting-edge certifications, I believe in building a strong foundation while embracing innovation.
          </Description>
        </Header>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <stat.icon />
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <Section>
          <h2>Formal Education</h2>
          <p className="section-subtitle">
            Strong academic foundation with hands-on experience in cutting-edge technologies and research.
          </p>
          <EducationGrid>
            {education.map((edu, index) => (
              <EducationCard key={index}>
                <div className="degree-type">{edu.type}</div>
                <div className="degree-title">{edu.title}</div>
                <div className="institution">{edu.institution}</div>
                <div className="details">
                  <div className="detail-item">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="detail-item">
                    <Star size={14} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
                <div className="description">{edu.description}</div>
                <ul className="achievements">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>
                      <CheckCircle size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </EducationCard>
            ))}
          </EducationGrid>
        </Section>

        {/* <Section>
          <h2>Professional Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials that validate expertise in modern technologies and best practices.
          </p>
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard key={index}>
                <div className="cert-header">
                  <div className="cert-icon">
                    <Award size={24} color="white" />
                  </div>
                  <div className="cert-info">
                    <h3>{cert.name}</h3>
                    <div className="issuer">{cert.issuer}</div>
                  </div>
                </div>
                <div className="cert-details">
                  <div className="detail">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="detail">
                    <CheckCircle size={12} />
                    <span>{cert.status}</span>
                  </div>
                </div>
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </Section> */}

        <Section>
          <h2>Continuous Learning</h2>
          <p className="section-subtitle">
            Ongoing courses and specializations to stay current with rapidly evolving technologies.
          </p>
          <CoursesSection>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <CourseCard key={index} progress={course.progress} completed={course.completed}>
                  <div className="course-header">
                    <h4>{course.name}</h4>
                    <div className="status">
                      {course.completed ? 'Completed' : 'In Progress'}
                    </div>
                  </div>
                  <div className="provider">{course.provider}</div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="course-meta">
                    <span>{course.progress}% Complete</span>
                    <span>{course.duration}</span>
                  </div>
                </CourseCard>
              ))}
            </div>
          </CoursesSection>
        </Section>

        <Section>
          <h2>Skills Acquired</h2>
          <p className="section-subtitle">
            Technical expertise gained through formal education, certifications, and hands-on experience.
          </p>
          <SkillsVisualization>
            <div className="skills-container">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4>
                    <category.icon size={20} />
                    {category.name}
                  </h4>
                  <div className="skills-list">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SkillsVisualization>
        </Section>
      </ContentWrapper>
    </Container>
  );
}
export default Education;