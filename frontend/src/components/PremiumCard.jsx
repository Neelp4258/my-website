import React from 'react';
import { motion } from 'framer-motion';

const PremiumCard = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div
      className={`relative p-6 rounded-2xl overflow-hidden group ${
        className
      } bg-white dark:bg-gray-800 shadow-lg hover:shadow-gold dark:hover:shadow-gold-dark transition-all duration-300`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Golden gradient border */}
      <div className="absolute inset-0 bg-gradient-gold dark:bg-gradient-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content container */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-xl bg-gradient-gold dark:bg-gradient-gold-dark text-white text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-gold dark:bg-gradient-gold-dark opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </motion.div>
  );
};

export default PremiumCard; 