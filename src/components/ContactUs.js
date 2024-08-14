import React, { useState } from 'react';
import './ContactUs.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ownerInfo = {
  name: 'Jane Doe',
  title: 'Customer Relations Manager',
  phone: '+1 234 567 890',
  email: 'jane.doe@example.com',
  address: '123 Main St, Anytown, USA',
};

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function ContactUs() {
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Your message has been sent!');
    setMessage('');
  };

  return (
    <div className="contact-page">
      {/* <header className="header"> */}
        {/* <h1>Contact Us</h1> */}
      {/* </header> */}
      <section className="contact-form">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          
          <button type="submit">Send Message</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </section>
      <section className="owner-info">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
          Owner Information
        </motion.h2>
        <div className="info">
          <h3>{ownerInfo.name}</h3>
          <p>{ownerInfo.title}</p>
          <p><FontAwesomeIcon icon={faPhone} /> {ownerInfo.phone}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> {ownerInfo.email}</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {ownerInfo.address}</p>
        </div>
      </section>
      <section className="location-map">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
          Our Location
        </motion.h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12791861.803398116!2d-127.55925215192093!3d38.11235114867198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1723375622693!5m2!1sen!2sin"
            title="Google Maps Location"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
