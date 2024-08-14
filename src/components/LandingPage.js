import React from 'react';
import './LandingPage.css';
import AboutUs from './AboutUs';
import Services from './Services';
import Blog from './Blog';

const LandingPage = () => {
  return (
    <div className="landing-page">
      

      <main className="main-section">
        <div className="hero-section">
          <h2>Find Your Dream Home Today</h2>
          <p>Explore the best properties in your area with our easy-to-use portal.</p>
          <button>Get Started</button>
        </div>
      </main>

     <AboutUs/>
     <Services/>
<Blog/>
    <br></br>

    </div>
  );
};

export default LandingPage;
