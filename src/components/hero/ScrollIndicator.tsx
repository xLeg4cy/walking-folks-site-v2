
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      whileHover={{ scale: 1.2 }}
    >
      <ArrowDown className="text-[#4338CA] dark:text-indigo-400" size={24} />
    </motion.div>
  );
};

export default ScrollIndicator;
