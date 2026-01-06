
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import TechnologyCarousel from './TechnologyCarousel';

const TechnologyStack = () => {
  const { t } = useTranslation();

  return (
    <div id="tech" className="relative overflow-hidden">
      {/* Removed background-specific classes */}
      <div className="absolute inset-0 opacity-5 dark:opacity-2" />

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

          <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8] dark:from-indigo-300 dark:to-indigo-500">
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
          className="transition-transform duration-500"
        >
          <TechnologyCarousel />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologyStack;
