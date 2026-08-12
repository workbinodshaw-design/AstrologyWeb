import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    { name: 'Demo Review', text: 'I received very accurate predictions and effective remedies from the consultation.' },
    { name: 'Demo Review', text: 'The Vastu consultation for my new office helped create a much better working environment.' },
    { name: 'Demo Review', text: 'I gained a lot of clarity regarding my career path. The insights were very helpful.' }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="stars">
                {'★'.repeat(5)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-name">– {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
