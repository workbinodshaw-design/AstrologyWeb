import React from 'react';
import { Link } from 'react-router-dom';
import vastuHouse from '../assets/vastu-house.png';
import './VastuPreview.css';

export default function VastuPreview() {
  return (
    <section className="vastu-section" id="vastu">
      <div className="container">
        <div className="vastu-card">
          <div className="vastu-content">
            <span className="vastu-label">VASTU CONSULTATION</span>
            <h2 className="vastu-heading">Bring Balance to Your Space</h2>
            <p className="vastu-desc">
              Harmonize your environment with ancient Vastu principles for peace, prosperity and success.
            </p>
            
            <ul className="vastu-points">
              <li><span className="check-icon">✓</span> Home Vastu</li>
              <li><span className="check-icon">✓</span> Office Vastu</li>
              <li><span className="check-icon">✓</span> Business Vastu</li>
              <li><span className="check-icon">✓</span> Property Vastu</li>
            </ul>

            <Link to="/book-consultation?service=Vastu%20Consultation" className="vastu-btn">
              Book Vastu Consultation
            </Link>
          </div>
          <div className="vastu-image-container">
            <div className="vastu-image-fade"></div>
            <img src={vastuHouse} alt="Vastu House" className="vastu-house-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
