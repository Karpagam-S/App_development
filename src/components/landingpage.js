import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Services from './Services';
import Resources from './Resources';
import TrustSignals from './TrustSignals';
import Footer from './Footer';
import Contact from './Contact';
import Testimonials from './Testimonials';
import './landingpage.css';
import WelcomeSection from './WelcomeSection';
const LandingPage = () => {
    return (
      <div className="Land">
        <Header />
        <WelcomeSection/>
        <AboutUs />
        <Services/>
        {/* <Resources /> */}
        <TrustSignals />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
  
  export default LandingPage;