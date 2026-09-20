import React from "react";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Footer from "./Component/Footer";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>



      </Router>
    </>
  );
};

export default App;





















