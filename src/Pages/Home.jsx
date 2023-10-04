import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import styled from 'styled-components';
import Button from "react-bootstrap/button"
import im1 from "../images/prof_pic.jpg";
import im2 from "../images/asugrad.jpeg";
import im3 from "../images/ky_jul.jpeg";


const AppBodyContainer = styled(Container).attrs({
  fluid: true,
  className: 'px-0 d-flex flex-column',
})`
  min-height: 100vh;
  & .container {
    flex-grow: 3;
    border: solid black;
  }
`;

const Home = () => {
  const sliderImages = [
    {
       url: im1,
    },
    {
       url: im2,
    },
    {
      url: im3,
   }
 ];

    return(
    <AppBodyContainer>
    <header className="App-header">
    <div>
      <Link to="/education">< span className="tite" style={{  padding: "20px", margin: "auto", cursor: "pointer", float:"inline-end" }} > <Button id="nav_about" style={{margin: "15px"}} className="to_about"> Check out more information about me.</Button></span></Link>
     </div>  <ImageSlider images={sliderImages} wid={300} high={350}/> 
       
      <div id="introduction" style={{fontFamily:"fantasy", fontSize:"100px"}}>My name is Kyle Cenatiempo </div>
      <p className="soft_eng" style={{fontFamily:"fantasy", fontSize:"15px"}}>I am a software engineer.</p>
      
      
    </header>
    {/* <Modal /> */}
     <Skills />
     
  </AppBodyContainer>
    );
}

export default Home;