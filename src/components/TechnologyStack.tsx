
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import TechnologyCarousel from './TechnologyCarousel';

const TechnologyStack = () => {
  const { t } = useTranslation();

  return (
    <div id="tech" className="py-16 bg-background text-foreground dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/10 via-transparent to-indigo-50/10 dark:from-indigo-900/5 dark:via-transparent dark:to-indigo-900/5" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 text-sm font-medium mb-6 text-[#4338CA] dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 cursor-pointer transition-all mx-auto"
          >
            <Code size={16} className="mr-2 animate-spin-slow" />
            Technology Expertise
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8] dark:from-indigo-300 dark:to-indigo-500">
            {t('services.sections.tech.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto text-lg">
            {t('services.sections.tech.description')}
          </p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#4338CA] to-[#818CF8] mx-auto mt-6 rounded-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hover:scale-[1.02] transition-transform duration-500"
        >
          <TechnologyCarousel />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologyStack;
