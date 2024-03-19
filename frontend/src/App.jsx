import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Course from './Components/Course';
import Week1 from './mediaplayer/Week1';
import Footer from './Components/Footer';
import Opportunity from './Components/Opportunity'; // Ensure correct import path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/course' element={<Course />} />
        <Route path='/week-1' element={<Week1 />} />
        <Route path='/Opportunity' element={<Opportunity />} /> {/* Ensure correct path */}

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
