// src/components/ServicesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const services = [
  { id: 1, title: 'Tenant Management', image: 'https://spintly.com/wp-content/uploads/2023/08/TENANT-ILLUSTRATION.png', path: '/service-one' },
  { id: 2, title: 'Financial Management', image: 'https://uploads-ssl.webflow.com/5c67c14680da2a42766b43bd/5c7457256cec1034dbdb5b7f_financial-management.png', path: '/service-two' },
  { id: 3, title: 'Maintenance and Repairs', image: 'https://5.imimg.com/data5/YT/PT/MY-28334900/repair-and-maintenance-service.jpg', path: '/service-one' },
  { id: 4, title: 'Communication and Notifications', image: 'https://cdn5.vectorstock.com/i/1000x1000/48/79/communication-concept-notification-application-vector-21604879.jpg', path: '/Communication' },
  { id: 5, title: 'Document Management', image: 'https://idigitalit.com/wp-content/uploads/2024/03/Document-Management-System-1.png', path: '/service-one' },
  { id: 6, title: 'Reporting and Analytics', image: 'https://concentrasolutions.com/wp-content/uploads/2020/11/AdobeStock_123597067-scaled-2560x1280.jpeg', path: '/service-two' },
  // Add more services as needed
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="services-container">
      {services.map((service) => (
        <div
          key={service.id}
          className="service-card"
          onClick={() => handleCardClick(service.path)}
        >
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-overlay">
            <div className="service-details">
              <h2>{service.title}</h2>
              {/* <p>{service.description}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
