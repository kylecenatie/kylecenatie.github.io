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
import Typewriter from "../components/Typewriter";


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
      <div id="introduction"> 
      <Typewriter></Typewriter></div>
      <ImageSlider images={sliderImages} wid={600} high={650}/> 
      <div>
     
         
        </div>
    </header>
    {/* <Modal /> */}
     <Skills />
  </AppBodyContainer>
    );
}

export default Home;