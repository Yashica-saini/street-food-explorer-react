
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TamilNadu from "./components/TamilNadu";
import Delhi from "./components/Delhi";
import Explore from "./components/Explore";
import Mumbai from "./components/Mumbai";   // <-- Default import, not curly brackets

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        <Route path="/tamilnadu" element={<TamilNadu />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
