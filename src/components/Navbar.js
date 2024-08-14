// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for the sidebar toggle

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <div className="logo">
//           <img src="/images/logo.png" alt="Company Logo" />
//           <h1>caelum</h1>
//         </div>

//         <div className="navbar-right">
//           <a href="tel:951-394-0030" className="nav-link">
//             <i className="fas fa-phone"></i> Call Us Today: 951-394-0030
//           </a>
//           <button className="menu-toggle" onClick={toggleSidebar}>
//             <FaBars />
//           </button>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <button className="close-sidebar" onClick={toggleSidebar}>
//           <FaTimes />
//         </button>
//         <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
//           Home
//         </Link>
//         <Link to="/tenants" className="sidebar-link" onClick={toggleSidebar}>
//           Tenants
//         </Link>
//         <Link to="/owners" className="sidebar-link" onClick={toggleSidebar}>
//           Owners Portal
//         </Link>
//         <Link to="/about-us" className="sidebar-link" onClick={toggleSidebar}>
//           About Us
//         </Link>
//         <Link to="/list" className="sidebar-link" onClick={toggleSidebar}>
//           Listings
//         </Link>
//         <Link to="/faq" className="sidebar-link" onClick={toggleSidebar}>
//           FAQ
//         </Link>
//         <Link to="/blog" className="sidebar-link" onClick={toggleSidebar}>
//           Blog
//         </Link>
//         <Link to="/contactus" className="sidebar-link" onClick={toggleSidebar}>
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
