'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  whileHover?: boolean;
}

const AnimatedCard = ({ children, className = "", delay = 0, whileHover = true }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1,
        ease: "easeOut"
      }}
      whileHover={whileHover ? {
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      className={`relative group ${className}`}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-eclat/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-eclat/20 via-red-eclat/10 to-red-eclat/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-eclat/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-red-eclat/40 rounded-full"
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay * 0.2
        }}
      />
    </motion.div>
  );
};

export default AnimatedCard;
