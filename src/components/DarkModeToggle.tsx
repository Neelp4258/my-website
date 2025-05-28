import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
    >
      <motion.div
        className="toggle-background"
        animate={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="toggle-slider"
        animate={{
          x: darkMode ? 28 : 0,
          rotate: darkMode ? 180 : 0
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{
            opacity: darkMode ? 0 : 1,
            scale: darkMode ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
          className="icon-container"
        >
          <Sun size={14} />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            opacity: darkMode ? 1 : 0,
            scale: darkMode ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="icon-container icon-moon"
        >
          <Moon size={14} />
        </motion.div>
      </motion.div>

      <div className="toggle-glow" />
    </motion.button>
  );
};

export default DarkModeToggle; 