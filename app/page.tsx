'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FormationsSection from '@/components/sections/FormationsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingParticles from '@/components/ui/FloatingParticles';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingParticles />
      <main className="min-h-screen bg-blanc-pur">
        <Header />
        <HeroSection />
        <ServicesSection />
        <FormationsSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}