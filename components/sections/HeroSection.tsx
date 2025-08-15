'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="accueil" 
      className="relative min-h-screen flex items-center bg-gradient-hero pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-red-eclat/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-noir-intense/5 rounded-full blur-lg"
        />

        <motion.div
          animate={{ 
            borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-eclat/8 blur-md"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(227,6,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(227,6,19,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-eclat/10 text-red-eclat px-4 py-2 rounded-full border border-red-eclat/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Agence de communication innovante</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-4xl lg:text-6xl font-bold text-noir-intense leading-tight"
              >
                <span className="text-red-eclat relative group">
                  Boostez
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-red-eclat rounded-full opacity-60"
                  />
                </span>{' '}
                votre présence,{' '}
                <span className="text-red-eclat relative group">
                  développez
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-red-eclat rounded-full opacity-60"
                  />
                </span>{' '}
                votre image,{' '}
                <span className="text-red-eclat relative group">
                  atteignez
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-red-eclat rounded-full opacity-60"
                  />
                </span>{' '}
                vos objectifs.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-xl text-gray-700 leading-relaxed max-w-2xl"
            >
              Nous aidons les entreprises à se démarquer grâce à des stratégies de communication percutantes, 
              une gestion experte des réseaux sociaux, des sites web performants et des formations adaptées à vos besoins.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-8 py-4"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  className="text-2xl font-bold text-red-eclat"
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
                  className="text-2xl font-bold text-red-eclat"
                >
                  98%
                </motion.div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
                  className="text-2xl font-bold text-red-eclat"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600">Support disponible</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(227, 6, 19, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-red-eclat text-blanc-pur px-8 py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-lg transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Demander un devis gratuit</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: "rgba(227, 6, 19, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-eclat text-red-eclat px-8 py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-red-eclat hover:text-blanc-pur transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Voir nos réalisations</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Play className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image with parallax */}
              <motion.div
                style={{ y }}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Digital Marketing Team"
                    className="w-full h-auto rounded-3xl shadow-2xl hover:shadow-glow-lg transition-all duration-300"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-eclat/20 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Floating badge on image */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-blanc-pur/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-red-eclat/20"
                  >
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-eclat" />
                      <span className="text-sm font-medium text-noir-intense">Stratégie digitale</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-red-eclat rounded-full opacity-20 blur-sm"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, 15, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-noir-intense rounded-full opacity-10 blur-sm"
              />

              {/* New floating elements */}
              <motion.div
                animate={{ 
                  rotate: 180,
                  x: [0, 10, 0],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-red-eclat/30 rounded-full blur-md"
              />

              <motion.div
                animate={{ 
                  rotate: -180,
                  x: [0, -8, 0],
                  y: [0, 12, 0]
                }}
                transition={{ 
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-1/4 -right-4 w-8 h-8 bg-noir-intense/20 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-red-eclat rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-red-eclat rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;