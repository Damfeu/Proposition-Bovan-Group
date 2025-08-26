'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Communication événementielle", href: "#" },
        { name: "Management d'artistes", href: "#" },
        { name: "Informatique", href: "#" },
        { name: "Formations", href: "#" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Équipe", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Actualités", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Support technique", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-noir-intense text-blanc-pur relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-red-eclat/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -50, 0],
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-eclat/5 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(227,6,19,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(227,6,19,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-12 h-12 bg-red-eclat rounded-full flex items-center justify-center"
                >
                  <span className="text-blanc-pur font-bold text-xl">B</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">Bovann Group</h3>
                  <p className="text-gray-400">Communication & Digital</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nous aidons les entreprises à se démarquer grâce à des stratégies de communication percutantes, 
                une gestion experte des réseaux sociaux et des solutions digitales innovantes.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-red-eclat transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>+228 70 25 65 65</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-red-eclat transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@bovanngroup.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-red-eclat transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Lomé, Togo</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1, ease: "easeOut" }}
              >
                <h4 className="text-lg font-semibold mb-6 text-red-eclat">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: linkIndex * 0.1, ease: "easeOut" }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: "#E30613" }}
                        className="text-gray-300 hover:text-red-eclat transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Restez informé de nos actualités</h4>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-blanc-pur placeholder-gray-400 focus:outline-none focus:border-red-eclat focus:ring-2 focus:ring-red-eclat/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(227, 6, 19, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-red-eclat text-blanc-pur rounded-2xl font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                S&apos;abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Bovann Group. Tous droits réservés.
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-6 text-gray-500 text-sm"
          >
            <span>Réaliser </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mx-2 text-red-eclat"
            >
              <Heart className="w-4 h-4" />
            </motion.span>
            <span>par AMEK Informatique</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1,
          y: -5,
          boxShadow: "0 20px 40px rgba(227, 6, 19, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-red-eclat text-blanc-pur rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;