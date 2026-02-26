import React from 'react';
import {
  FaGitAlt, FaGithub, FaJenkins, FaPython, FaJava, FaAws,
  FaDocker, FaNode, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap
} from 'react-icons/fa';

import { SiExpress, SiSpring, SiFlask, SiGraphql } from 'react-icons/si';

import {
  SiJavascript, SiTypescript, SiConcourse, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiSqlite, SiAmazondynamodb, SiGooglecloud, SiKubernetes,
  SiTerraform, SiNginx, SiGithubactions, SiSonarqube, SiApachemaven
} from 'react-icons/si';
import { PiFileCSharp } from "react-icons/pi";
// import { DiCsharp } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { MdGolfCourse } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { PiCoffeeDuotone } from "react-icons/pi";
// import { FaCampground } from "react-icons/fa6";
import { SlPlane } from "react-icons/sl";
import { FaPaw } from "react-icons/fa";
// import { FaTableTennisPaddleBall } from "react-icons/fa6";
// import { PiRacquetDuotone } from "react-icons/pi";
// import { GiTennisRacket } from "react-icons/gi";
import { GiDiscGolfBasket } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
// import { GiCampingTent } from "react-icons/gi";
// import { LuTent } from "react-icons/lu";
import { LuTentTree } from "react-icons/lu";
import { FaChess } from "react-icons/fa";
// import { FaTv } from "react-icons/fa6";
import { PiPersonSimpleSnowboardFill } from "react-icons/pi";
import { PiSoccerBallFill } from "react-icons/pi";
import { ImTv } from "react-icons/im";

// import { TbDiscGolf } from "react-icons/tb";

const ICON_MAP = {
  // Languages
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'Python': <FaPython />,
  'Java': <FaJava />,
  'C#': <PiFileCSharp />,

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
  'Concourse': <SiConcourse />,

  //Hobbies Icons
  'Golf': <MdGolfCourse size={32}  />,
  'Bike': <MdDirectionsBike size={32} />,
  'Camp': <LuTentTree size={32} />,
  'Coffee': <PiCoffeeDuotone size={32} />,
  'Travel': <SlPlane size={32} />,
  'Pet': <FaPaw size={32} />,
  'Racquet': <MdSportsTennis size={32} />,
  'Disc': <GiDiscGolfBasket size={32} />,
  'BGame': <FaChess size={32} />,
  'TV': <ImTv size={32} />,
  "Snow": <PiPersonSimpleSnowboardFill size={32} />,
  "Soccer": <PiSoccerBallFill size={32} />
};

const Icons = ({ name }) =>
  ICON_MAP[name] ?? <span style={{ fontSize: '0.9rem' }}>?</span>;

export default Icons;