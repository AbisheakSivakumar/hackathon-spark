
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import PrizesSection from '@/components/PrizesSection';
import VenueSection from '@/components/VenueSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-hackathon-darker text-hackathon-light antialiased overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
