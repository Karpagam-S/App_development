// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need further information, please feel free to contact us. We are here to help!</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@yourportal.com</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
