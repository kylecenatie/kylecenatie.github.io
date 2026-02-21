import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';  // ← changed from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';
import './App.css'
import Hobbies from './Pages/Hobbies';
import Education from './Pages/Education';
import Solitare from './Pages/Solitare';

const App = () => {
  return (
    <BrowserRouter>
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