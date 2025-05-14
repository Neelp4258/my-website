import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import patternImage from './assets/pattern.png';
import logoImage from './assets/logo.png';
import handshakeBg from './assets/handshake.jpg';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import logo from './assets/logo.png';

// Data
const services = [
  {
    title: "Gulf Recruitment",
    description: "Specialized recruitment services for UAE, Saudi Arabia, Qatar, and other GCC countries.",
    icon: "🌴"
  },
  {
    title: "Middle East Staffing",
    description: "Comprehensive staffing solutions across all Middle Eastern markets.",
    icon: "🏢"
  },
  {
    title: "Executive Search",
    description: "C-suite and leadership hiring for Middle Eastern organizations.",
    icon: "👔"
  },
  {
    title: "Technical Recruitment",
    description: "Specialized IT and engineering recruitment for Gulf projects.",
    icon: "💻"
  },
  {
    title: "Construction & Oil & Gas",
    description: "Skilled workforce solutions for construction and energy sectors.",
    icon: "🏗️"
  },
  {
    title: "Healthcare Recruitment",
    description: "Medical professionals placement in Middle Eastern healthcare facilities.",
    icon: "🏥"
  },
  {
    title: "Hospitality & Retail",
    description: "Staffing solutions for luxury hotels and retail chains in the Gulf.",
    icon: "🛍️"
  }
];

const regions = [
  {
    name: "United Arab Emirates",
    description: "Dubai, Abu Dhabi, Sharjah, and other emirates",
    icon: "🏙️"
  },
  {
    name: "Saudi Arabia",
    description: "Riyadh, Jeddah, Dammam, and major cities",
    icon: "🕌"
  },
  {
    name: "Qatar",
    description: "Doha and surrounding areas",
    icon: "🌆"
  },
  {
    name: "Kuwait",
    description: "Kuwait City and major regions",
    icon: "🏛️"
  },
  {
    name: "Oman",
    description: "Muscat and other key locations",
    icon: "🏰"
  },
  {
    name: "Bahrain",
    description: "Manama and surrounding areas",
    icon: "🌅"
  }
];

const sectors = [
  {
    title: "Construction & Engineering",
    description: "Skilled professionals for mega projects and infrastructure development",
    icon: "🏗️"
  },
  {
    title: "Oil & Gas",
    description: "Technical experts for energy sector operations",
    icon: "⛽"
  },
  {
    title: "Healthcare",
    description: "Medical professionals for hospitals and clinics",
    icon: "🏥"
  },
  {
    title: "Information Technology",
    description: "IT specialists for digital transformation projects",
    icon: "💻"
  },
  {
    title: "Hospitality",
    description: "Staff for luxury hotels and resorts",
    icon: "🏨"
  },
  {
    title: "Retail",
    description: "Sales and management professionals for retail chains",
    icon: "🛍️"
  }
];

const jobListings = [
  {
    id: 1,
    title: "Helper",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "Freshers to 2 years",
    salary: "1000 AED + 250 AED Food Allowance",
    posted: "Today",
    badge: "Premium",
    description: "Construction helper position in Saudi Arabia with competitive salary and benefits."
  },
  {
    id: 2,
    title: "Shuttering Carpenter",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "Freshers to 2 years",
    salary: "1300 AED + 250 AED Food Allowance",
    posted: "Today",
    badge: "Premium",
    description: "Experienced shuttering carpenter needed for major construction projects in Saudi Arabia."
  },
  {
    id: 3,
    title: "Mason",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "Freshers to 2 years",
    salary: "1400 AED + 250 AED Food Allowance",
    posted: "Today",
    badge: "Premium",
    description: "Skilled mason required for construction projects in Saudi Arabia."
  },
  {
    id: 4,
    title: "Steel Fitter",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "Freshers to 2 years",
    salary: "1200 AED + 250 AED Food Allowance",
    posted: "Today",
    badge: "Premium",
    description: "Experienced steel fitter needed for construction projects in Saudi Arabia."
  },
  {
    id: 5,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Hyderabad",
    department: "IT",
    experience: "3-7 years",
    salary: "30 LPA",
    posted: "Today",
    badge: "Premium",
    description: "Senior full stack developer position with competitive salary package."
  },
  {
    id: 6,
    title: "Customer Support Executive",
    type: "Full-time",
    location: "Mumbai",
    department: "Customer Service",
    experience: "1-3 years",
    salary: "20K - 35K",
    posted: "Today",
    badge: "International",
    description: "International and domestic customer support role in Mumbai."
  },
  {
    id: 7,
    title: "Telesales Executive",
    type: "Full-time",
    location: "Mumbai",
    department: "Sales",
    experience: "1-3 years",
    salary: "20K - 35K",
    posted: "Today",
    badge: "Premium",
    description: "Telesales executive position with attractive salary package."
  }
];

// Add new animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/40 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
              <img 
              src="/icon.png" 
              alt="DazzloHR Logo" 
                className="h-16 w-auto"
              />
            <span className={`text-3xl font-playfair font-bold tracking-wide ${
              isScrolled 
                ? 'bg-gradient-to-r from-amber-700 to-yellow-800 bg-clip-text text-transparent' 
                : 'text-white'
            }`}>
              DazzloHR
            </span>
            </div>
            
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/jobs" isScrolled={isScrolled}>Jobs</NavLink>
            <NavLink to="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
            onClick={toggleMobileMenu}
            className={`md:hidden text-2xl focus:outline-none ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/40 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-4">
                <NavLink to="/" isScrolled={true}>Home</NavLink>
                <NavLink to="/jobs" isScrolled={true}>Jobs</NavLink>
                <NavLink to="/services" isScrolled={true}>Services</NavLink>
                <NavLink to="/about" isScrolled={true}>About</NavLink>
                <NavLink to="/contact" isScrolled={true}>Contact</NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </motion.nav>
  );
};

// Main App Component
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg'
                : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-24">
                <div className="flex items-center space-x-4">
                  <img src={logo} alt="DazzloHR Logo" className="h-16" />
                  <motion.span
                    className={`text-3xl font-playfair tracking-wide ${
                      isScrolled
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent'
                        : 'text-white'
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
                      isScrolled
                        ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white hover:bg-white/10'
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
