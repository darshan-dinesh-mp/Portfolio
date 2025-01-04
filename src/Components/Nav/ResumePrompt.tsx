import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumePrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black p-4 rounded-md shadow-lg"
        >
          <p className="text-sm font-semibold">
            👋 Hey there! Don't forget to check out my resume!
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumePrompt;

