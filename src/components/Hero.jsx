import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="om-watermark">ॐ</div>
      <div className="hero-doodles">
        <span className="doodle doodle-1">✦</span>
        <span className="doodle doodle-2">✧</span>
        <span className="doodle doodle-3">✺</span>
        <span className="doodle doodle-4">✦</span>
        <span className="doodle doodle-5">✧</span>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="subtitle">ANCIENT WISDOM • MODERN GUIDANCE</span>
          <h1>
            Find Answers Beyond the Present<br />
            With <span className="text-gold">Astrology</span>
          </h1>
          <p className="description">
            Personalized astrology and Vastu guidance to help you make better decisions and move forward with clarity.
          </p>
          
          <div className="hero-buttons">
            <Link to="/book-consultation" className="btn-primary">Book Consultation</Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>

          <div className="trust-points">
            <div className="trust-point">
              <span className="check">✓</span> Personalized Guidance
            </div>
            <div className="trust-point">
              <span className="check">✓</span> Confidential Consultation
            </div>
            <div className="trust-point">
              <span className="check">✓</span> Experienced Astrologer
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="zodiac-circle-bg"></div>
          <div className="astrologer-portrait">
            <img src={heroImage} alt="Uttam Raj Astrology" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
