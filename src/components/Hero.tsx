
import { useEffect, useRef, memo } from 'react';
import { Rocket, ArrowDown, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = memo(({ onContactClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-[90vh] flex items-center justify-center bg-background dark:bg-gray-900 py-8 md:py-16 relative">
      <div 
        ref={heroRef} 
        className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full opacity-100 transition-opacity duration-300"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-left w-full">
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#6E59A5] dark:text-purple-300">
              <Rocket size={16} className="mr-2" />
              {t('hero.subtitle')}
            </div>
            
            <div className="overflow-hidden mb-4 md:mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-left text-foreground animate-typing border-r-4 border-[#7E69AB]">
                {t('hero.title.part1')}
              </h1>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-left">
              <span className="block bg-gradient-to-r from-[#7E69AB] via-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent animate-gradient">
                {t('hero.title.part2')}
              </span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-left">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
              <button 
                onClick={onContactClick}
                className="w-full sm:w-auto bg-[#7E69AB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9b87f5] transition-all transform hover:-translate-y-1 hover:shadow-lg dark:bg-purple-600 dark:hover:bg-purple-700"
                type="button"
                rel="noopener noreferrer"
              >
                {t('hero.cta.start')}
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="w-full sm:w-auto bg-white dark:bg-gray-800 text-[#7E69AB] dark:text-purple-300 px-6 py-3 rounded-lg font-medium border border-gray-200 dark:border-gray-700 hover:border-[#9b87f5] dark:hover:border-purple-500 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                type="button"
              >
                {t('hero.cta.learn')}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-12">
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[#7E69AB] dark:text-purple-400 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.projects')}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[#7E69AB] dark:text-purple-400 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.satisfaction')}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[#7E69AB] dark:text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full px-4 sm:px-0">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 md:p-4 transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png" 
                alt="Illustration of person working"
                width="600"
                height="400"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -left-4 top-1/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform -translate-x-1/2 animate-bounce">
                <CheckCircle2 className="text-[#7E69AB] dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform translate-x-1/2 animate-bounce delay-150">
                <CheckCircle2 className="text-[#7E69AB] dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-[#7E69AB] dark:text-purple-400" size={24} />
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
