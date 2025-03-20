import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroHeading = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#4338CA] dark:text-indigo-300"
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
    </>
  );
};

export default HeroHeading;
