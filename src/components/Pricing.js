// src/components/Pricing.js
import React from 'react';

const pricingPlans = [
  { title: 'Basic Plan', price: '$99/month', features: ['Essential features for small property managers.'] },
  { title: 'Professional Plan', price: '$199/month', features: ['Advanced features for growing portfolios.'] },
  { title: 'Enterprise Plan', price: 'Custom pricing', features: ['All-inclusive features for large property managers.'] },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-list">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
