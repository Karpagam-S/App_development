// src/components/Services.js
import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Automated Rent Collection',
    description: 'Simplify payments with our integrated system. Set up recurring payments, send automatic reminders, and reduce late fees effortlessly. Our secure platform ensures timely and accurate rent collection, giving both landlords and tenants peace of mind. Easily track payment history and generate receipts for record-keeping.',
    icon: 'https://www.shutterstock.com/image-vector/checkmark-like-cash-flow-icon-600nw-2342332139.jpg'
  },
  {
    title: 'Maintenance Request Management',
    description: 'Track and resolve issues quickly with our intuitive maintenance request system. Tenants can easily submit maintenance requests through their online portal, and you can assign tasks to maintenance staff instantly. Stay updated with real-time notifications and track the progress of each request until completion. Maintain a high standard of property upkeep and tenant satisfaction.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT622ybyKjHWg2_ukbsGo2pitu9XiYv0lpoAQ&s'
  },
  {
    title: 'Tenant Screening',
    description: 'Find the best tenants with ease using our comprehensive screening services. We perform detailed background checks, including credit reports, criminal history, and rental history verification. Our screening process helps you identify reliable tenants who will pay rent on time and take care of your property. Reduce the risk of problematic tenants and minimize turnover rates.',
    icon: 'https://cdn-icons-png.freepik.com/512/9631/9631221.png'
  },
  {
    title: 'Financial Reporting',
    description: 'Get detailed insights into your property\'s performance with our advanced financial reporting tools. Access income statements, balance sheets, and cash flow analyses to understand your financial health. Our customizable reports help you track expenses, forecast future revenue, and make informed decisions to optimize your investment. Stay organized with easy-to-read, professional-grade financial reports.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKayUzLWColYah2fenknnoM7cnQjRa6QO-lg&s'
  },
  {
    title: 'Communication Tools',
    description: 'Keep in touch with tenants effortlessly using our integrated communication tools. Send announcements, updates, and reminders through email or SMS directly from the platform. Our messaging system ensures all communications are documented and easily accessible. Foster positive tenant relationships and enhance transparency with effective and efficient communication channels.',
    icon: 'https://cdn-icons-png.freepik.com/512/3715/3715755.png'
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
