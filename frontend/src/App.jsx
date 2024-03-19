import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import About from "./Components/About";
import News from "./Components/News";
import Signin from "./Components/Signin";
import Community from "./Components/Community";
import Course from "./Components/Course";
import Week1 from "./Components/Week1";
import Opportunity from "./Components/Opportunity";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  if (!JSON.parse(localStorage.getItem("userData"))) {
    return (
      <>
        <BrowserRouter>
		
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/community" element={<Community />} />
            <Route path="/course" element={<Course />} />
            <Route path="/weekone" element={<Week1 />} />
            <Route path="/Opportunity" element={<Opportunity />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
