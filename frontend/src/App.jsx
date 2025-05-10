import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Jobs from './components/Jobs';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  const [showConsultation, setShowConsultation] = useState(false);

  const handleConsultationChange = () => {
    setShowConsultation(!showConsultation);
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowConsultation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero onConsultationClick={handleConsultationChange} />
      <Services />
      <Jobs />
      <AnimatePresence>
        {showConsultation && (
          <Consultation
            onClose={handleConsultationChange}
            onSubmit={handleConsultationSubmit}
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App; 