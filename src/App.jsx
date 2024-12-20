import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Hireme from "./Components/Hireme";
import Footer from "./Components/Footer";
import 'remixicon/fonts/remixicon.css';
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Work from "./Components/Work";

function App() {
 

  return (
    <Router>
      <Navbar />
      <div className="">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Hireme" element={<Hireme />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
        </div>
      </div>

      <div className="div">
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
