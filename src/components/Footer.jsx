import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/constants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">✧</span>
              <span className="logo-text">Uttam Raj Astrology</span>
            </div>
            <p className="footer-desc">
              Providing accurate astrology services with ancient wisdom and modern technology for a better tomorrow.
            </p>
            <div className="social-links">
              <a href={CONTACT_INFO.social.fb}>FB</a>
              <a href={CONTACT_INFO.social.ig}>IG</a>
              <a href={CONTACT_INFO.social.yt}>YT</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/#home">Home</a></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links contact-info">
              <li>📞 {CONTACT_INFO.phone}</li>
              <li>✉️ {CONTACT_INFO.email}</li>
              <li>📍 {CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Uttam Raj Astrology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
