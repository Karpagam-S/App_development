// src/components/Footer.js
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Us</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@yourportal.com</p>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
      <div className="social-media">
        {/* Add social media links */}
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <p>&copy; 2024 Your Real Estate Management Portal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
