import React, { useState } from "react";
import EmailModal from "../components/EmailModal";
import Button from "react-bootstrap/button"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import im from "../images/asu_fear.jpeg";

// import './school.css';

{/* <div
class = "image"
style = {{
   height: "350px",
   width: "550px",
   backgroundImage:
   'url("https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png")',
   backgroundSize: "contain",
   backgroundRepeat: "no-repeat",
}} */}

const School = () => {
    const [viz, setViz] = useState(true);
    const [name, setName] = useState(false);
    const [city, setCity] = useState(false);
    const [state, setState] = useState(false);
    const [country, setCountry] = useState(false);
    return (<Container>
      
            <div class = "image"
    style = {{
       height: "100%",
       width: "100%",
       backgroundImage: 'url("https://www.mos.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fh1t3y2jud9xn%2F3X3ZXO3WAcLOOxcEmlkcM6%2F98ef3316ec6f0d0d5d9124f672e543e5%2Fimage2.png&w=2048&q=75")',
       backgroundSize: "contain",
       backgroundRepeat: "no-repeat",
    }} >
            <center>
                <Row>
                    <h3><u>Education</u></h3>


                    <Col>
                        <ul><li>
                            Went to Arizona State University in the Ira Fulton Schools of Engineering
                        </li>
                            <li>Graduated undergrad in 2022.</li>
                            <li>Recieved a bachelors degree in science focusing on Software Engineering</li>
                            <li>Started graduate program for the school of Computing and Augmented Intelligence as ASU </li>
                            <li>Plans to graduate in 2024.</li>
                            <li>With a masters in science focusing on Computer Science</li>
                        </ul></Col>
                    <Col><img src={im} alt="California" width="450" height="600"></img>
                    </Col>
                    <Col>
                        <p>I would like to know more about you! If you care to share click the button to send me an email.</p>
                        <EmailModal title="Tell me about your school" buttonName="Tell me where you went to school" description="I would love to hear about where you went to school and what was your favorite class" />
                    </Col>
                </Row>
                <Row>
                    <Col>                
                    <Form>
                        <Form.Check
                            type='checkbox'
                            label='Check this box if you like the state of California?'
                            id='like-ca'
                        />
                    </Form></Col>
                </Row>
            </center>
</div>
            </Container>
        
    );
}

export default School;