import React from 'react';
import { motion } from 'framer-motion';

const PremiumButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: {
      background: 'bg-gradient-to-r from-amber-500 to-yellow-600',
      hover: 'hover:from-amber-600 hover:to-yellow-700',
      text: 'text-white',
      border: '',
    },
    secondary: {
      background: 'bg-transparent',
      hover: 'hover:bg-amber-50',
      text: 'text-amber-700',
      border: 'border-2 border-amber-500',
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-lg font-medium
        ${variants[variant].background}
        ${variants[variant].hover}
        ${variants[variant].text}
        ${variants[variant].border}
        ${className}
        overflow-hidden
        group
      `}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        initial={false}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default PremiumButton; 