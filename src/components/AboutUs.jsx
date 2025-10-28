import React from "react";
import "./AboutUs.css"; // We'll put your CSS here

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Cities Explorer</h2>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>

      {/* Header */}
      <div className="header">
        <h1>About Us</h1>
      </div>

      {/* About Section */}
      <section className="about">
        <h2>Welcome to Street Food Explorer India</h2>
        <p>
          India is a land of flavors, colors, and traditions — and nothing captures this diversity better than its <b>street food</b>.  
          From Delhi’s spicy chaat to Mumbai’s famous vada pav, from Rajasthan’s crunchy kachoris to Tamil Nadu’s crispy dosas,  
          every state and city has a unique taste that tells a story.
        </p>
        <p>
          <b>Street Food Explorer India</b> is your one-stop journey to explore the hidden gems of Indian cities through their food.  
          Our mission is to showcase the authenticity, culture, and love behind every dish that has made Indian street food world famous.
        </p>

        {/* Mission Cards */}
        <div className="mission">
          <div className="mission-card">
            <h3>🍴 Our Passion</h3>
            <p>We are passionate about bringing the real taste of Indian streets to food lovers everywhere.</p>
          </div>
          <div className="mission-card">
            <h3>🌍 Our Vision</h3>
            <p>To make street food an identity of Indian culture globally by highlighting city-specific delicacies.</p>
          </div>
          <div className="mission-card">
            <h3>🤝 Our Goal</h3>
            <p>Connecting people through flavors — because food is not just about taste, it’s about stories, people, and love.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Street Food Explorer India | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;
