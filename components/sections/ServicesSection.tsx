'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Monitor, 
  Building2, 
  Hash, 
  Globe, 
  GraduationCap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useRef } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Communication événementielle",
      description: "Organisation et promotion d'événements marquants pour votre marque",
      icon: Calendar,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Événements corporate", "Lancements produits", "Conférences"]
    },
    {
      id: 2,
      title: "Management d'artistes et influenceurs",
      description: "Accompagnement personnalisé pour développer votre audience",
      icon: Users,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Stratégie de croissance", "Partenariats", "Content creation"]
    },
    {
      id: 3,
      title: "Informatique",
      description: "Solutions techniques complètes et maintenance informatique",
      icon: Monitor,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Développement sur mesure", "Maintenance", "Support technique"]
    },
    {
      id: 4,
      title: "Communication d'entreprise",
      description: "Stratégies de communication corporate sur mesure",
      icon: Building2,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Identité de marque", "Relations presse", "Crise management"]
    },
    {
      id: 5,
      title: "Gestion des réseaux sociaux",
      description: "Animation professionnelle de vos plateformes digitales",
      icon: Hash,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Community management", "Content planning", "Analytics"]
    },
    {
      id: 6,
      title: "Création de sites web",
      description: "Développement de sites modernes et performants",
      icon: Globe,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Design responsive", "SEO optimisé", "Performance"]
    },
    {
      id: 7,
      title: "Formations professionnelles",
      description: "Programmes de formation adaptés à vos besoins métiers",
      icon: GraduationCap,
      color: "text-red-eclat",
      gradient: "from-red-500/20 to-red-600/20",
      features: ["Formation sur mesure", "Certification", "Suivi post-formation"]
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-blanc-pur relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-eclat/10 text-red-eclat px-4 py-2 rounded-full border border-red-eclat/20 mb-6"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Nos expertises</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-bold text-noir-intense mb-6"
          >
            Nos <span className="text-red-eclat relative">
              Services
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-red-eclat rounded-full opacity-60"
              />
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Une gamme complète de services digitaux pour propulser votre entreprise vers le succès
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-blanc-pur rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-gray-100 hover:border-red-eclat/20 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-eclat/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Icon container with enhanced animations */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ 
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
                className={`w-16 h-16 ${service.color} mb-6 mx-auto lg:mx-0 relative z-10`}
              >
                <service.icon className="w-full h-full" />
                
                {/* Glow effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="absolute inset-0 bg-red-eclat rounded-full blur-md -z-10"
                />
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-noir-intense mb-4 group-hover:text-red-eclat transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-red-eclat rounded-full" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Learn more button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-red-eclat font-medium hover:text-red-700 transition-colors duration-300 group/btn"
                >
                  En savoir plus
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-eclat/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Floating particles */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="absolute top-4 right-4 w-2 h-2 bg-red-eclat/40 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-red-eclat to-red-600 text-blanc-pur px-8 py-4 rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-300 cursor-pointer"
          >
            <span className="font-semibold text-lg">Découvrir tous nos services</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;