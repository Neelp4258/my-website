import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float } from '@react-three/drei';

const AnimatedIcon = ({ icon, size = 64, color = '#fbbf24' }) => {
  return (
    <motion.div
      className="relative w-16 h-16"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full blur-lg opacity-30 animate-pulse-slow" />
      <div className="relative w-full h-full flex items-center justify-center">
        <span className="text-4xl transform hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-amber-500/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default AnimatedIcon; 