import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-amber-900 dark:text-amber-100">DazzloHR</h3>
            <p className="text-amber-800/80 dark:text-amber-200/80">
              Your trusted partner in overseas recruitment and IT/Non-IT hiring solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#overseas" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Overseas Recruitment
                </Link>
              </li>
              <li>
                <Link to="/services#it" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  IT Recruitment
                </Link>
              </li>
              <li>
                <Link to="/services#non-it" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  Non-IT Hiring
                </Link>
              </li>
              <li>
                <Link to="/services#bpo" className="text-amber-800/80 dark:text-amber-200/80 hover:text-amber-600 dark:hover:text-amber-100 transition-colors">
                  BPO Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/919373015503"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </motion.a>
              <motion.a
                href="mailto:info@dazzlo.co.in"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                <span>✉️</span>
                <span>Send Email</span>
              </motion.a>
              <motion.a
                href="tel:+919373015503"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>📞</span>
                <span>Call Us</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-amber-800/20 dark:border-amber-200/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-800/60 dark:text-amber-200/60 text-sm">
              © {new Date().getFullYear()} Dazzlo HR Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                className="text-amber-800/60 dark:text-amber-200/60 hover:text-amber-600 dark:hover:text-amber-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-800/60 dark:text-amber-200/60 hover:text-amber-600 dark:hover:text-amber-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 