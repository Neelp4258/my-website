import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: '📞', label: 'Call Us', href: 'tel:+919373015503' },
    { icon: '📧', label: 'Email', href: 'mailto:info@dazzlo.co.in' },
    { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919373015503' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 flex flex-col gap-4"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-amber-900 font-medium">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex items-center justify-center w-full h-full"
        >
          <span className="text-2xl">+</span>
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
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
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 