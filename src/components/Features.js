// src/components/Features.js
import React from 'react';

const features = [
  { title: 'Automated Rent Collection', description: 'Simplify payments with our integrated system.' },
  { title: 'Maintenance Request Management', description: 'Track and resolve issues quickly.' },
  { title: 'Tenant Screening', description: 'Find the best tenants with ease.' },
  { title: 'Financial Reporting', description: 'Get detailed insights into your property\'s performance.' },
  { title: 'Communication Tools', description: 'Keep in touch with tenants effortlessly.' },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
