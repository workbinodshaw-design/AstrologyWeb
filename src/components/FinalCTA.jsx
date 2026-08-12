import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../config/constants';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to Find Your Path?</h2>
            <p>Book a personalized consultation with Uttam Raj Astrology.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/book-consultation" className="btn-primary">Book Consultation</Link>
            <button className="btn-secondary" onClick={openWhatsApp}>WhatsApp Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
