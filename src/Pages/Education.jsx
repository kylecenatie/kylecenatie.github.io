import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import EmailModal from "../components/EmailModal";
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"
import im from "../images/asu_seal.png";
import im2 from "../images/asu_fear.jpeg";
import './ed.css'


const Education = () => {
    return (
        <>
            <img style={{
                position: "fixed", zIndex: "1", height: "100%",
                width: "100%",

            }} src={im2} alt="asu seal"></img>
            <div style={{ margin: "0px", paddingTop: "0px", zIndex: "2", textAlign: "center", textDecorationLine: "underline", fontFamily: "copperplate", fontSize: "40px", position: "relative", width: "100%", color: "black", backgroundColor: "gold", textShadow: "3px 3px 5px maroon" }}>ARIZONA STATE UNIVERSITY</div>

            <Container
                style={{
                    height: "100%",
                    width: "100%",
                    // backgroundImage: im2,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backgroundColor: "black",
                    zIndex: "2",
                    position: "relative",
                    fontFamily: "ariel-bold",

                }} >


                <center>
                    <Row>
                        <Col>


                            {/* <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "50px", textAnchor: "-moz-initial" }}>

                                <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>

                                    <li style={{ fontSize: ".8em" }}>Bachelor of Science in</li>
                                    <li style={{ fontSize: "1.5em" }}>Software Engineering</li>
                                    <li style={{ fontSize: ".6em" }}>IRA A FULTON SCHOOLS OF ENGINEERING</li>
                                    <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                    <li>Graduate in 2022</li>
                                    <li>3.5  GPA</li>

                                </ul></div>

                            <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "50px", textAnchor: "-moz-initial" }}>

                                <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>

                                    <li style={{ fontSize: ".8em" }}>Master of</li>
                                    <li style={{ fontSize: "1.5em" }}>Computer Science</li>
                                    <li style={{ fontSize: ".6em" }}>School of Computing and Augmented Intelligence </li>
                                    <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                    <li>Graduate in 2025</li>
                                    <li>3.5  GPA</li>


                                </ul></div> */}
                            <div style={{perspective: '1000px'}}>
                                <div class="card" style={{ padding: "10px", margin: "150px",position: 'relative',transformStyle: 'preserve-3d',transition: 'all .9s ease-in'}}>
                                    <div style={{ zIndex: '3', backfaceVisibility: 'hidden',borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "25px", flex: "start", margin: "50px", textAnchor: "-moz-initial", width: '500px',    height: '150px' , position: 'absolute'   }}>

                                        <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>
                                            <li style={{ fontSize: ".8em" }}>Bachelor of Science in</li>
                                            <li style={{ fontSize: "1.5em" }}>Software Engineering</li>
                                            <li style={{ fontSize: ".6em" }}>IRA A FULTON SCHOOLS OF ENGINEERING</li>
                                            <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                        </ul>
                                    </div>
                                    <div style={{  zIndex: '3', backfaceVisibility: 'hidden', borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "25px", flex: "start", margin: "50px", textAnchor: "-moz-initial", width: '500px', height: '150px', position: 'absolute' ,transform: 'rotateY(180deg)',   }}>
                                        <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>
                                            <li style={{ fontSize: ".5em" }}>Arizona State University</li>
                                            <li style={{ fontSize: "1.5em" }}>Graduate in 2022</li>
                                            <li style={{ fontSize: "1.5em" }}>3.5  GPA</li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style={{perspective: '1000px'}}>
                                <div class="card" style={{ padding: "10px", margin: "150px",position: 'relative',transformStyle: 'preserve-3d',transition: 'all .9s ease-in'}}>
                                    <div style={{ zIndex: '3', backfaceVisibility: 'hidden',borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "25px", flex: "start", margin: "50px", textAnchor: "-moz-initial", width: '500px',    height: '150px' , position: 'absolute'   }}>

                                        <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>
                                            <li style={{ fontSize: ".8em" }}>Master of</li>
                                            <li style={{ fontSize: "1.5em" }}>Computer Science</li>
                                            <li style={{ fontSize: ".6em" }}>School of Computing and Augmented Intelligence </li>
                                            <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                        </ul>
                                    </div>
                                    <div style={{  zIndex: '3', backfaceVisibility: 'hidden', borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "25px", flex: "start", margin: "50px", textAnchor: "-moz-initial", width: '500px', height: '150px', position: 'absolute' ,transform: 'rotateY(180deg)',   }}>
                                        <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>
                                            <li style={{ fontSize: ".5em" }}>Arizona State University</li>
                                            <li style={{ fontSize: "1.5em" }}>Graduate in 2025</li>
                                            <li style={{ fontSize: "1.5em" }}>3.5  GPA</li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={im} alt="asu seal" width="400" height="400"></img>
                        </Col>
                    </Row>
                </center>
            </Container>
        </>
    );
}

export default Education;