import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const benefits = [
    { icon: '🎯', title: 'Accurate Guidance', desc: 'Trusted & precise insights' },
    { icon: '✂️', title: 'Personalized Consultation', desc: 'Solutions tailored for you' },
    { icon: '🔒', title: 'Confidential & Secure', desc: '100% privacy guaranteed' },
    { icon: '💡', title: 'Practical Solutions', desc: 'Simple & effective remedies' }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-icon">{b.icon}</div>
              <div>
                <h4 className="benefit-title">{b.title}</h4>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
