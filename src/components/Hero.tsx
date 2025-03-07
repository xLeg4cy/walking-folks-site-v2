
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    if (typeof onContactClick === 'function') {
      onContactClick();
    }
  };

  return (
    <section id="home" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex space-x-4"
            >
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4338CA] hover:bg-[#818CF8] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {t('hero.cta.contact')}
              </motion.button>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-[#4338CA] hover:bg-[#4338CA] hover:text-white text-[#4338CA] font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {t('hero.cta.services')}
              </motion.a>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              src="/lovable-uploads/e0934959-8559-4579-8415-c549ff997919.png"
              alt="Hero Image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
