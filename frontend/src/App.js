import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import patternImage from './assets/pattern.png';
import logoImage from './assets/logo.png';
import handshakeBg from './assets/handshake.jpg';

// Data
const services = [
  {
    title: "Permanent Staffing",
    description: "End-to-end recruitment for long-term positions with our rigorous vetting process.",
    icon: "👔"
  },
  {
    title: "Contract Labour",
    description: "Flexible workforce solutions tailored to your project requirements.",
    icon: "⏱️"
  },
  {
    title: "Payroll Services",
    description: "Comprehensive payroll management with 100% compliance guarantee.",
    icon: "💰"
  },
  {
    title: "Executive Research",
    description: "C-suite and leadership hiring with discreet headhunting services.",
    icon: "🔍"
  },
  {
    title: "Tech Hiring",
    description: "Specialized IT recruitment with technical assessment included.",
    icon: "💻"
  },
  {
    title: "IT & Non-IT Hiring",
    description: "Cross-industry recruitment solutions for all verticals.",
    icon: "🏢"
  },
  {
    title: "Bulk Hiring",
    description: "Mass recruitment drives with accelerated timelines.",
    icon: "👥"
  }
];

const jobListings = [
  {
    id: 1,
    title: "Fundraiser",
    type: "Full-time",
    location: "Andheri",
    department: "Sales",
    experience: "1-3 years",
    salary: "₹15k - ₹25k",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Debts Collection Agent",
    type: "Full-time",
    location: "Thane",
    department: "Finance",
    experience: "1-3 years",
    salary: "Up to ₹35k",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "PHP Laravel Developer",
    type: "Full-time",
    location: "Pune",
    department: "IT",
    experience: "2-4 years",
    salary: "Up to ₹35k",
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "HR Recruiter",
    type: "Freelance",
    location: "Remote",
    department: "HR",
    experience: "Fresher to 2 years",
    salary: "Pay in proportion",
    posted: "1 day ago"
  },
  {
    id: 5,
    title: "Marketing Intern",
    type: "Internship",
    location: "Remote",
    department: "Marketing",
    experience: "Fresher",
    salary: "Pay in proportion",
    posted: "5 days ago"
  },
  {
    id: 6,
    title: "SaaS Intern",
    type: "Internship",
    location: "Remote",
    department: "IT",
    experience: "Fresher",
    salary: "Pay in proportion",
    posted: "2 days ago"
  },
  {
    id: 7,
    title: "Customer Support (BPO)",
    type: "Full-time",
    location: "Thane",
    department: "BPO",
    experience: "Fresher to 2 years",
    salary: "Up to ₹30k",
    posted: "Today",
    badge: "Hot"
  },
  {
    id: 8,
    title: "Customer Support (BPO)",
    type: "Full-time",
    location: "Vashi",
    department: "BPO",
    experience: "Fresher to 2 years",
    salary: "Up to ₹30k",
    posted: "Today",
    badge: "New"
  },
  {
    id: 9,
    title: "Customer Support (International)",
    type: "Full-time",
    location: "Vikhroli",
    department: "BPO",
    experience: "1-3 years",
    salary: "Up to ₹40k",
    posted: "Today",
    badge: "International"
  },
  {
    id: 10,
    title: "Telesales",
    type: "Full-time",
    location: "Andheri",
    department: "BPO",
    experience: "Fresher to 2 years",
    salary: "Up to ₹30k",
    posted: "Today",
    badge: "Hot"
  },
  {
    id: 11,
    title: "Telesales",
    type: "Full-time",
    location: "Thane",
    department: "BPO",
    experience: "Fresher to 2 years",
    salary: "Up to ₹30k",
    posted: "Today",
    badge: "New"
  },
  {
    id: 12,
    title: "Telesales",
    type: "Full-time",
    location: "Nariman Point",
    department: "BPO",
    experience: "1-3 years",
    salary: "Up to ₹40k",
    posted: "Today",
    badge: "Premium"
  }
];

const clients = [
  { name: "Nectar Infotel", logo: "🌐" },
  { name: "Ketto Ventures", logo: "💉" },
  { name: "Coppergate Consultants", logo: "🏢" }
];

