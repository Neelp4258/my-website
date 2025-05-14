import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Main App Component
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
              'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-24">
                <div className="flex items-center space-x-4">
                  <img src="/icon.png" alt="DazzloHR Logo" className="h-16" />
                  <motion.span
                    className={`text-3xl font-playfair tracking-wide ${
                      'bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    DazzloHR
                  </motion.span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      `text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                        isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                  <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isMobileMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 pt-2 pb-3 space-y-1">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                          isActive ? 'font-semibold' : ''
                        }`
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/jobs"
                      className={({ isActive }) =>
                        `block text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                          isActive ? 'font-semibold' : ''
                        }`
                      }
                    >
                      Jobs
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                          isActive ? 'font-semibold' : ''
                        }`
                      }
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                          isActive ? 'font-semibold' : ''
                        }`
                      }
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                          isActive ? 'font-semibold' : ''
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                    <div className="px-3 py-2">
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          <div className="pt-24"> {/* Add padding to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDarkMode ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </motion.button>
  );
}

export default App;
