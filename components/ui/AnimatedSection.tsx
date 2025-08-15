'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  margin?: string;
  background?: boolean;
  backgroundPattern?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  once = true,
  margin = "-100px",
  background = false,
  backgroundPattern = false
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  const getDirectionalVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay * 0.2,
          ease: "easeOut"
        }
      }
    };

    switch (direction) {
      case 'up':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'down':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -50 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'left':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'right':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      default:
        return baseVariants;
    }
  };

  const variants = getDirectionalVariants();

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative ${className}`}
    >
      {/* Background pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-red-eclat/5 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, -40, 0],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-20 -left-20 w-32 h-32 bg-noir-intense/5 rounded-full blur-3xl"
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(227,6,19,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(227,6,19,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      )}

      {/* Background color */}
      {background && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: delay * 0.2 + 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
