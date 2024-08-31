import React, { useState } from "react";
import { Link } from "react-router-dom";

import EmailModal from "../components/EmailModal";
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import im from "../images/asu_seal.png";
import im2 from "../images/asu_fear.jpeg";


const Education = () => {
    const [viz, setViz] = useState(true);

    return (
        <>
        <img style={{
            position: "fixed", zIndex: "1", height: "100vh",
            width: "100%",
          
        }} src={im2} alt="asu seal"></img>
        
        <Container
            style={{
                height: "100vh",
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
                        <h3 style={{ margin: "40px", marginTop: "50px", backgroundColor: "gold" }}>ARIZONA STATE UNIVERSITY</h3>


                        <Col>
                            <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "start", margin: "40px", textAnchor: "-moz-initial" }}>
                                <ul style={{ color: "white", textAlign: "left", alignContent:"left",fontWeight: "bold", fontFamily: "ariel", fontSize: "large" }}>

                                    <li>Bachelor of Science in Software Engineering</li>
                                    <li>Graduate in 2022</li>
                                    <li>3.5 G.P.A.</li>
                                </ul></div>

                            <div style={{ borderColor: "black", backgroundColor: "maroon", borderStyle: "solid", padding: "15px", flex: "auto", margin: "50px", alignContent: "flex-start", textAnchor: "-moz-initial" }}>
                                <ul style={{ color: "white", textAlign: "left", fontWeight: "bold", fontFamily: "ariel", fontSize: "large" }}>
                                    <li>Masters in Computer Science</li>
                                    <li>Graduate in 2025</li>
                                    <li>3.5 G.P.A</li>
                                </ul></div>
                        </Col>
                        <Col>
                            <img src={im} alt="asu seal" width="400" height="400"></img>
                        </Col>
                        {/* <Col>
                        <p>I would like to know more about you! If you care to share click the button to send me an email.</p>
                        <EmailModal title="Tell me about your school" buttonName="Tell me where you went to school" description="I would love to hear about where you went to school and what was your favorite class" />
                    </Col> */}
                    </Row>
                    <Row>
                        <Col>
                            {/* <Link to={`/hobbies`}>< span className="tite" style={{  padding: "20px", margin: "auto", cursor: "pointer" }} ><Button id="education_to_hobbies"> Check out my hobbies.</Button></span></Link> */}


                        </Col>
                    </Row>
                </center>
            </Container>
        </>
    );
}

export default Education;