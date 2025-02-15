
import { useEffect, useRef } from 'react';
import { Computer, Users, Database, Shield, Building2, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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
      title: "Software Development",
      description: "Full-stack development including bots, mobile apps, API integration, and more.",
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
      title: "Project Management",
      description: "Comprehensive project management with an agile approach.",
      features: [
        "Agile Approach",
        "Risk Management",
        "Resource Allocation",
        "Project Planning"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-brand-purple-medium" />,
      title: "Infrastructure",
      description: "Expert cloud services and DevOps solutions.",
      features: [
        "Cloud Services (GCP, Oracle & AWS)",
        "DevOps & SRE",
        "Legacy System Migration",
        "Backup & Disaster Recovery"
      ]
    }
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-white to-brand-purple-light/5">
      <div ref={servicesRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-purple-light/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-purple-light/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/f2ebe6d5-009c-4b05-8cd9-e382156663f0.png"
                alt="Working remotely"
                className="w-full h-auto rounded-xl"
              />
              {/* Feature Tags */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg px-4 py-2 transform -translate-x-1/2">
                <p className="text-brand-purple-medium font-medium">Expert Team</p>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg px-4 py-2 transform translate-x-1/2">
                <p className="text-brand-purple-medium font-medium">24/7 Support</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-purple-light transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                      <li key={fIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-purple-medium rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
