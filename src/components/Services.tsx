import { useEffect, useRef } from 'react';
import { Sparkles, Layers, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import PremiumIcon from '@/components/ui/PremiumIcon';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServiceSection {
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, {
      threshold: 0.1
    });

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <PremiumIcon icon={Sparkles} size="md" />,
      title: t('services.sections.software.title'),
      description: t('services.sections.software.description'),
      features: t('services.sections.software.features', { returnObjects: true }) as string[]
    },
    {
      icon: <PremiumIcon icon={Layers} size="md" />,
      title: t('services.sections.infrastructure.title'),
      description: t('services.sections.infrastructure.description'),
      features: t('services.sections.infrastructure.features', { returnObjects: true }) as string[]
    },
    {
      icon: <PremiumIcon icon={Lock} size="md" />,
      title: t('services.sections.security.title'),
      description: t('services.sections.security.description'),
      features: t('services.sections.security.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <motion.div
      style={{ opacity }}
      id="services"
      className="bg-background text-foreground dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/10 via-transparent to-indigo-50/10 dark:from-indigo-900/5 dark:via-transparent dark:to-indigo-900/5" />

      <motion.div
        ref={servicesRef}
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-10 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#818CF8]">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SpotlightCard className="h-full p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 group-hover:text-[#4338CA] transition-colors dark:text-white">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  <p className="text-muted-foreground dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {service.features.map((feature: string, fIndex: number) => (
                      <li
                        key={fIndex}
                        className="text-sm text-muted-foreground dark:text-gray-400 flex items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 mr-3 text-[#4338CA] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                        <span className="group-hover:text-foreground dark:group-hover:text-gray-200 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
