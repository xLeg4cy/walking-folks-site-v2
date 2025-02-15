
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import TechnologyStack from '@/components/TechnologyStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <div className="space-y-20">
        <Hero />
        <About />
        <TechnologyStack />
        <Services />
        <Testimonials />
        <FAQ />
        <Pricing />
      </div>
      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
      <Footer />
    </div>
  );
};

export default Index;
