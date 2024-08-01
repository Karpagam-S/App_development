// src/components/Benefits.js
import React from 'react';

const benefits = [
  { title: 'Save Time and Reduce Stress', description: 'Automate routine tasks and focus on what matters.' },
  { title: 'Improve Tenant Satisfaction', description: 'Provide a better living experience for your tenants.' },
  { title: 'Maximize Investment Returns', description: 'Optimize your property\'s performance and profitability.' },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>Benefits</h2>
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
