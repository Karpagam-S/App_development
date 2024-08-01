// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Ukesh E.', feedback: 'This portal has transformed how I manage my properties. It\'s a game-changer!' },
  { name: 'Gowtham G.', feedback: 'This hava made my work more easy and flexible to use.' },
  { name: 'Lilly H.', feedback: 'The best property management tool I\'ve ever used. Highly recommend!' },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
