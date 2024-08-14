import React from 'react';
import './Card.css';

const Card = ({ property }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={property.image} alt={property.title} className="property-image" />
        <span className="property-status">{property.status}</span>
        {property.featured && <span className="property-featured">FEATURED</span>}
      </div>
      <div className="card-body">
        <h2>{property.title}</h2>
        <p className="price">{property.price}</p>
        <div className="details">
          <span className="icon beds" title="Beds">{property.beds}</span>
          <span className="icon baths" title="Baths">{property.baths}</span>
          <span className="icon sqft" title="Square Feet">{property.sqft}</span>
        </div>
        <div className="actions">
          <button className="like-button">❤️</button>
          <button className="preview-button" onClick={() => alert(`Preview ${property.title}`)}>👁️</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
