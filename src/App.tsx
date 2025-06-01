import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FuturisticBackground from './components/FuturisticBackground';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Services = lazy(() => import('./pages/Services'));
const Vision = lazy(() => import('./pages/Vision'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#FFD700'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #FFD700',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '1rem'
    }} />
    Loading...
  </div>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to true
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    // Remove loading spinner if it exists
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <FuturisticBackground />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/vision" element={<Vision />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
