
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
import Privacy from '@/components/Privacy';
import LoadingSpinner from '@/components/LoadingSpinner';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import TopProgressBar from '@/components/TopProgressBar';
import LiveChat from '@/components/LiveChat';

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <TopProgressBar />
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <div className="space-y-20">
        <Hero />
        <About />
        <TechnologyStack />
        <Services />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Privacy />
      </div>
      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      <LiveChat />
    </div>
  );
};

export default Index;
