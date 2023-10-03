import React from "react";
import Container from 'react-bootstrap/Container';
import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import styled from 'styled-components';
import Modal  from "../components/Modal";
import Button from "react-bootstrap/button"



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
  // const [card, setCard] = useState(false);
  // useEffect(()=>{
  //   const min = Math.ceil(52);
  //   const max = Math.floor(0);
  //   const cardindex = Math.floor(Math.random() * (max - min) + min); 
  //   const c = cardDeck.deck();
  //   const p = c[cardindex]
  //   console.log(p);
  //   setCard(p);
  // }, []);

    return(
    <AppBodyContainer>
    <header className="App-header">
      <div>My name is Kyle Cenatiempo </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>This is the reason why i choose to be a software engineer.</p>
      <ImageSlider /> 
      <div>
      {/* <Link to={`/pl`}><span className="tite" ><SiPremierleague size={200} style={{ 'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer" }} /> </span></Link> */}
        <Button href="about"> Check out more information about me.</Button>
        </div>
    </header>
    <Modal />
    
    
    {/* <Card singleCard={card} />
     */}
     <Skills />
  </AppBodyContainer>
    );
}

export default Home;