import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src="logo.png" alt="Topland Logo" className="logo" />
                    <p className="footer-tagline">Contact Us</p>
                    <p><FaPhone /> +91 9003444287</p>
                  <p><FaEnvelope /> cealumfoundation@gmail.com</p>
          <p><FaMapMarkerAlt /> 123 Real Estate St, Mumbai, India</p>
     

                </div>
                <div className="footer-links">
                    <div className="important-links">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/properties">All Properties</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/pricing">Pricing Plan</a></li>
                        </ul>
                    </div>
                    <div className="general-links">
                        <h3>General Links</h3>
                        <ul>
                            <li><a href="/terms">Terms And Conditions</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social-media">
                    <h3>Social Media</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="subscribe">
                <input type="email" placeholder="Email" />
                <button>Subscribe Us</button>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2022 WebSolutionUs. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
