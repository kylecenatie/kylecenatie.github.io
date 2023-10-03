import React, {useState} from "react";
import Button from "react-bootstrap/button"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import im from "../images/california.png";


const About = () => {
    const [viz, setViz] = useState(true);
    const [name, setName] = useState(false);
    const [city, setCity] = useState(false);
    const [state, setState] = useState(false);
    const [country, setCountry] = useState(false);

    return (
        <Container><center>
            <Row>
                <h3><u>About Me</u></h3>


                <Col> 
                <ul><li>
                    Born in Riverside California.
                </li>
                <li>Southern Californian at heart</li>
                <li></li>
                    <li>Middle child.</li> 
                    <li>Three brothers and one sister.</li>  
                    <li>Moved to Mesa Arizona in 2002.</li> 
                    </ul></Col>
                <Col><img src={im} alt="California" width="450" height="600"></img>
                <Form>
                <Form.Check
            type='checkbox'
            label='Check this box if you like the state of California?'
            id='like-ca'
          />
      </Form></Col>
                <Col>
                {viz &&
                    <><Form>
                            <Form.Label>Tell me where you grew up.</Form.Label>
                            <Form.Group className="mb-3" controlId="basic-name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-city">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-state">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter state" onChange={(e) => setState(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-state">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter country" onChange={(e) => setCountry(e.target.value)}/>
                            </Form.Group>
                        </Form><Button variant="primary" type="submit" onClick={()=> setViz(false)}> Send</Button></>
}
{!viz && 
                        <div>Greetings <b>{name}</b> from {city}, {state} {country}!<br />Thanks for visiting my site</div>
                        }
                </Col>
            </Row>
            <Row><Col>
                <Button href="school"> Check out information about my school.</Button>
            </Col>
            </Row>
            </center>

        </Container>
    );
}

export default About;