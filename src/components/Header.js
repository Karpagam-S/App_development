// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleUserPortalClick = () => {
    navigate('/user-login');
  };

  const handleAdminPortalClick = () => {
    navigate('/admin-login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-and-name">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/495/230/small_2x/real-estate-logo-1-free-png.png"
            alt="Cealum Premises Logo"
            className="header-logo"
          />
          <h1>Cealum Premises</h1>
        </div>
        <nav>
          <button onClick={handleUserPortalClick}>User Portal</button>
          <button onClick={handleAdminPortalClick}>Admin Portal</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
