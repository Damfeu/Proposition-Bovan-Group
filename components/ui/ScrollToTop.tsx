'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);
  const scale = useTransform(scrollY, [0, 1000], [0.8, 1]);
  const y = useTransform(scrollY, [0, 1000], [20, 0]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      style={{ opacity, scale, y }}
      whileHover={{ 
        scale: 1.1,
        y: -5,
        boxShadow: "0 20px 40px rgba(227, 6, 19, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-red-eclat text-blanc-pur rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-red-eclat rounded-full"
        initial={{ scale: 0, opacity: 0.7 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default ScrollToTop;
