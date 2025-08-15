'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = "", 
  onClick,
  disabled = false,
  icon,
  iconPosition = 'right'
}: AnimatedButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-red-eclat text-blanc-pur hover:bg-red-700 shadow-lg hover:shadow-glow",
    secondary: "bg-gray-100 text-noir-intense hover:bg-gray-200 shadow-md hover:shadow-lg",
    outline: "border-2 border-red-eclat text-red-eclat hover:bg-red-eclat hover:text-blanc-pur shadow-md hover:shadow-glow"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === 'left' && (
          <motion.div
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
        )}
        
        <span>{children}</span>
        
        {icon && iconPosition === 'right' && (
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
        )}
      </div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-2xl"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: variant === 'primary' 
            ? "0 0 20px rgba(227, 6, 19, 0.4)" 
            : "0 0 15px rgba(0, 0, 0, 0.1)"
        }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
