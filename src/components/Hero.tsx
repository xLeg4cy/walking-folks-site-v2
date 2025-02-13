import { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';
import TechnologyCarousel from './TechnologyCarousel';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div ref={heroRef} className="section max-w-7xl mx-auto sm:px-6 lg:px-8 py-24 text-center px-[240px]">
        <div className="inline-flex items-center bg-black/5 rounded-full px-6 py-2 text-sm font-medium mb-8">
          <Rocket size={16} className="mr-2" />
          Transforming Ideas into Reality
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">Innovative Solutions for</span>
          <span className="block text-gradient">
            Modern Businesses
          </span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We deliver cutting-edge technology solutions with transparency, efficiency, and unmatched support
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-[#0A2647] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3498db] transition-all transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="bg-white text-[#0A2647] px-8 py-4 rounded-lg font-medium border border-gray-200 hover:border-[#3498db] transition-all transform hover:-translate-y-1">
            Learn More
          </button>
        </div>

        <TechnologyCarousel />
      </div>
    </div>;
};
export default Hero;