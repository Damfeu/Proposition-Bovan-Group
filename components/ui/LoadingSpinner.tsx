'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-blanc-pur flex items-center justify-center z-[200]">
      <div className="relative">
        {/* Main spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-red-eclat/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner spinner */}
        <motion.div
          className="absolute inset-2 w-12 h-12 border-4 border-red-eclat rounded-full border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-6 w-4 h-4 bg-red-eclat rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Floating particles around spinner */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-eclat rounded-full"
            style={{
              left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
              top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h3
          className="text-xl font-semibold text-noir-intense mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Chargement...
        </motion.h3>
        <motion.p
          className="text-gray-600"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          Bovann Group
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
