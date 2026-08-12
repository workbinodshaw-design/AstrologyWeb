import React from 'react';
import { Link } from 'react-router-dom';
import astrologerHero from '../assets/hero.png';
import './SuperSavings.css';

export default function SuperSavings() {
  return (
    <section className="promo-banner-section" id="super-savings">
      <div className="container">
        <div className="promo-banner-card">
          <div className="promo-content">
            <span className="promo-label">SUPER SAVINGS</span>
            <h2 className="promo-heading">
              Get Your Astrology Consultation<br />at a <span className="highlight-saffron">Special Price</span>
            </h2>
            <p className="promo-desc">
              Personalized guidance for your career, relationships, marriage, business and life decisions.
            </p>
            
            <div className="promo-pricing">
              <span className="promo-original-price">₹1,499</span>
              <span className="promo-offer-price">₹799</span>
              <span className="promo-discount-badge">47% OFF</span>
            </div>

            <div className="promo-cta-container">
              <Link to="/book-consultation?service=Complete%20Astrology%20Reading" className="promo-btn">
                Book Now
              </Link>
              <span className="promo-limited">Limited Offer</span>
            </div>
          </div>
          
          <div className="promo-image-container">
            <div className="promo-decorative-bg">
              <svg className="promo-zodiac" width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="0.5"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#d4af37" strokeWidth="0.3"/>
                <path d="M 100 5 L 100 195 M 5 100 L 195 100" stroke="#d4af37" strokeWidth="0.3"/>
                <path d="M 33 33 L 167 167 M 33 167 L 167 33" stroke="#d4af37" strokeWidth="0.3"/>
                <circle cx="100" cy="100" r="50" fill="none" stroke="#d4af37" strokeWidth="0.3" strokeDasharray="2 4"/>
              </svg>
            </div>
            <img src={astrologerHero} alt="Uttam Raj Astrologer" className="promo-astrologer-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
