import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { openWhatsApp } from '../config/constants';
import './SuperSavingsPage.css';

export default function SuperSavingsPage() {
  const offers = [
    {
      title: 'Complete Astrology Reading',
      original: '₹1,499',
      offer: '₹799',
      discount: '47% OFF',
      serviceQuery: 'Complete Astrology Reading',
      benefits: [
        'Birth Chart Analysis',
        'Career Guidance',
        'Relationship Guidance',
        'Financial Guidance'
      ]
    },
    {
      title: 'Love & Relationship Consultation',
      original: '₹999',
      offer: '₹599',
      discount: '40% OFF',
      serviceQuery: 'Love & Relationship',
      benefits: [
        'Relationship Guidance',
        'Compatibility',
        'Marriage Prospects',
        'Personalized Guidance'
      ]
    },
    {
      title: 'Career & Business Consultation',
      original: '₹999',
      offer: '₹599',
      discount: '40% OFF',
      serviceQuery: 'Career & Business',
      benefits: [
        'Career Guidance',
        'Business Guidance',
        'Growth Direction',
        'Personalized Advice'
      ]
    },
    {
      title: 'Vastu Consultation',
      original: '₹999',
      offer: '₹699',
      discount: '30% OFF',
      serviceQuery: 'Vastu Consultation',
      benefits: [
        'Home Vastu',
        'Office Vastu',
        'Property Vastu',
        'Practical Guidance'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="super-savings-page">
        {/* Hero */}
        <section className="savings-hero">
          <div className="container text-center">
            <span className="subtitle">LIMITED TIME OFFERS</span>
            <h1>Super Savings on Astrology Consultations</h1>
            <p className="description" style={{margin: '0 auto', maxWidth: '650px'}}>
              Get personalized astrology guidance at special prices with our selected consultation packages.
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="offers-section">
          <div className="container">
            <div className="offers-grid-page">
              {offers.map((offer, index) => (
                <div className="offer-card-page" key={index}>
                  <div className="offer-badge">{offer.discount}</div>
                  <h3 className="offer-title-page">{offer.title}</h3>
                  <div className="offer-price-container">
                    <span className="price-original">{offer.original}</span>
                    <span className="price-discounted">{offer.offer}</span>
                  </div>
                  <ul className="offer-benefits">
                    {offer.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <Link 
                    to={`/book-consultation?service=${encodeURIComponent(offer.serviceQuery)}`} 
                    className="btn-primary btn-full"
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Section */}
        <section className="why-book-section">
          <div className="container text-center">
            <h2 className="section-title">Why Choose Our Consultations?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <h4>Personalized Guidance</h4>
              </div>
              <div className="reason-card">
                <h4>Experienced Astrologer</h4>
              </div>
              <div className="reason-card">
                <h4>Confidential Consultation</h4>
              </div>
              <div className="reason-card">
                <h4>Practical Insights</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2>Find the Guidance You Need</h2>
                <p>Choose a consultation and take the first step towards greater clarity.</p>
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
