import React from 'react';
import './Filters.css';

const Filters = ({ onFilter, onSort }) => {
  const handleFilterChange = (event) => {
    // Implement filter logic
    onFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    // Implement sort logic
    onSort(event.target.value);
  };

  return (
    <div className="filters">
      <select onChange={handleFilterChange}>
        <option value="">Filter by</option>
        <option value="price">Price</option>
        <option value="location">Location</option>
        <option value="type">Property Type</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="date">Date Added</option>
      </select>
    </div>
  );
};

export default Filters;
