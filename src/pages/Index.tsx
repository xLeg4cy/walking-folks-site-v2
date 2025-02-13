
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';

const Index = () => {
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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
    </div>
  );
};

export default Index;
