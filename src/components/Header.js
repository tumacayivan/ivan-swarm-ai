import React from 'react';
import logo from '../logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="IvanSwarmAI Logo" className="logo" />
          <span className="logo-text">IvanSwarmAI</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
