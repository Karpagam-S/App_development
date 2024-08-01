// src/components/Resources.js
import React, { useState } from 'react';
import './Resources.css';

const resourcesData = [
  {
    category: 'Guides',
    items: [
      { title: 'Property Management 101', description: 'A comprehensive guide for new property managers.', link: '/guides/property-management-101' },
      { title: 'Tenant Screening Best Practices', description: 'Learn how to screen tenants effectively.', link: '/guides/tenant-screening' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { title: 'Rent Calculator', description: 'Calculate the optimal rent for your property.', link: '/tools/rent-calculator' },
      { title: 'Maintenance Tracker', description: 'Keep track of property maintenance tasks.', link: '/tools/maintenance-tracker' }
    ]
  },
  {
    category: 'Templates',
    items: [
      { title: 'Lease Agreement Template', description: 'A customizable lease agreement template.', link: '/templates/lease-agreement' },
      { title: 'Eviction Notice Template', description: 'Template for an eviction notice.', link: '/templates/eviction-notice' }
    ]
  },
  {
    category: 'Articles',
    items: [
      { title: 'Market Trends 2024', description: 'Stay updated with the latest market trends.', link: '/articles/market-trends-2024' },
      { title: 'Legal Considerations for Landlords', description: 'Important legal information for property owners.', link: '/articles/legal-considerations' }
    ]
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resourcesData.map(category => ({
    ...category,
    items: category.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }));

  return (
    <section className="resources">
      <h2>Resources</h2>
      <p>Explore our resources to help you manage your properties effectively, including guides, tools, and best practices.</p>
      
      <input
        type="text"
        placeholder="Search resources..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      
      {filteredResources.map(category => (
        <div key={category.category} className="resource-category">
          <h3>{category.category}</h3>
          <div className="resource-items">
            {category.items.map(item => (
              <div key={item.title} className="resource-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link} className="resource-link">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Resources;
