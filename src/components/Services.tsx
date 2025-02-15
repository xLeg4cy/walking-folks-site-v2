
import { useEffect, useRef } from 'react';
import { Computer, Users, Database, Shield, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Computer className="w-6 h-6 text-brand-purple-medium" />,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
      features: [
        "Full-Stack Software Development",
        "Bots & API Integration",
        "QA Testing & Automation",
        "UI & UX Design",
        "Software Architecture"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-purple-medium" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [
        "Agile Approach",
        "Risk Management",
        "Resource Allocation",
        "Project Planning",
        "Quality Assurance"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-brand-purple-medium" />,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      features: [
        "Cloud Services (GCP, Oracle & AWS)",
        "DevOps & SRE",
        "Legacy System Migration",
        "Backup & Disaster Recovery",
        "Security Management"
      ]
    }
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-white to-brand-purple-light/5">
      <div ref={servicesRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-purple-light transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            >
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple-light/5 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple-light/5 rounded-full translate-x-16 translate-y-16"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-purple-light/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 group-hover:text-brand-purple-medium transition-colors">
                  {service.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm text-gray-600 flex items-center group">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-brand-purple-medium opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
