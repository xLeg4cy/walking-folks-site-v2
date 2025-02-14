import { useEffect, useRef } from 'react';
import { Rocket, ArrowDown, CheckCircle2 } from 'lucide-react';
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
  return <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3498db,transparent)]" />
        <div className="grid grid-cols-6 gap-4 rotate-45 scale-150">
          {Array.from({
          length: 24
        }).map((_, i) => <div key={i} className="h-24 bg-[#0A2647] opacity-5 rounded-full blur-xl transform -translate-y-1/2" />)}
        </div>
      </div>

      <div ref={heroRef} className="section max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24 text-center relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center bg-black/5 rounded-full px-6 py-2 text-sm font-medium mb-8 animate-fade-in">
              <Rocket size={16} className="mr-2" />
              Transforming Ideas into Reality
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-left">
              <span className="block">Innovative Solutions for</span>
              <span className="block text-gradient">
                Modern Businesses
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 text-left">
              We deliver cutting-edge technology solutions with transparency, efficiency, and unmatched support
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#0A2647] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3498db] transition-all transform hover:-translate-y-1 hover:shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-[#0A2647] px-8 py-4 rounded-lg font-medium border border-gray-200 hover:border-[#3498db] transition-all transform hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#0A2647] mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#0A2647] mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#0A2647] mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>

            {/* Trusted By Section */}
            
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 transform transition-transform hover:scale-105">
              <img src="/placeholder.svg" alt="Hero" className="w-full h-auto rounded-xl" />
              {/* Feature Highlights */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg p-3 transform -translate-x-1/2 animate-bounce">
                <CheckCircle2 className="text-green-500" size={24} />
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-3 transform translate-x-1/2 animate-bounce delay-150">
                <CheckCircle2 className="text-green-500" size={24} />
              </div>
            </div>
          </div>
        </div>

        <TechnologyCarousel />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </div>;
};
export default Hero;