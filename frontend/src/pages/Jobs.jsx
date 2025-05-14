import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';
import AnimatedIcon from '../components/AnimatedIcon';
import PremiumButton from '../components/PremiumButton';
import ScrollProgress from '../components/ScrollProgress';

const jobListings = [
  {
    id: 1,
    title: "Helper",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "1-3 years",
    salary: "1000 AED + 250 AED Food Allowance",
    posted: "Today",
    description: "Construction helper position in Saudi Arabia with competitive salary and benefits.",
    requirements: [
      "Basic construction knowledge",
      "Physical fitness",
      "Team player",
      "Valid passport"
    ]
  },
  {
    id: 2,
    title: "Shuttering Carpenter",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "2-5 years",
    salary: "1300 AED + 250 AED Food Allowance",
    posted: "Today",
    description: "Experienced shuttering carpenter needed for major construction projects in Saudi Arabia.",
    requirements: [
      "5+ years experience in shuttering",
      "Knowledge of modern construction techniques",
      "Leadership skills",
      "Valid passport"
    ]
  },
  {
    id: 3,
    title: "Mason",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "3-5 years",
    salary: "1400 AED + 250 AED Food Allowance",
    posted: "Today",
    description: "Skilled mason required for construction projects in Saudi Arabia.",
    requirements: [
      "5+ years masonry experience",
      "Knowledge of different types of masonry",
      "Quality control experience",
      "Valid passport"
    ]
  },
  {
    id: 4,
    title: "Steel Fitter",
    type: "Full-time",
    location: "Saudi Arabia",
    department: "Construction",
    experience: "2-4 years",
    salary: "1200 AED + 250 AED Food Allowance",
    posted: "Today",
    description: "Experienced steel fitter needed for construction projects in Saudi Arabia.",
    requirements: [
      "3+ years steel fitting experience",
      "Knowledge of welding techniques",
      "Blueprint reading skills",
      "Valid passport"
    ]
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
    description: "Senior full stack developer position with competitive salary package.",
    requirements: [
      "Strong experience in React/Node.js",
      "Database design and optimization",
      "Cloud architecture",
      "Team leadership experience"
    ]
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
    description: "International and domestic customer support role in Mumbai.",
    requirements: [
      "Excellent communication skills",
      "International call handling experience",
      "Problem-solving abilities",
      "Flexible with shifts"
    ]
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
    description: "Telesales executive position with attractive salary package.",
    requirements: [
      "Sales experience",
      "Excellent communication skills",
      "Target-driven mindset",
      "CRM knowledge"
    ]
  }
];

const Jobs = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    department: '',
    location: '',
    experience: '',
  });
  const [searchInput, setSearchInput] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the application to your backend
    console.log('Application submitted:', { job: selectedJob, ...applicationForm });
    // Reset form and close modal
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
    });
    setShowApplicationForm(false);
    setSelectedJob(null);
    // Show success message
    alert('Application submitted successfully!');
  };

  const handleFileChange = (e) => {
    setApplicationForm(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchInput.toLowerCase());
    const matchesDepartment = !selectedFilters.department || job.department === selectedFilters.department;
    const matchesLocation = !selectedFilters.location || job.location === selectedFilters.location;
    const matchesExperience = !selectedFilters.experience || job.experience === selectedFilters.experience;

    return matchesSearch && matchesDepartment && matchesLocation && matchesExperience;
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(234, 179, 8, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedIcon icon="💼" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Find Your Dream Job
            </motion.h1>
            <motion.p 
              className="text-xl text-amber-800 dark:text-amber-200 mb-8 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover opportunities across IT, Non-IT, Overseas, and BPO sectors
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchInput}
                  onChange={handleSearch}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
              </div>
              <select
                className="px-4 py-3 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={selectedFilters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
              >
                <option value="">All Departments</option>
                <option value="Construction">Construction</option>
                <option value="IT">IT</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Sales">Sales</option>
              </select>
              <select
                className="px-4 py-3 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={selectedFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <select
                className="px-4 py-3 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={selectedFilters.experience}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
              >
                <option value="">All Experience Levels</option>
                <option value="1-3 years">1-3 years</option>
                <option value="2-4 years">2-4 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="3-7 years">3-7 years</option>
              </select>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="mr-2 text-amber-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaMoneyBillWave className="mr-2 text-amber-500" />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                <PremiumButton variant="primary" className="w-full" onClick={() => handleApplyClick(job)}>
                  Apply Now
                </PremiumButton>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <AnimatedIcon icon="🔍" className="text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Jobs Found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Apply for {selectedJob.title}
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-amber-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-amber-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-amber-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-amber-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
                  <textarea
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, coverLetter: e.target.value }))}
                    rows="4"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-amber-200 dark:border-gray-700"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowApplicationForm(false)}
                    className="px-6 py-2 border border-amber-200 dark:border-gray-700 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors text-amber-800 dark:text-amber-200"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobs; 