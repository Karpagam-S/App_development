import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaInfoCircle, FaList, FaQuestionCircle, FaBlog, FaEnvelope, FaBars, FaUser, FaTools } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        menuRef.current && !menuRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.png" alt="Company Logo" className="logo-img" />
          <h1 className="logo-text">Caelum</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} ref={menuRef}>
          <FaBars />
        </button>

        <nav className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
          <a href="/" onClick={toggleMenu}><FaHome /> Home </a>
          <a href="/about-us" onClick={toggleMenu}><FaInfoCircle /> About Us </a>
          <a href="/list" onClick={toggleMenu}><FaList /> Listings </a>
          <a href="/services" onClick={toggleMenu}><FaTools /> Services </a>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown} ref={dropdownRef}>
            <a href="#" className="dropdown-toggle">
              <FaUser /> Login
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/user/login" onClick={toggleMenu}>User Login</a>
                <a href="/owner/login" onClick={toggleMenu}>Owner Login</a>
              </div>
            )}
          </div>
          <a href="/faq" onClick={toggleMenu}><FaQuestionCircle /> FAQ </a>
          <a href="/blog" onClick={toggleMenu}><FaBlog /> Blog </a>
          <a href="/contactus" onClick={toggleMenu}><FaEnvelope /> Contact </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
