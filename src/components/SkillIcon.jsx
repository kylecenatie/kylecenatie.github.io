/**
 * SkillIcon.jsx
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for every skill icon.
 *
 * TO ADD A NEW SKILL:
 *   1. Import the icon from react-icons (find icons at https://react-icons.github.io/react-icons)
 *   2. Add a new entry to ICON_MAP below using the skill name as the key
 *   3. Add the skill to skills.json with the matching name + category
 *   That's it — no changes needed anywhere else.
 * ─────────────────────────────────────────────────────────────
 */

import React from 'react';

// Languages
import { SiJavascript, SiTypescript, SiCsharp } from 'react-icons/si';
import { FaPython, FaJava }                      from 'react-icons/fa';

// Frontend
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';

// Backend
import { FaNode }        from 'react-icons/fa';
import { SiExpress, SiSpring, SiFlask, SiGraphql } from 'react-icons/si';

// Databases
import { SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSqlite } from 'react-icons/si';
import { SiAmazondynamodb }                                      from 'react-icons/si';

// Infra / Cloud
import { FaAws, FaDocker } from 'react-icons/fa';
import { SiGooglecloud, SiKubernetes, SiTerraform, SiNginx }   from 'react-icons/si';

// CI/CD & Tooling
import { FaGitAlt, FaGithub, FaJenkins } from 'react-icons/fa';
import { SiGithubactions, SiSonarqube }  from 'react-icons/si';
import { SiConcourse } from "react-icons/si";
// import { SiFlask } from "react-icons/si";

/* ─────────────────────────────────────────────────────────────
   ICON MAP
   Key must exactly match the "name" field in skills.json
   ───────────────────────────────────────────────────────────── */
const ICON_MAP = {
  // Languages
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'Python':     <FaPython />,
  'Java':       <FaJava />,
  'C#':         <SiCsharp />,

  // Frontend
  'React':      <FaReact />,
  'Angular':    <FaAngular />,
  'HTML 5':     <FaHtml5 />,
  'CSS 3':      <FaCss3Alt />,
  'Bootstrap':  <FaBootstrap />,

  // Backend
  'NodeJS':     <FaNode />,
  'Express':    <SiExpress />,
  'Spring Boot':<SiSpring />,
  'Flask':      <SiFlask />,
  'GraphQL':    <SiGraphql />,

  // Databases
  'PostgreSQL': <SiPostgresql />,
  'MySQL':      <SiMysql />,
  'MongoDB':    <SiMongodb />,
  'Redis':      <SiRedis />,
  'DynamoDB':   <SiAmazondynamodb />,
  'SQLite':     <SiSqlite />,

  // Infra / Cloud
  'AWS':        <FaAws />,
  'GCP':        <SiGooglecloud />,
  'Docker':     <FaDocker />,
  'Kubernetes': <SiKubernetes />,
  'Terraform':  <SiTerraform />,
  'Nginx':      <SiNginx />,

  // CI/CD & Tooling
  'Git':            <FaGitAlt />,
  'GitHub':         <FaGithub />,
  'Jenkins':        <FaJenkins />,
  'GitHub Actions': <SiGithubactions />,
  'SonarQube':      <SiSonarqube />,
  'Concourse': <SiConcourse />
};

/**
 * <SkillIcon name="Docker" />
 * Returns the matching icon, or a "?" placeholder if not found.
 */
const SkillIcon = ({ name }) =>
  ICON_MAP[name] ?? <span style={{ fontSize: '0.9rem' }}>?</span>;

export default SkillIcon;