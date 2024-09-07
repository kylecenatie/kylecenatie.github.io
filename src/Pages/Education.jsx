import React, { useState } from "react";
import { Link } from "react-router-dom";

import EmailModal from "../components/EmailModal";
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import im from "../images/asu_seal.png";
import im2 from "../images/asu_fear.jpeg";
import './ed.css'


const Education = () => {
    const [viz, setViz] = useState(true);

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
                        {/* <div style={{ margin: "0px",  width: "100%", padding:"00px", marginTop: "50px", backgroundColor: "gold" }}>ARIZONA STATE UNIVERSITY</div> */}


                        <Col>
                            <div class="cont">
                            <div class="card">
                                <div class="frontofcard" style={{backgroundColor:"maroon"}}>
                                        <ul>
                                            <li style={{ fontSize: ".8em" }}>Bachelor of Science in</li>
                                            <li style={{ fontSize: "1.5em" }}>Software Engineering</li>
                                        </ul>
                                </div>
                                <div class="backofcard">
                                    {/* <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "50px" }}> */}

                                        <ul>

                                            {/* <li style={{ fontSize: ".8em" }}>Bachelor of Science in</li> */}
                                            {/* <li style={{ fontSize: "1.5em" }}>Software Engineering</li> */}
                                            <li style={{ fontSize: ".6em" }}>IRA A FULTON SCHOOLS OF ENGINEERING</li>
                                            <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                            <li>Graduate in 2022</li>
                                            <li>3.5  GPA</li>
                                            {/* <li style={{fontSize:".5em"}}>IRA A FULTON SCHOOLS OF ENGINEERING</li> */}
                                        </ul></div>
                                {/* </div> */}
                            </div>
                            </div>

                            {/* <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "50px", textAnchor: "-moz-initial" }}>

                                <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>

                                    <li style={{ fontSize: ".8em" }}>Bachelor of Science in</li>
                                    <li style={{ fontSize: "1.5em" }}>Software Engineering</li>
                                    <li style={{ fontSize: ".6em" }}>IRA A FULTON SCHOOLS OF ENGINEERING</li>
                                    <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                    <li>Graduate in 2022</li>
                                    <li>3.5  GPA</li>
                                    
                                </ul></div> */}

                            <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "50px", textAnchor: "-moz-initial" }}>

                                <ul style={{ color: "white", listStyleType: "none", alignContent: "left", fontWeight: "bold", fontFamily: "copperplate", textDecorationLine: "black", textShadow: "-2px -2px 0 #000", fontSize: "large" }}>

                                    <li style={{ fontSize: ".8em" }}>Master of</li>
                                    <li style={{ fontSize: "1.5em" }}>Computer Science</li>
                                    <li style={{ fontSize: ".6em" }}>School of Computing and Augmented Intelligence </li>
                                    <li style={{ fontSize: ".6em" }}>Arizona State University</li>
                                    <li>Graduate in 2025</li>
                                    <li>3.5  GPA</li>


                                </ul></div>
                            {/* <div class="cont">
                                <div class="card">
                                    <div class="frontofcard" style={{ fontFamily: 'helvetica', fontSize: '16px', backgroundColor: 'lightblue' }}>
                                        FRONT
                                    </div>
                                    <div class="backofcard">
                                        BACK
                                    </div>
                                </div>
                            </div> */}
                        </Col>
                        <Col>
                            <img src={im} alt="asu seal" width="400" height="400"></img>
                        </Col>
                        {/* <Col>
                        <p>I would like to know more about you! If you care to share click the button to send me an email.</p>
                        <EmailModal title="Tell me about your school" buttonName="Tell me where you went to school" description="I would love to hear about where you went to school and what was your favorite class" />
                    </Col> */}
                    </Row>
                    {/* <Row>
                        <Col>
                           

                        </Col>
                    </Row> */}
                </center>
            </Container>
        </>
    );
}

export default Education;