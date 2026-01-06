import { useEffect, useRef } from 'react';
import { Users, Globe, Shield, Heart } from 'lucide-react';
import PremiumIcon from '@/components/ui/PremiumIcon';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, {
      threshold: 0.1
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="bg-background dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/10 via-transparent to-indigo-50/10 dark:from-indigo-900/5 dark:via-transparent dark:to-indigo-900/5" />

      <div ref={aboutRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-muted-foreground dark:text-gray-300 mb-8 text-lg"
            >
              {t('about.description')}
            </motion.p>


            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-6 group h-full">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.expertTeam.title')}</h3>
                      <p className="text-muted-foreground dark:text-gray-300">
                        {t('about.expertTeam.description')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </SpotlightCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: 0.1
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <SpotlightCard className="p-6 group h-full">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.globalReach.title')}</h3>
                      <p className="text-muted-foreground dark:text-gray-300">
                        {t('about.globalReach.description')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </SpotlightCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: 0.2
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <SpotlightCard className="p-6 group h-full">
                  <div className="flex gap-4 items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.quality.title')}</h3>
                      <p className="text-muted-foreground dark:text-gray-300">
                        {t('about.quality.description')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </SpotlightCard>
              </motion.div>
            </div>

          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="group p-3 md:p-4">
                <img
                  src="/lovable-uploads/1581554e-9bcc-4b34-acc2-9aff908acdee.png"
                  alt="Data analytics"
                  className="w-full h-auto rounded-xl"
                />
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
