
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

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
      >
        <SpotlightCard className="group p-4 md:p-6 h-full">
          <div className="flex items-center justify-center mb-2">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4338CA] to-[#818CF8] bg-clip-text text-transparent">
              {isVisible ? <CountUp end={30} /> : 0}+
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.projects')}</div>
          <div className="mt-3 h-1 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
        </SpotlightCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SpotlightCard className="group p-4 md:p-6 h-full">
          <div className="flex items-center justify-center mb-2">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4338CA] to-[#818CF8] bg-clip-text text-transparent">
              {isVisible ? <CountUp end={99} duration={2500} /> : 0}%
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.satisfaction')}</div>
          <div className="mt-3 h-1 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
        </SpotlightCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SpotlightCard className="group p-4 md:p-6 h-full">
          <div className="flex items-center justify-center mb-2">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4338CA] to-[#818CF8] bg-clip-text text-transparent">24/7</div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.support')}</div>
          <div className="mt-3 h-1 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
};

export default HeroStats;
