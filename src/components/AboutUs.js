import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ListingPage from './PropertyListings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHandshake, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

const stats = [
  { id: 1, number: 330, description: 'Total Properties', icon: faBuilding },
  { id: 2, number: 115, description: 'Happy Clients', icon: faHandshake },
  { id: 3, number: 220, description: 'Successful Orders', icon: faHouse },
  { id: 4, number: 123, description: 'Our Teams', icon: faUsers },
];

const teamMembers = [
  { id: 1, name: 'kalixx', role: 'CEO', img: 'https://img.freepik.com/free-photo/skyscraper-view-city-leader-window-frame_1134-1034.jpg' },
  { id: 2, name: 'James', role: 'CTO', img: 'https://st3.depositphotos.com/9880800/18338/i/450/depositphotos_183380544-stock-photo-smiling-african-american-businessman-sitting.jpg' },
  { id: 3, name: 'Luna valleria', role: 'CFO', img: 'https://media.istockphoto.com/id/1927881377/photo/confident-businesswoman-in-modern-office.webp?b=1&s=170667a&w=0&k=20&c=Cf7iZbCzoFDzLHROj-ibbe3WPxqUtmEC_YW_VFm7yQw=' },
];

const testimonials = [
  { id: 1, quote: 'This company is amazing!', name: 'Grace' },
  { id: 2, quote: 'Great service and support.', name: 'Lana' },
  { id: 3, quote: 'Highly recommend.', name: 'Daniel' },
];

const awards = [
  { id: 1, name: 'Award 1', description: 'Best Company 2021' },
  { id: 2, name: 'Award 2', description: 'Top Service 2020' },
];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function AboutUs() {
  return (
    <div className="App">
      {/* <header className="header"> */}
        <h1>About Us</h1>
      {/* </header> */}
      <section className="about">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </section>
      <section className="stats">
        <div className="stats-container">
          {stats.map(stat => (
            <motion.div
              key={stat.id}
              className="stat-item"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1, delay: stat.id * 0.2 }}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={stat.icon} size="3x" color="#007bff" />
              </div>
              <h2>
                <CountUp start={0} end={stat.number} duration={3} />
              </h2>
              <p>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      
      </section>
      {/* <section>
       <ListingPage/>
      </section> */}
      
      <section className="team">
   
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map(member => (
            <motion.div
              key={member.id}
              className="team-member"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1, delay: member.id * 0.2 }}
            >
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              className="testimonial-item"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1, delay: testimonial.id * 0.2 }}
            >
              <p>"{testimonial.quote}"</p>
              <p>- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="video">
        <h2>Introduction Video</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
       
        </motion.div>
      </section>
      <section className="timeline">
        <h2>Our History</h2>
        <div className="timeline-container">
          <motion.div
            className="timeline-item"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3>2020</h3>
            <p>Company founded</p>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3>2021</h3>
            <p>Reached 100 clients</p>
          </motion.div>
        </div>
      </section>
      <section className="awards">
        <h2>Awards and Certifications</h2>
        <div className="awards-container">
          {awards.map(award => (
            <motion.div
              key={award.id}
              className="award-item"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1, delay: award.id * 0.2 }}
            >
              <h3>{award.name}</h3>
              <p>{award.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
