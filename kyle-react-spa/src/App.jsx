import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Fun from './Pages/Fun';
import WarHome from './Pages/WarHome';
import PremierLeague from './sports/PremierLeague';
import About from './Pages/About';
import Header from './components/Header';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
<Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Fun' element={<Fun />} />
        <Route path='/premier-league-standings' element={<PremierLeague />} />
        {/* <Route path='/War' element={<WarHome />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
