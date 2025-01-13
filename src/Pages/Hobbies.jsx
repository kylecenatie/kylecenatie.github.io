import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
// import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import Form from "react-bootstrap/form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from 'styled-components';
import Mod from "../components/Mod";
import Button from "react-bootstrap/button";
import im1 from "../images/golf.jpeg";
import im2 from "../images/snowboard.jpeg";
import im3 from "../images/mancity.jpeg";
import im4 from "../images/usa_soccer.jpeg";
import im5 from "../images/paintball.jpeg";
import im6 from "../images/young_soccer.jpeg";


const Hobbies = () => {
    const [viz, setViz] = useState(true);
    const [fave, setFave] = useState(true);

    const sliderImages = [{ url: im1 }, { url: im2 }, { url: im3 }, { url: im4 }, { url: im5 }, { url: im6 }];
    return (
            <header className="App-header-hobby">
                <Row>
                    <Col >
                        <ul style={{textAlign: "left", padding:'60px'}}>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>Golf.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>Soccer.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>Snowboard.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>Staying in shape.</li>
                        </ul>
                    </Col>
                    <Col>
                        <div> <center><h2 style={{color:'whitesmoke', paddingTop: '20px', fontFamily:'serif'}}>Hobbies</h2></center></div>

                        <ImageSlider images={sliderImages} wid={600} high={650} />
                    </Col>
                    <Col>
                    <ul style={{textAlign: "left", padding:'60px'}}>
                            <li style={{ fontSize: "medium", fontFamily:"ariel-black", color:"white" }}>Golfing for a few years.</li>
                            <li style={{ fontSize: "medium", fontFamily:"ariel-black", color:"white" }}>Favorite club is Manchester City.</li>
                            <li style={{ fontSize: "medium", fontFamily:"ariel-black", color:"white" }}>Love to shred.</li>
                            <li style={{ fontSize: "medium", fontFamily:"ariel-black", color:"white" }}>I like pretty much anything that is outdoors.</li>
                        </ul>

                        
                    </Col>
                </Row>

            </header>
        // </Container>
    );
}

export default Hobbies;