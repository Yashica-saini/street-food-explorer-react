// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"; // if you want About Us page too
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route opens Signup */}
        <Route path="/" element={<Signup />} />

        {/* After signup, user goes to Home */}
        <Route path="/home" element={<Home />} />

        {/* Example: About Us page route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

