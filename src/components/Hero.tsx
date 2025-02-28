
import { useEffect, useRef, memo } from 'react';
import { Rocket, ArrowDown, Laptop, Smartphone, Star, Heart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = memo(({ onContactClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

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
    <div id="home" className="min-h-[90vh] flex items-center justify-center bg-background dark:bg-gray-900 py-8 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 dark:to-transparent" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#4338CA",
            },
            links: {
              color: "#4338CA",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-0"
      />
      
      <div 
        ref={heroRef} 
        className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full opacity-100 transition-opacity duration-300 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#4338CA] dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 cursor-pointer transition-all"
            >
              <Rocket size={16} className="mr-2 animate-bounce-slow" />
              {t('hero.subtitle')}
            </motion.div>
            
            <div className="overflow-hidden mb-4 md:mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center text-foreground animate-typing border-r-4 border-[#4338CA]"
              >
                {t('hero.title.part1')}
              </motion.h1>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-center"
            >
              <span className="block bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent animate-gradient">
                {t('hero.title.part2')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-center max-w-3xl mx-auto"
            >
              {t('hero.description')}
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center">
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={onContactClick}
                className="group w-full sm:w-auto bg-[#4338CA] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6366F1] transition-all transform hover:-translate-y-1 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-700 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t('hero.cta.start')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={handleLearnMoreClick}
                className="group w-full sm:w-auto bg-white dark:bg-gray-800 text-[#4338CA] dark:text-indigo-300 px-6 py-3 rounded-lg font-medium border border-gray-200 dark:border-gray-700 hover:border-[#6366F1] dark:hover:border-indigo-500 transition-all transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t('hero.cta.learn')}
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl md:text-3xl font-bold text-[#4338CA] dark:text-indigo-400">500+</div>
                  <Heart className="h-5 w-5 text-gray-400 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.projects')}</div>
                <div className="mt-3 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl md:text-3xl font-bold text-[#4338CA] dark:text-indigo-400">98%</div>
                  <Star className="h-5 w-5 text-gray-400 group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.satisfaction')}</div>
                <div className="mt-3 h-1 w-0 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl md:text-3xl font-bold text-[#4338CA] dark:text-indigo-400">24/7</div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="h-5 w-5 text-gray-400 group-hover:text-blue-500"
                  >
                    <Rocket className="h-5 w-5" />
                  </motion.div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.support')}</div>
                <div className="mt-3 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            style={{ y }}
            className="flex-1 relative w-full px-4 sm:px-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-3 md:p-4 transform transition-all duration-500 ease-out group"
            >
              <img 
                src="/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png" 
                alt="Illustration of person working"
                width="600"
                height="400"
                className="w-full h-auto rounded-xl"
              />
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="absolute -left-4 top-1/4 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-2 md:p-3 transform -translate-x-1/2 transition-transform animate-bounce-slow cursor-pointer"
              >
                <Laptop className="text-[#4338CA] dark:text-indigo-400 w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-2 md:p-3 transform translate-x-1/2 transition-transform animate-bounce-slow cursor-pointer"
              >
                <Smartphone className="text-[#4338CA] dark:text-indigo-400 w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
              
              {/* Add a gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="text-[#4338CA] dark:text-indigo-400" size={24} />
        </motion.div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
