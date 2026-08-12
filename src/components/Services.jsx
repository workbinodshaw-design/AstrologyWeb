import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import imgBirth from '../assets/service_birth_chart_1786475287812.jpg';
import imgLove from '../assets/service_love_1786475299414.jpg';
import imgCareer from '../assets/service_career_1786475316052.jpg';
import imgFinance from '../assets/service_finance_1786475331208.jpg';
import imgMarriage from '../assets/service_marriage_1786475346204.jpg';
import imgVastu from '../assets/service_vastu_1786475388386.jpg';

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    { id: 'birth', image: imgBirth, title: 'Birth Chart Analysis', desc: 'Understand your strengths, challenges and life patterns through your birth chart.' },
    { id: 'love', image: imgLove, title: 'Love & Relationship', desc: 'Gain clarity about relationships, compatibility and important emotional decisions.' },
    { id: 'career', image: imgCareer, title: 'Career & Business', desc: 'Get guidance for career decisions, professional growth and business opportunities.' },
    { id: 'finance', image: imgFinance, title: 'Finance & Wealth', desc: 'Understand financial patterns and receive guidance for better decisions and stability.' },
    { id: 'marriage', image: imgMarriage, title: 'Marriage Consultation', desc: 'Explore compatibility, marriage prospects and relationship guidance.' },
    { id: 'vastu', image: imgVastu, title: 'Vastu Consultation', desc: 'Create a balanced environment for your home, office or business through Vastu guidance.' }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Astrology Services for Every Aspect of Life</h2>
        
        <div className="services-scroller-wrapper">
          <button className="scroll-btn scroll-left" onClick={() => scroll('left')} aria-label="Scroll left">&#8592;</button>
          
          <div className="services-scroller" ref={scrollRef}>
            {services.map((service, index) => (
              <div className="service-card premium-card" key={index} id={`service-${index}`}>
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <div className="service-actions">
                    <Link to={`/book-consultation?service=${encodeURIComponent(service.title)}`} className="premium-link">
                      Book Consultation <span className="arrow">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn scroll-right" onClick={() => scroll('right')} aria-label="Scroll right">&#8594;</button>
        </div>
      </div>
    </section>
  );
}
