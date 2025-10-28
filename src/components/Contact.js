import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact us</h2>
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
  );
}

export default Contact;
