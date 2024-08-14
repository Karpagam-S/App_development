import React, { useState } from 'react';
import './PropertyListings.css';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Mock data

  // ... (mock data as shown above)
  const mockProperties = [
    { id: 1, title: "Luxury Apartment in Downtown", price: "$1,200,000", location: "Downtown", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", latitude: 40.7128, longitude: -74.0060, bedrooms: 3, description: "A luxurious apartment with stunning city views.", owner: { name: "John Doe", contact: "+1 234 567 890" }, category: "Sell" },
    { id: 2, title: "Cozy Cottage in the Countryside", price: "$350,000", location: "Countryside", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", latitude: 34.0522, longitude: -118.2437, bedrooms: 2, description: "A cozy cottage with a large garden.", owner: { name: "Jane Smith", contact: "+1 987 654 321" }, category: "Sell" },
    { id: 3, title: "Modern Home with Pool", price: "$2,500/month", location: "Suburbs", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", latitude: 37.7749, longitude: -122.4194, bedrooms: 4, description: "A modern home with a private pool and spacious backyard.", owner: { name: "Alice Johnson", contact: "+1 555 666 777" }, category: "Rent" },
    { id: 4, title: "Downtown Office Space", price: "$5,000/month", location: "Downtown", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", latitude: 40.7128, longitude: -74.0060, bedrooms: 0, description: "A spacious office space in downtown.", owner: { name: "John Doe", contact: "+1 234 567 890" }, category: "Lease" },
    // Add more properties as needed
  ];
  


const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('All');
  const [sortOption, setSortOption] = useState('Default');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const itemsPerPage = 3;

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handlePriceChange = (event) => setPriceRange(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);
  const handleCategoryChange = (event) => setCategoryFilter(event.target.value);
  const openModal = (property) => setSelectedProperty(property);
  const closeModal = () => setSelectedProperty(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'All' || (priceRange === 'Under 500k' && parseInt(property.price.replace(/[\$,]/g, '')) < 500000) ||
                         (priceRange === '500k-1M' && parseInt(property.price.replace(/[\$,]/g, '')) >= 500000 && parseInt(property.price.replace(/[\$,]/g, '')) <= 1000000) ||
                         (priceRange === 'Over 1M' && parseInt(property.price.replace(/[\$,]/g, '')) > 1000000);
    const matchesCategory = categoryFilter === 'All' || property.category === categoryFilter;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case 'Price Low to High':
        return parseInt(a.price.replace(/[\$,]/g, '')) - parseInt(b.price.replace(/[\$,]/g, ''));
      case 'Price High to Low':
        return parseInt(b.price.replace(/[\$,]/g, '')) - parseInt(a.price.replace(/[\$,]/g, ''));
      default:
        return 0;
    }
  });

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);

  return (
    <div className="listing-page">
      <header className="listing-header">
        <h1>Property Listings</h1>
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="filter-options">
          <select value={priceRange} onChange={handlePriceChange} className="filter-select">
            <option value="All">All Prices</option>
            <option value="Under 500k">Under $500k</option>
            <option value="500k-1M">$500k - $1M</option>
            <option value="Over 1M">Over $1M</option>
          </select>
          <select value={sortOption} onChange={handleSortChange} className="sort-select">
            <option value="Default">Sort by</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
          </select>
          <select value={categoryFilter} onChange={handleCategoryChange} className="category-select">
            <option value="All">All Categories</option>
            <option value="Sell">Sell</option>
            <option value="Rent">Rent</option>
            <option value="Lease">Lease</option>
          </select>
        </div>
      </header>
      <section className="property-list">
        {currentProperties.length > 0 ? (
          currentProperties.map(property => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} className="property-image" />
              <div className="property-info">
                <h2 className="property-title">{property.title}</h2>
                <p className="property-location">{property.location}</p>
                <p className="property-price">{property.price}</p>
                <button className="view-details-button" onClick={() => openModal(property)}>View Details</button>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </section>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {selectedProperty && (
        <Modal isOpen={true} onRequestClose={closeModal} contentLabel="Property Details">
          <div className="modal-content">
            <h2>{selectedProperty.title}</h2>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="property-image" />
            <p>{selectedProperty.location}</p>
            <p>{selectedProperty.price}</p>
            <p>{selectedProperty.description}</p>
            <p><strong>Owner:</strong> {selectedProperty.owner.name}</p>
            <p><strong>Contact:</strong> {selectedProperty.owner.contact}</p>
            <div className="map-container">
              <MapContainer center={[selectedProperty.latitude, selectedProperty.longitude]} zoom={13} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[selectedProperty.latitude, selectedProperty.longitude]}>
                  <Popup>
                    <h2>{selectedProperty.title}</h2>
                    <p>{selectedProperty.location}</p>
                    <p>{selectedProperty.price}</p>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListingPage;
