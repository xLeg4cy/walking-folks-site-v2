
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface HeroButtonsProps {
  onContactClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLearnMoreClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const HeroButtons = ({ onContactClick, onLearnMoreClick }: HeroButtonsProps) => {
  const { t } = useTranslation();
  
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onContactClick(e);
    // Prevent any default scrolling behavior
    return false;
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={handleContactClick}
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
        onClick={onLearnMoreClick}
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
  );
};

export default HeroButtons;
