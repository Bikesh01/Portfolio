import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Hireme from "./Components/Hireme";
import Footer from "./Components/Footer";
import "remixicon/fonts/remixicon.css";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Notes from "./Components/Notes";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., for fetching data)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
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
            <Route path="/Notes" element={<Notes />} />
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
