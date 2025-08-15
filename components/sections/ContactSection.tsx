'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+228 70 25 65 65", "+228 97 19 65 65"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@bovanngroup.com"],
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Lomé, Togo"],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
    },
    {
      icon: Mail,
      name: "TikTok",
      url: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blanc-pur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-noir-intense mb-6">
            Contactez <span className="text-red-eclat">nous</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Prêt à transformer votre présence digitale ? Parlons de votre projet !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-noir-intense mb-6">
                Restons en contact
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Notre équipe est à votre écoute pour étudier votre projet et vous proposer 
                les solutions les plus adaptées à vos besoins.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-red-eclat text-blanc-pur rounded-2xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-noir-intense mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-noir-intense mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gris-clair hover:bg-red-eclat text-noir-intense hover:text-blanc-pur rounded-2xl flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gris-clair rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-noir-intense mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-0 bg-blanc-pur focus:ring-2 focus:ring-red-eclat focus:outline-none transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-noir-intense mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-0 bg-blanc-pur focus:ring-2 focus:ring-red-eclat focus:outline-none transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-noir-intense mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border-0 bg-blanc-pur focus:ring-2 focus:ring-red-eclat focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-eclat text-blanc-pur px-8 py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-red-900 transition-colors duration-300"
              >
                Envoyer le message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;