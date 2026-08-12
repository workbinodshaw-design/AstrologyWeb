import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">✧</span>
          <span className="logo-text">Uttam Raj Astrology</span>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="/#home" onClick={closeMenu}>Home</a>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <a href="/#vastu" onClick={closeMenu}>Vastu Consultation</a>
          <Link to="/store" onClick={closeMenu}>Store</Link>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <Link to="/book-consultation" className="btn-primary desktop-book">Book Consultation</Link>
          <Link to="/book-consultation" className="btn-primary mobile-book" onClick={closeMenu}>Book Consultation</Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
