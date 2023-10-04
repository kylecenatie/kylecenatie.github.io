import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
// import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import Form from "react-bootstrap/form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from 'styled-components';

import Button from "react-bootstrap/button";
import im1 from "../images/golf.jpeg";
import im2 from "../images/snowboard.jpeg";
import im3 from "../images/mancity.jpeg";
import im4 from "../images/usa_soccer.jpeg";
import im5 from "../images/paintball.jpeg";
import im6 from "../images/young_soccer.jpeg";





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

const Hobbies = () => {
    const [viz, setViz] = useState(true);
    const [fave, setFave] = useState(true);

    const sliderImages = [{ url: im1 }, { url: im2 }, { url: im3 }, { url: im4 }, { url: im5 }, { url: im6 }];
    return (
        <AppBodyContainer>
            <header className="App-header">
                <Row>
                    <Col> 
                    <div> <center><h2 className="hobbie_title">Hobbies</h2></center></div>
                        <ul className="what_i_like">
                            <li style={{ fontSize: "small" }}>I love to golf.</li>
                            <li style={{ fontSize: "small" }}>My favorite team sport is soccer.</li>
                            <li style={{ fontSize: "small" }}>I have been playing soccer since I was 4 years old.</li>
                            <li style={{ fontSize: "small" }}>Favorite club is Manchester City.</li>
                            <li style={{ fontSize: "small" }}>I enjoy snowboarding.</li>
                            <li style={{ fontSize: "small" }}>I like paintballing.</li>
                            <li style={{ fontSize: "small" }}>I like pretty much anything that is outdoors.</li>
                        </ul>
                   
                        {viz &&
                            <><Form style={{ fontSize: "medium" }}>
                                <Form.Group className="mb-3" controlId="basic-name">
                                    <Form.Label>I want to hear about your favorite hobbie.</Form.Label>

                                    <Form.Control as="textarea" rows={3} id="hobbie_input" placeholder="Whats your favorite hobbie?" onChange={(e) => setFave(e.target.value)} />
                                </Form.Group>
                            </Form><Button variant="primary" type="submit" id="send_hobbie" onClick={() => setViz(false)}> Send</Button></>
                        }
                        {!viz &&
                            <div className="hobbie_mess">Nice I really need to check out that hobbie!</div>
                        }

                        <div style={{ paddingTop: "50px", paddingLeft: "100px" }}>
            <Link to={`/about`}>< span className="tite" style={{  padding: "20px", margin: "auto", cursor: "pointer" }} > <Button id="nav_about"> Check out more about me.</Button></span></Link>
                           
                        </div>
                    </Col>  <Col>
                       

                        <ImageSlider images={sliderImages} wid={240} high={300} />
                    </Col>
                </Row>

            </header>
        </AppBodyContainer>
    );
}

export default Hobbies;