const caseStudies = [
  {
    title: "Bridging India's Employment Gap",
    content: [
      "🌍 India faces a paradox — millions unemployed while companies struggle to fill jobs.",
      "",
      "🔍 Key Challenges:",
      "- Information Gap in Tier 2-3 cities",
      "- Skills Mismatch between degrees and job requirements",
      "- Lack of affordable hiring platforms for SMEs",
      "- Digital divide limiting access to opportunities",
      "",
      "💡 Opportunities:",
      "- Booming sectors: IT, healthcare, logistics, BPO, green energy",
      "- MSME expansion post-pandemic",
      "- Growing gig economy",
      "- Government initiatives like Make in India",
      "",
      "🌟 Dazzlo HR Solutions:",
      "- Curated job listings for Tier 2/3 cities",
      "- Free skill assessments for candidates",
      "- Training + placement bundles",
      "- Local employer networks",
      "- Mobile-friendly hiring drives",
      "",
      "🚀 Impact:",
      "- Connecting existing jobs to untapped talent",
      "- Helping employers discover hidden talent pools",
      "- Supporting India's workforce regardless of location"
    ]
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

function App() {
  // Refs
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const jobsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactRef = useRef(null);

  // States
  const [showConsultation, setShowConsultation] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    location: '',
    purpose: 'job',
    email: '',
    phone: ''
  });
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [jobSearch, setJobSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const [hoveredJob, setHoveredJob] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showQuickApply, setShowQuickApply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);

  // Transform hooks
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // Get unique departments
  const departments = ['All', ...new Set(jobListings.map(job => job.department))];

  // Filter jobs
  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = !jobSearch || 
      job.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
      job.location.toLowerCase().includes(jobSearch.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleConsultationChange = (e) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', consultationForm);
    setShowConsultation(false);
  };

  // Scroll handler
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this mapping after refs are defined
  const sectionRefs = {
    About: aboutRef,
    Services: servicesRef,
    Jobs: jobsRef,
    "Case Studies": caseStudiesRef,
    Contact: contactRef,
  };

  // Add handler for copy job details
  const handleCopyJob = (job) => {
    const details = `Job: ${job.title}\nLocation: ${job.location}\nType: ${job.type}\nExperience: ${job.experience}\nSalary: ${job.salary}`;
    navigator.clipboard.writeText(details);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-[#FFF7E6]'}`}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `url(${handshakeBg}) center center / cover no-repeat`,
          opacity: darkMode ? 0.15 : 0.25,
          mixBlendMode: 'lighten',
        }}
      />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md shadow-md`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Dazzlo HR Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Jobs', 'Case Studies', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(sectionRefs[item])}
                  className={`${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium text-lg transition-colors duration-300`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Get Started Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 font-medium text-lg transition-all duration-300"
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConsultation(true)}
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white px-6 py-2.5 rounded-full hover:from-yellow-600 hover:to-yellow-800 font-medium text-lg transition-all duration-300 hover:shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 overflow-hidden"
              >
                <div className="py-4 px-4 space-y-4">
                  {['About', 'Services', 'Jobs', 'Case Studies', 'Contact'].map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ x: 10 }}
                      onClick={() => {
                        scrollToSection(sectionRefs[item]);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors duration-300"
                    >
                      {item}
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowConsultation(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white px-6 py-2.5 rounded-full hover:from-yellow-600 hover:to-yellow-800 font-medium text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ y: heroY }}
        className={`pt-32 ${darkMode ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950' : 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700'} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-white mb-10 md:mb-0"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-white'}`}
              >
                Find Your Dream Job or Perfect Candidate
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-xl mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-100'}`}
              >
                Connecting talented professionals with leading companies. Your success is our priority.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConsultation(true)}
                className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-lg transform transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={patternImage} 
                  alt="HR Solutions Pattern" 
                  className="w-32 h-32 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-2xl font-bold text-white mb-2">HR Solutions</h3>
                <p className="text-yellow-100">Your trusted partner in recruitment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold text-center mb-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Our Clients
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {clients.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
                className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-6 transition-all duration-300 border border-gray-100 hover:border-yellow-500"
              >
                <div className="text-5xl mb-4">{client.logo}</div>
                <div className="text-lg font-semibold text-gray-700 text-center">&nbsp;</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Animations */}
      <section ref={aboutRef} className="py-20 bg-[#FFF7E6]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
            >
              About Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-light tracking-wide`}
            >
              At Dazzlo HR, we redefine recruitment with a passion for connecting exceptional talent to industry-leading organizations. Our team blends innovation with deep industry expertise to deliver tailored staffing solutions, from executive search to bulk hiring and process outsourcing. With a commitment to integrity, speed, and precision, Dazzlo HR empowers businesses to scale confidently while ensuring candidates thrive in roles they love. Together, we shape careers, transform companies, and drive success across every sector we touch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: "🎯", title: "Our Mission", text: "Connecting exceptional talent with outstanding opportunities" },
                { icon: "💡", title: "Our Vision", text: "Transforming the recruitment landscape through innovation" },
                { icon: "🤝", title: "Our Values", text: "Integrity, Excellence, and Client Success" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white/80'} backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300`}
                >
                  <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section ref={jobsRef} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-[#FFF7E6]'}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Current Openings
          </motion.h2>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                className={`w-full px-6 py-4 rounded-full border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white/80 border-gray-200 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md backdrop-blur-sm`}
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedDepartment === dept
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white/80'} backdrop-blur-sm p-8 rounded-xl shadow-lg border ${darkMode ? 'border-gray-700 hover:border-yellow-500' : 'border-gray-100 hover:border-yellow-500'} transition-all duration-300`}
              >
                {/* Badge */}
                {job.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{job.badge}</span>
                )}
                {/* Job Icon */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{job.department === 'BPO' ? '🎧' : '💼'}</span>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{job.title}</h3>
                </div>
                <div className="space-y-2 mb-2">
                  <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}><span className="mr-2">📍</span> {job.location}</p>
                  <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}><span className="mr-2">💼</span> {job.type}</p>
                  <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}><span className="mr-2">🎓</span> {job.experience}</p>
                  <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}><span className="mr-2">💰</span> {job.salary}</p>
                  <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}><span className="mr-2">⏰</span> {job.posted}</p>
                </div>
                {/* Show More/Show Less */}
                {job.description && (
                  <div className="mb-2">
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {expandedJob === job.id ? job.description : `${job.description.slice(0, 60)}...`}
                    </p>
                    <button
                      className="text-yellow-600 hover:underline text-sm mt-1"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      {expandedJob === job.id ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}
                {/* Card Actions */}
                <div className="flex gap-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setSelectedJob(job); setShowQuickApply(true); }}
                    className="flex-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white py-2 rounded-full font-medium shadow-md hover:from-yellow-600 hover:to-yellow-800 transition-all"
                  >
                    Quick Apply
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopyJob(job)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition-all"
                  >
                    Copy Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Jobs Found Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setJobSearch('');
                }}
                className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-[#FFF7E6]'}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Services
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-[#FFF7E6] p-8 rounded-xl shadow-lg border border-gray-100 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Case Studies
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                <div className="space-y-4">
                  {study.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={`py-20 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="mr-2">📍</span> Mumbai, India
                </p>
                <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="mr-2">📧</span> info@dazzlo.com
                </p>
                <p className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="mr-2">📞</span> +91 9373015503
                </p>
              </div>
              <div className="mt-4">
                <iframe
                  title="Dazzlo HR Location"
                  src="https://www.google.com/maps?q=Mumbai,+India&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dazzlo HR Solutions</h3>
              <p className="text-gray-400">
                Your trusted partner in recruitment and HR services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#jobs" className="text-gray-400 hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Permanent Staffing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contract Labour</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payroll Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Executive Research</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400">
                Follow us on social media for updates and opportunities.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dazzlo HR Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal with Enhanced UI */}
      {showConsultation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Request Consultation</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowConsultation(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </motion.button>
            </div>

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Phone', type: 'tel' },
                { name: 'location', label: 'Location', type: 'text' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={consultationForm[field.name]}
                    onChange={handleConsultationChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose
                </label>
                <select
                  name="purpose"
                  value={consultationForm.purpose}
                  onChange={handleConsultationChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="job">Looking for a Job</option>
                  <option value="hire">Looking to Hire</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors font-medium text-lg shadow-lg"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Apply Modal */}
      {showQuickApply && selectedJob && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Quick Apply: {selectedJob.title}</h2>
              <button onClick={() => setShowQuickApply(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="tel" placeholder="Your Phone" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white py-2 rounded-full font-medium shadow-md hover:from-yellow-600 hover:to-yellow-800 transition-all">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
