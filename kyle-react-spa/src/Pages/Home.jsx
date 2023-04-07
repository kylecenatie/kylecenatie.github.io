import React from "react";
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';



const AppBodyContainer = styled(Container).attrs({
  fluid: true,
  className: 'px-0 d-flex flex-column',
})`
  min-height: 100vh;
  & .container {
    flex-grow: 1;
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
      <p>This page is currently under development!</p>
    </header>
    {/* <Card singleCard={card} />
     */}
  </AppBodyContainer>
    );
}

export default Home;