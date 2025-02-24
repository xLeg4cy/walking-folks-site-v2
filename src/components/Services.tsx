
import { useEffect, useRef } from 'react';
import { Computer, Users, Database, Shield, UserPlus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
      icon: <Computer className="w-6 h-6 text-brand-purple-medium" />,
      title: "Software Development",
      description: "We build the future, end-to-end. Our full-stack expertise delivers:",
      features: ["Bots that automate with precision", "Back-end, front-end, and mobile apps", "API integration for connectivity", "QA testing and automation", "UI & UX design that converts", "Scalable software architecture"]
    },
    {
      icon: <Users className="w-6 h-6 text-brand-purple-medium" />,
      title: "Project Management",
      description: "We don't just manage—we accelerate. Expect:",
      features: ["Agile workflows that adapt", "Risk management that excels", "Smart resource allocation", "Precision project planning"]
    },
    {
      icon: <Database className="w-6 h-6 text-brand-purple-medium" />,
      title: "Infrastructure",
      description: "We've mastered the backbone of tech - and we bring it all to you:",
      features: ["Cloud services across major platforms", "Enterprise-grade infrastructure", "Seamless cloud migration", "DevOps that streamlines", "Site Reliability Engineering", "Legacy system upgrades", "Backup and disaster recovery"]
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-purple-medium" />,
      title: "Cybersecurity",
      description: "Your security is our obsession:",
      features: ["24/7 system monitoring", "Advanced threat detection", "Proactive risk mitigation", "Secure identity management", "Rapid incident response", "Enterprise-grade security"]
    },
    {
      icon: <UserPlus className="w-6 h-6 text-brand-purple-medium" />,
      title: "Outsourcing & Team Augmentation",
      description: "Need elite talent? We've got you:",
      features: ["Expert software developers", "Skilled cloud engineers", "Security specialists", "Quality assurance experts", "System administrators", "Multi-tier IT support"]
    }
  ];

  return (
    <div id="services" className="py-24 bg-background text-foreground dark:bg-gray-900">
      <div ref={servicesRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-brand-purple-light dark:hover:border-brand-purple-light transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple-light/5 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple-light/5 rounded-full translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-purple-light/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 group-hover:text-brand-purple-medium transition-colors dark:text-white">
                  {service.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm text-muted-foreground dark:text-gray-400 flex items-center group">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-brand-purple-medium opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform line-clamp-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
