import React from 'react';
import {
  FaGitAlt, FaGithub, FaJenkins, FaPython, FaJava, FaAws,
  FaDocker, FaNode, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap
} from 'react-icons/fa';

import { SiExpress, SiSpring, SiFlask, SiGraphql } from 'react-icons/si';

import {
  SiJavascript, SiTypescript, SiCsharp, SiConcourse, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiSqlite, SiAmazondynamodb, SiGooglecloud, SiKubernetes,
  SiTerraform, SiNginx, SiGithubactions, SiSonarqube, SiApachemaven
} from 'react-icons/si';

import { VscAzure } from "react-icons/vsc";


const ICON_MAP = {
  // Languages
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'Python': <FaPython />,
  'Java': <FaJava />,
  'C#': <SiCsharp />,

  // Frontend
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'HTML 5': <FaHtml5 />,
  'CSS 3': <FaCss3Alt />,
  'Bootstrap': <FaBootstrap />,

  // Backend
  'NodeJS': <FaNode />,
  'Express': <SiExpress />,
  'Spring Boot': <SiSpring />,
  'Flask': <SiFlask />,
  'GraphQL': <SiGraphql />,
  'Apache Maven': <SiApachemaven />,

  // Databases
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'MongoDB': <SiMongodb />,
  'Redis': <SiRedis />,
  'DynamoDB': <SiAmazondynamodb />,
  'SQLite': <SiSqlite />,

  // Infra / Cloud
  'AWS': <FaAws />,
  'GCP': <SiGooglecloud />,
  'Docker': <FaDocker />,
  'Kubernetes': <SiKubernetes />,
  'Terraform': <SiTerraform />,
  'Nginx': <SiNginx />,
  'Azure': <VscAzure />,

  // CI/CD & Tooling
  'Git': <FaGitAlt />,
  'GitHub': <FaGithub />,
  'Jenkins': <FaJenkins />,
  'GitHub Actions': <SiGithubactions />,
  'SonarQube': <SiSonarqube />,
  'Concourse': <SiConcourse />
};

const SkillIcon = ({ name }) =>
  ICON_MAP[name] ?? <span style={{ fontSize: '0.9rem' }}>?</span>;

export default SkillIcon;