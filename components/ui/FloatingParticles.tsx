'use client';

import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = [
    { id: 1, x: '10%', y: '20%', size: 'w-2 h-2', delay: 0, duration: 6 },
    { id: 2, x: '80%', y: '30%', size: 'w-3 h-3', delay: 1, duration: 8 },
    { id: 3, x: '20%', y: '70%', size: 'w-1 h-1', delay: 2, duration: 7 },
    { id: 4, x: '70%', y: '80%', size: 'w-2 h-2', delay: 3, duration: 9 },
    { id: 5, x: '40%', y: '10%', size: 'w-1 h-1', delay: 4, duration: 5 },
    { id: 6, x: '90%', y: '60%', size: 'w-3 h-3', delay: 5, duration: 10 },
    { id: 7, x: '15%', y: '90%', size: 'w-2 h-2', delay: 6, duration: 8 },
    { id: 8, x: '60%', y: '15%', size: 'w-1 h-1', delay: 7, duration: 6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.size} bg-red-eclat/20 rounded-full`}
          style={{
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Larger floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-eclat/10 rounded-full"
        animate={{
          y: [0, -50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-noir-intense/10 rounded-full"
        animate={{
          y: [0, 40, 0],
          rotate: [360, 180, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-red-eclat/15 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingParticles;
