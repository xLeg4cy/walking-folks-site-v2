
import { motion, useTransform, useScroll } from 'framer-motion';
import { Laptop, Smartphone } from 'lucide-react';

const HeroImage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
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
          srcSet="/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png 1x, /lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png 2x"
          alt="Illustration of person working"
          width="600"
          height="400"
          loading="eager" 
          fetchPriority="high"
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
        
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4338CA]/20 via-[#6366F1]/20 to-[#9b87f5]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
