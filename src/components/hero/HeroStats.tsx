
import { motion } from 'framer-motion';
import { Heart, Star, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300"
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
        className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300"
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
        className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300"
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
  );
};

export default HeroStats;
