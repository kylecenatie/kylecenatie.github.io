import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from 'react-bootstrap/Container';
import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import styled from 'styled-components';
import Button from "react-bootstrap/button"
import im1 from "../images/prof_pic.jpg";
import im2 from "../images/asugrad.jpeg";
import im3 from "../images/ky_jul.jpeg";
import Typewriter from "../components/Typewriter";
import GameBoard from "../solitare-componenets/GameBoard";
import './solitare.css'



const Solitare = () => {
 return (
    <GameBoard />
 );
}

export default Solitare;