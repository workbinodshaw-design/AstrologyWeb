import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import SuperSavings from '../components/SuperSavings';
import VastuPreview from '../components/VastuPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <SuperSavings />
        <Services />
        <WhyChooseUs />
        <VastuPreview />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
