import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookConsultation from './pages/BookConsultation';
import ServicesPage from './pages/ServicesPage';
import SuperSavingsPage from './pages/SuperSavingsPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <Router basename="/AstrologyWeb">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/super-savings" element={<SuperSavingsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;
