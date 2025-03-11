
import { useEffect, useRef, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import our new components
import ParticlesBackground from './hero/ParticlesBackground';
import HeroHeading from './hero/HeroHeading';
import HeroButtons from './hero/HeroButtons';
import HeroStats from './hero/HeroStats';
import HeroImage from './hero/HeroImage';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = memo(() => {
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.1
    });
    
    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      currentRef.classList.add('visible');
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  const handleContactButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newUrl = `${location.pathname}?contact=true`;
    window.history.pushState({}, '', newUrl);
    
    const popStateEvent = new PopStateEvent('popstate', { state: {} });
    window.dispatchEvent(popStateEvent);
    
    setTimeout(() => {
      const navbarContactButton = document.querySelector('nav button:last-child');
      if (navbarContactButton instanceof HTMLElement) {
        navbarContactButton.click();
      }
    }, 100);
  };

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-[90vh] flex items-center justify-center bg-background dark:bg-gray-900 py-8 md:py-16 relative overflow-hidden">
      <ParticlesBackground />
      
      <div 
        ref={heroRef} 
        className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full opacity-100 transition-opacity duration-300 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center w-full">
            <HeroHeading />
            <HeroButtons 
              onContactClick={handleContactButtonClick} 
              onLearnMoreClick={handleLearnMoreClick} 
            />
            <HeroStats />
          </div>

          <HeroImage />
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
