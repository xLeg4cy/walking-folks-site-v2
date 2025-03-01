import { useEffect, useRef } from 'react';
import { Users, Globe, Shield } from 'lucide-react';
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
    <div id="about" className="py-24 bg-background dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/10 via-transparent to-indigo-50/10 dark:from-indigo-900/5 dark:via-transparent dark:to-indigo-900/5" />
      
      <div ref={aboutRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
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
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderColor: "#4338CA"
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Users className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.expertTeam.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.expertTeam.description')}
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderColor: "#4338CA"
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Globe className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.globalReach.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.globalReach.description')}
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderColor: "#4338CA"
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-indigo-50/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Shield className="w-6 h-6 text-[#4338CA] dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-[#4338CA] transition-colors">{t('about.quality.title')}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      {t('about.quality.description')}
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#4338CA] to-[#818CF8] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 md:p-4 transition-all duration-300 group"
            >
              <img 
                src="/lovable-uploads/1581554e-9bcc-4b34-acc2-9aff908acdee.png" 
                alt="Data analytics" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -left-3 top-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform -translate-x-1/2 rotate-12 animate-bounce group-hover:animate-none group-hover:scale-110 transition-all duration-300">
                <Globe className="text-[#4338CA] dark:text-indigo-300 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="absolute -right-3 bottom-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-3 transform translate-x-1/2 -rotate-12 animate-bounce delay-150 group-hover:animate-none group-hover:scale-110 transition-all duration-300">
                <Shield className="text-[#4338CA] dark:text-indigo-300 w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4338CA]/10 via-[#6366F1]/10 to-[#9b87f5]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
