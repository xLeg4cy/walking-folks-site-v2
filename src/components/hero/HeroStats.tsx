
import { motion } from 'framer-motion';
import { Heart, Star, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

// Counter component for animating the numbers
const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Reset when the end value changes
    countRef.current = 0;
    setCount(0);
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const nextCount = Math.floor(percentage * end);
      
      if (countRef.current !== nextCount) {
        countRef.current = nextCount;
        setCount(nextCount);
      }
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);
  
  return <>{count}</>;
};

const HeroStats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Start the animation after component mounts
    setIsVisible(true);
  }, []);

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
          <div className="text-2xl md:text-3xl font-bold text-[#4338CA] dark:text-indigo-400">
            {isVisible ? <CountUp end={10} /> : 0}
          </div>
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
          <div className="text-2xl md:text-3xl font-bold text-[#4338CA] dark:text-indigo-400">
            {isVisible ? <CountUp end={99} duration={2500} /> : 0}%
          </div>
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
