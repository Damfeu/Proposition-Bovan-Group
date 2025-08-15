'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Site E-commerce Premium",
      category: "Développement Web",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      id: 2,
      title: "Campagne Réseaux Sociaux",
      category: "Social Media",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg",
    },
    {
      id: 3,
      title: "Identité Visuelle Corporate",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
    },
    {
      id: 4,
      title: "Application Mobile",
      category: "Développement Mobile",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    },
    {
      id: 5,
      title: "Événement Corporate",
      category: "Communication",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    },
    {
      id: 6,
      title: "Formation en Ligne",
      category: "E-learning",
      image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      company: "CEO, TechStart",
      text: "Bovann Group a transformé notre présence digitale. Leur expertise et leur créativité ont dépassé nos attentes.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 2,
      name: "Jean Martin",
      company: "Directeur Marketing, InnovateCorp",
      text: "Une équipe exceptionnelle qui comprend les enjeux business. Des résultats mesurables et un service impeccable.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      id: 3,
      name: "Sophie Laurent",
      company: "Fondatrice, CreativeHub",
      text: "Professionnalisme, créativité et efficacité. Bovann Group est notre partenaire de confiance depuis 3 ans.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
  ];

  return (
    <section id="realisations" className="py-20 bg-blanc-pur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-noir-intense mb-6">
            Nos <span className="text-red-eclat">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos créations qui ont marqué nos clients
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-red-eclat bg-opacity-90 flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="text-center text-blanc-pur p-4">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gris-clair rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-noir-intense text-center mb-12">
            Ce que disent nos <span className="text-red-eclat">clients</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blanc-pur rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-noir-intense">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;