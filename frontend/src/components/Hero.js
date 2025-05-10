import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onConsultationClick }) => {
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job or Perfect Candidate
            </h1>
            <p className="text-xl mb-8">
              Connecting talented professionals with leading companies. Your success is our priority.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConsultationClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
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
            <img 
              src="/hero-image.png" 
              alt="HR Solutions" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 