import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Fun from './Pages/Fun';
import SportsHome from './sports/SportsHome';
import About from './Pages/About';
import Header from './components/Header';
import './App.css'
import PremLeague from './sports/PremLeague';
import Nba from './sports/Nba';
import NhlStandings from './sports/NhlStandings';


const App = () => {
  return (
    <BrowserRouter>
<Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='fun' element={<Fun />} />
        <Route path='sports' element={<SportsHome />} />
        <Route path='/pl' element={<PremLeague />} />
        <Route path='/nba' element={<Nba />} />
        <Route path='/nhl' element={<NhlStandings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
