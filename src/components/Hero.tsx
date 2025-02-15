
import { useEffect, useRef } from 'react';
import { Rocket, ArrowDown, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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

  const handleLearnMoreClick = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 relative">
      <div ref={heroRef} className="section max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24 text-center relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 text-sm font-medium mb-8 animate-fade-in text-[#6E59A5]">
              <Rocket size={16} className="mr-2" />
              {t('hero.subtitle')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-left">
              <span className="block">{t('hero.title.part1')}</span>
              <span className="block bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">
                {t('hero.title.part2')}
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 text-left">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onContactClick}
                className="bg-[#7E69AB] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#9b87f5] transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('hero.cta.start')}
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="bg-white text-[#7E69AB] px-8 py-4 rounded-lg font-medium border border-gray-200 hover:border-[#9b87f5] transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                {t('hero.cta.learn')}
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#7E69AB] mb-2">500+</div>
                <div className="text-gray-600 text-sm">{t('hero.stats.projects')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#7E69AB] mb-2">98%</div>
                <div className="text-gray-600 text-sm">{t('hero.stats.satisfaction')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-[#7E69AB] mb-2">24/7</div>
                <div className="text-gray-600 text-sm">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>

          {/* Hero Image with lazy loading */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/1581554e-9bcc-4b34-acc2-9aff908acdee.png" 
                alt="Woman working on laptop"
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
              {/* Feature Highlights */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg p-3 transform -translate-x-1/2 animate-bounce">
                <CheckCircle2 className="text-[#7E69AB]" size={24} />
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-3 transform translate-x-1/2 animate-bounce delay-150">
                <CheckCircle2 className="text-[#7E69AB]" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#7E69AB]" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
