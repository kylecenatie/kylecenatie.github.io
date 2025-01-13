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
        // <Container
        // style={{
        //     height: "100%",
        //     width: "100%",
        //     // backgroundImage: im2,
        //     // backgroundColor: "black",
            
        //     position: "relative",
        //     fontFamily: "ariel-bold",

        // }} >
            <header className="App-header-hobby">
                <Row>
                    <Col >
                        <ul style={{textAlign: "left"}}>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>I love to golf.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>My favorite team sport is soccer.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>I have been playing soccer since I was 4 years old.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>Favorite club is Manchester City.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>I enjoy snowboarding.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>I like paintballing.</li>
                            <li style={{ fontSize: "x-large", fontFamily:"ariel-black", color:"white" }}>I like pretty much anything that is outdoors.</li>
                        </ul>
                    </Col>
                    <Col>
                        <div> <center><h2>Hobbies</h2></center></div>

                        <ImageSlider images={sliderImages} wid={600} high={650} />
                    </Col>
                    <Col>
                        {/* {viz &&
                            <><Form style={{ fontSize: "medium" }}>
                                <Form.Group className="mb-3" controlId="basic-name">
                                    <Form.Label>I want to hear about your favorite hobbie.</Form.Label>

                                    <Form.Control as="textarea" rows={3} placeholder="Whats your favorite hobbie?" onChange={(e) => setFave(e.target.value)} />
                                </Form.Group>
                            </Form><Button variant="primary" type="submit" onClick={() => setViz(false)}> Send</Button></>
                        }
                        {!viz &&
                            <div>Nice I really need to check out that hobbie!</div>
                        } */}

                        
                    </Col>
                </Row>

            </header>
        // </Container>
    );
}

export default Hobbies;