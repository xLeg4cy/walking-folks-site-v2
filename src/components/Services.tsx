
import { useEffect, useRef } from 'react';
import { Computer, Users, Database, Shield, Building2 } from 'lucide-react';

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
      icon: <Computer className="w-6 h-6" />,
      title: "Software Development",
      description: "Full-stack development including bots, mobile apps, API integration, and more.",
      features: [
        "Full-Stack Software Development",
        "Bots & API Integration",
        "QA Testing & Automation",
        "UI & UX Design",
        "Software Architecture"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Project Management",
      description: "Comprehensive project management with an agile approach.",
      features: [
        "Agile Approach",
        "Risk Management",
        "Resource Allocation",
        "Project Planning"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Expert cloud services and DevOps solutions.",
      features: [
        "Cloud Services (GCP, Oracle & AWS)",
        "DevOps & SRE",
        "Legacy System Migration",
        "Backup & Disaster Recovery"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for your business.",
      features: [
        "Real-Time Monitoring",
        "Threat Detection",
        "Risk Mitigation",
        "Identity Access Management"
      ],
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Outsourcing & Team Augmentation",
      description: "Skilled professionals for your team.",
      features: [
        "Software Developers",
        "Cloud Engineers",
        "Cybersecurity Analysts",
        "QA Engineers"
      ],
      gradient: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div ref={servicesRef} className="section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${service.gradient} p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
