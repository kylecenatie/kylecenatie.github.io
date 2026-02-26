import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import ReactGA from 'react-ga4';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';
import './App.css'
import Hobbies from './Pages/Hobbies';
import Education from './Pages/Education';
import Solitare from './Pages/Solitare';

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

// Tracks page changes inside the router
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <PageTracker />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='education' element={<Education />} />
        <Route path='hobbies' element={<Hobbies />} />
        <Route path='games' element={<Solitare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;