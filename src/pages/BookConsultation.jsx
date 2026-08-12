import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BookConsultation.css';

export default function BookConsultation() {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Astrology Consultation',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({...prev, type: serviceParam}));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="booking-page">
        <section className="booking-hero">
          <div className="container text-center">
            <span className="subtitle">PERSONALIZED CONSULTATION</span>
            <h1>Book Your Astrology Consultation</h1>
            <p className="description" style={{margin: '0 auto'}}>
              Share a few details with us and tell us what you would like guidance about. Our astrologer will get in touch with you.
            </p>
          </div>
        </section>

        <section className="booking-form-section">
          <div className="container">
            <div className="form-card">
              {isSubmitted ? (
                <div className="success-message" style={{textAlign: 'center', padding: '3rem 1rem'}}>
                  <span style={{fontSize: '3rem', display: 'block', marginBottom: '1rem'}}>✅</span>
                  <h2 style={{fontFamily: 'Playfair Display, serif', color: 'var(--charcoal-text)', marginBottom: '1rem'}}>Thank You</h2>
                  <p style={{color: 'var(--gray-text)', fontSize: '1.1rem'}}>Your consultation request has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="form-title">Tell Us About Yourself</h2>
                  <form className="consultation-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" 
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your 10-digit mobile number" 
                        pattern="[0-9]{10}"
                        title="Please enter exactly 10 digits"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="type">Consultation Type *</label>
                      <select 
                        id="type" 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      >
                        <option value="Astrology Consultation">General Astrology Consultation</option>
                        <option value="Complete Astrology Reading">Complete Astrology Reading</option>
                        <option value="Birth Chart Analysis">Birth Chart Analysis</option>
                        <option value="Love & Relationship">Love & Relationship</option>
                        <option value="Career & Business">Career & Business</option>
                        <option value="Finance & Wealth">Finance & Wealth</option>
                        <option value="Marriage Consultation">Marriage Consultation</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Family & Life">Family & Life</option>
                        <option value="Vastu Consultation">Vastu Consultation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message (Optional)</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe what you would like guidance on..."
                        rows="4"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary submit-btn">Submit Request</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
