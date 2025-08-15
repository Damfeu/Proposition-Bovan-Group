'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Précision",
      description: "Chaque projet est étudié avec minutie pour atteindre vos objectifs",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Notre équipe met toute son énergie au service de votre réussite",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous adoptons les dernières tendances et technologies",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "La qualité est notre priorité dans chaque réalisation",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-gris-clair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-noir-intense mb-6">
            À propos de <span className="text-red-eclat">Bovann Group</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="text-red-eclat font-semibold">Bovann Group</span>, c'est une équipe passionnée par le digital, 
                unie par la mission d'aider les entreprises à atteindre leur plein potentiel grâce à une communication 
                authentique, créative et performante.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, nous avons accompagné des dizaines d'entreprises dans leur transformation digitale, 
                en proposant des solutions sur mesure qui répondent aux défis actuels du marché.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Notre approche combine expertise technique, créativité et stratégie pour vous offrir des résultats 
                qui dépassent vos attentes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-eclat mb-2">150+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-eclat mb-2">50+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-eclat mb-2">5+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-eclat mb-2">24/7</div>
                <div className="text-gray-600">Support client</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="Équipe Bovann Group"
              className="rounded-3xl shadow-2xl w-full"
            />
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-red-eclat text-blanc-pur p-6 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-noir-intense text-center mb-12">
            Nos <span className="text-red-eclat">Valeurs</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-blanc-pur rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-red-eclat text-blanc-pur rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="text-xl font-bold text-noir-intense mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;