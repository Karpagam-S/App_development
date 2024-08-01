// src/components/WelcomeSection.js
import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="overlay">
        <div className="welcome-content">
          <h1 className="welcome-message">Welcome to Cealum Premises</h1>
          <h2 className="subheading">Discover, Sell, Rent – Your All-In-One Property Solution</h2>
          
          <p className="welcome-description">
            Discover your perfect home with us. We offer comprehensive real estate services to help you find, manage, and sell properties seamlessly.
          </p>
          {/* <button className="cta-button">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
