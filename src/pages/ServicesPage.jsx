import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { openWhatsApp } from '../config/constants';
import './ServicesPage.css';

import imgBirth from '../assets/service_birth_chart_1786475287812.jpg';
import imgLove from '../assets/service_love_1786475299414.jpg';
import imgCareer from '../assets/service_career_1786475316052.jpg';
import imgFinance from '../assets/service_finance_1786475331208.jpg';
import imgMarriage from '../assets/service_marriage_1786475346204.jpg';
import imgHealth from '../assets/service_health_1786475361477.jpg';
import imgFamily from '../assets/service_family_1786475374692.jpg';
import imgVastu from '../assets/service_vastu_1786475388386.jpg';

export default function ServicesPage() {
  const services = [
    { id: 'birth', image: imgBirth, title: 'Birth Chart Analysis', desc: 'Understand your strengths, challenges and life patterns through your birth chart.' },
    { id: 'love', image: imgLove, title: 'Love & Relationship', desc: 'Gain clarity about relationships, compatibility and important emotional decisions.' },
    { id: 'career', image: imgCareer, title: 'Career & Business', desc: 'Get guidance for career decisions, professional growth and business opportunities.' },
    { id: 'finance', image: imgFinance, title: 'Finance & Wealth', desc: 'Understand financial patterns and receive guidance for better decisions and stability.' },
    { id: 'marriage', image: imgMarriage, title: 'Marriage Consultation', desc: 'Explore compatibility, marriage prospects and relationship guidance.' },
    { id: 'health', image: imgHealth, title: 'Health & Wellness', desc: 'Receive general astrological guidance for balance, lifestyle and wellbeing.' },
    { id: 'family', image: imgFamily, title: 'Family & Life', desc: 'Get perspective on family matters, important life decisions and personal challenges.' },
    { id: 'vastu', image: imgVastu, title: 'Vastu Consultation', desc: 'Create a balanced environment for your home, office or business through Vastu guidance.' }
  ];

  return (
    <>
      <Header />
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container text-center">
            <span className="subtitle">OUR SERVICES</span>
            <h1>Astrology Guidance for Every Aspect of Life</h1>
            <p className="description" style={{margin: '0 auto', maxWidth: '700px'}}>
              Explore our personalized astrology consultations designed to provide clarity and guidance for important areas of your life.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid-page">
              {services.map((service, index) => (
                <div className="page-service-card premium-card" key={index} id={`service-${index}`}>
                  <div className="page-service-image-wrapper">
                    <img src={service.image} alt={service.title} className="page-service-image" />
                  </div>
                  <div className="page-service-content">
                    <h3 className="page-service-title">{service.title}</h3>
                    <p className="page-service-desc">{service.desc}</p>
                    <div className="page-service-actions">
                      <Link to={`/book-consultation?service=${encodeURIComponent(service.title)}`} className="premium-link">
                        Book Consultation <span className="arrow">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Consultation CTA */}
        <section className="featured-consultation">
          <div className="container">
            <h3>Not Sure Which Consultation You Need?</h3>
            <p>Tell us about your concern and we'll help you choose the most suitable consultation.</p>
            <Link to="/book-consultation" className="btn-primary">Book Consultation</Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h4>Share Your Details</h4>
                <p>Tell us about yourself and what you want guidance about.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h4>Consult With Our Astrologer</h4>
                <p>Discuss your questions and concerns.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h4>Receive Personalized Guidance</h4>
                <p>Get insights and recommendations based on your consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA uses the shared component but has a different title, 
            so we'll just inline the custom CTA to match the prompt perfectly, 
            or modify the existing one. The prompt asks to "Create a simple cream/gold CTA".
            The existing FinalCTA is already cream/gold, but let's just make sure 
            it matches the specific text requested. Actually, I'll just use a custom block here 
            to avoid messing up the Homepage's FinalCTA text if it differs. */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2>Ready to Get the Guidance You Need?</h2>
                <p>Book your personalized consultation with Uttam Raj Astrology.</p>
              </div>
              <div className="cta-buttons">
                <Link to="/book-consultation" className="btn-primary">Book Consultation</Link>
                <button className="btn-secondary" onClick={openWhatsApp}>WhatsApp Us</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
