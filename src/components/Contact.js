import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div>
      {/* Navbar should be outside the centered container */}
      <nav className="navbar">
        <h2>Cities Explorer</h2>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Explore</Link></li>
        </ul>
      </nav>

      {/* Contact section */}
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-illustration">
            <div className="circle"></div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt="Illustration"
              className="illustration-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

