// // src/components/ListingPage.js
// import React, { useState } from 'react';
// import PropertyList from './PropertyListings';
// import './ListingPage.css';

// const initialProperties = [
//   {
//     id: 1,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 2,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 3,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 4,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 5,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 6,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 6,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 7,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   {
//     id: 8,
//     title: 'Beautiful Family House',
//     address: '123 Main St, Springfield',
//     price: '$500,000',
//     owner: 'John Doe',
//     description: 'A beautiful family house with 4 bedrooms and 2 bathrooms.',
//     imageUrl: '/assets/house-n-key.jpg', // Use the correct path or import
//     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1723451593339!5m2!1sen!2sin',
//     type: 'sell' // Property type
//   },
//   // Add more properties with varying types (sell, rent, lease)
// ];

// const ListingPage = () => {
//   const [properties, setProperties] = useState(initialProperties);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOption, setSortOption] = useState('price');
//   const [filterType, setFilterType] = useState('all');
//   const [priceRange, setPriceRange] = useState([0, 1000000]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortOption(event.target.value);
//   };

//   const handleTypeFilterChange = (event) => {
//     setFilterType(event.target.value);
//   };

//   const handlePriceRangeChange = (event) => {
//     const { name, value } = event.target;
//     setPriceRange((prevRange) => {
//       return name === 'minPrice'
//         ? [parseInt(value), prevRange[1]]
//         : [prevRange[0], parseInt(value)];
//     });
//   };

//   const filteredProperties = properties
//     .filter((property) =>
//       property.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((property) =>
//       filterType === 'all' || property.type === filterType
//     )
//     .filter((property) => {
//       const price = parseInt(property.price.replace('$', '').replace(/,/g, ''));
//       return price >= priceRange[0] && price <= priceRange[1];
//     })
//     .sort((a, b) => {
//       if (sortOption === 'price') {
//         return parseInt(a.price.replace('$', '').replace(/,/g, '')) - parseInt(b.price.replace('$', '').replace(/,/g, ''));
//       }
//       return 0;
//     });

//   return (
//     <div className="listing-page">
//       <header className="listing-header">
//         <h1>Real Estate Listings</h1>
//       </header>
//       <div className="search-filter-sort">
//         <input
//           type="text"
//           placeholder="Search properties..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="search-input"
//         />
//         <div className="filter-options">
//           <select value={filterType} onChange={handleTypeFilterChange} className="filter-select">
//             <option value="all">All Types</option>
//             <option value="sell">For Sale</option>
//             <option value="rent">For Rent</option>
//             <option value="lease">For Lease</option>
//           </select>
//           <div className="price-filter">
//             <label>
//               Min Price:
//               <input
//                 type="number"
//                 name="minPrice"
//                 value={priceRange[0]}
//                 onChange={handlePriceRangeChange}
//                 className="filter-select"
//               />
//             </label>
//             <label>
//               Max Price:
//               <input
//                 type="number"
//                 name="maxPrice"
//                 value={priceRange[1]}
//                 onChange={handlePriceRangeChange}
//                 className="filter-select"
//               />
//             </label>
//           </div>
//           <select value={sortOption} onChange={handleSortChange} className="sort-select">
//             <option value="price">Sort by Price</option>
//             <option value="date">Sort by Date</option>
//             {/* Add more sorting options as needed */}
//           </select>
//         </div>
//       </div>
//       <PropertyList properties={filteredProperties} />
//     </div>
//   );
// };

// export default ListingPage;
