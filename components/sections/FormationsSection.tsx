'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FormationsSection = () => {
  const formations = [
    {
      id: 1,
      title: "Journalisme Reporter d'Images (JRI)",
      description: "Formation complète aux techniques de reportage audiovisuel",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      duration: "6 mois",
      level: "Intermédiaire",
    },
    {
      id: 2,
      title: "Community Manager & Webmaster",
      description: "Maîtrisez la gestion des communautés en ligne et la création web",
      image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      duration: "4 mois",
      level: "Débutant",
    },
    {
      id: 3,
      title: "Développement Web",
      description: "Apprenez à créer des sites web modernes et responsives",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      duration: "8 mois",
      level: "Débutant à Avancé",
    },
    {
      id: 4,
      title: "Développement Mobile",
      description: "Créez des applications mobiles natives et cross-platform",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      duration: "6 mois",
      level: "Intermédiaire",
    },
    {
      id: 5,
      title: "Administration Systèmes & Réseaux",
      description: "Formation aux infrastructures IT et à la cybersécurité",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
      duration: "5 mois",
      level: "Avancé",
    },
    {
      id: 6,
      title: "Multimédia : Photo & Vidéo",
      description: "Techniques avancées de prise de vue et montage audiovisuel",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      duration: "4 mois",
      level: "Débutant",
    },
  ];

  return (
    <section id="formations" className="py-20 bg-gris-clair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-noir-intense mb-6">
            Nos <span className="text-red-eclat">Formations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Développez vos compétences avec nos programmes de formation professionnelle adaptés aux métiers d'avenir
          </p>
        </motion.div>

        {/* Formations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-blanc-pur rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-red-eclat bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-red-eclat text-blanc-pur px-3 py-1 rounded-full text-sm font-medium">
                    {formation.duration}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formation.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-noir-intense mb-3 group-hover:text-red-eclat transition-colors">
                  {formation.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {formation.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-eclat text-blanc-pur px-10 py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-red-900 transition-colors duration-300 mx-auto"
          >
            S'inscrire à une formation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsSection;