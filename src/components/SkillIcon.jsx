import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";


const SkillIcon = (props) => {
    var type = props.type;
    if (type === "NodeJS") {
        return <FaNode />;
    }
    if (type === "JavaScript") {
        return <SiJavascript />
    }
    if (type === "Java") {
        return <FaJava /> }
    if (type === "Python") {
        return <FaPython />
    }
    if (type === "React"){
        return <FaReact />
    }    
    if (type === "AWS"){
        return <FaAws />
    }
    if (type === "Angular"){
        return <FaAngular />
    }
    if (type === "Bootstrap"){
        return <FaBootstrap />
    }
    if (type === "MySql"){
        return <SiMysql />
    }
    if (type === "HTML 5"){
        return <FaHtml5 />
    }
    if (type === "CSS 3"){
        return <FaCss3Alt />
    }
    if (type=== "Kubernetes"){
        return <SiKubernetes />
    }
    if (type=== "Docker"){
        return <FaDocker />
    }

}
    
export default SkillIcon;