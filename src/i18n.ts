import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "blog": "Blog",
        "contact": "Contact Us"
      },
      "hero": {
        "subtitle": "Transforming Ideas into Reality",
        "title": {
          "part1": "Innovative Solutions for",
          "part2": "Modern Businesses"
        },
        "description": "Tired of complex tech solutions? We simplify. Delivering cost-efficient, minimalist, and innovative software, cloud, and cybersecurity solutions.",
        "cta": {
          "start": "Contact Us",
          "learn": "Learn More"
        },
        "stats": {
          "projects": "Completed Projects",
          "satisfaction": "Customer Satisfaction",
          "support": "Support Available"
        }
      },
      "tech": {
        "title": "Our Technology Stack",
        "description": "We use cutting-edge technologies to build modern, scalable, and reliable solutions"
      },
      "about": {
        "title": "About Us",
        "description": "With over 10 years in the software and infrastructure field, we focus on delivering technology solutions that are cost-efficient, minimalist, and innovative while maintaining transparency and high-quality development support.",
        "expertTeam": {
          "title": "Expert Team",
          "description": "Our experienced professionals bring extensive knowledge to every project."
        },
        "globalReach": {
          "title": "Global Reach",
          "description": "Strong presence in US and Latin America markets."
        },
        "quality": {
          "title": "Quality Assured",
          "description": "Committed to delivering high-quality solutions."
        }
      },
      "services": {
        "title": "Our Services",
        "description": "Comprehensive solutions tailored to your needs",
        "sections": {
          "software": {
            "title": "Software Development",
            "description": "We build the future, end-to-end. Our full-stack expertise delivers:",
            "features": [
              "Bots that automate with precision",
              "Back-end, front-end, and mobile apps",
              "API integration for connectivity",
              "QA testing and automation",
              "UI & UX design that converts",
              "Scalable software architecture"
            ]
          },
          "projectManagement": {
            "title": "Project Management",
            "description": "We don't just manage—we accelerate. Expect:",
            "features": [
              "Agile workflows that adapt",
              "Risk management that excels",
              "Smart resource allocation",
              "Precision project planning"
            ]
          },
          "infrastructure": {
            "title": "Infrastructure",
            "description": "We've mastered the backbone of tech - and we bring it all to you:",
            "features": [
              "Cloud services across major platforms",
              "Enterprise-grade infrastructure",
              "Seamless cloud migration",
              "DevOps that streamlines",
              "Site Reliability Engineering",
              "Legacy system upgrades",
              "Backup and disaster recovery"
            ]
          },
          "security": {
            "title": "Cybersecurity",
            "description": "Your security is our obsession:",
            "features": [
              "24/7 system monitoring",
              "Advanced threat detection",
              "Proactive risk mitigation",
              "Secure identity management",
              "Rapid incident response",
              "Enterprise-grade security"
            ]
          },
          "outsourcing": {
            "title": "Outsourcing & Team Augmentation",
            "description": "Need elite talent? We've got you:",
            "features": [
              "Expert software developers",
              "Skilled cloud engineers",
              "Security specialists",
              "Quality assurance experts",
              "System administrators",
              "Multi-tier IT support"
            ]
          }
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "description": "Find answers to common questions about our services and process.",
        "items": [
          {
            "question": "What services do you provide?",
            "answer": "We offer a comprehensive range of services including web development, mobile app development, cloud solutions, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your specific needs."
          },
          {
            "question": "How long does a typical project take?",
            "answer": "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
          },
          {
            "question": "Do you provide ongoing support?",
            "answer": "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for updates, bug fixes, and improvements post-launch."
          },
          {
            "question": "What technologies do you work with?",
            "answer": "We work with a wide range of modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack based on your project's specific requirements and goals."
          },
          {
            "question": "How do you handle project communication?",
            "answer": "We maintain clear communication through regular meetings, progress reports, and dedicated project management tools. You'll have a direct line to your project team and regular updates on milestones."
          }
        ]
      },
      "footer": {
        "slogan": "Creating innovative solutions for tomorrow's challenges",
        "quickLinks": "Quick Links",
        "aboutUs": "About Us",
        "services": "Services",
        "blog": "Blog",
        "privacyPolicy": "Privacy Policy",
        "servicesSection": {
          "title": "Services",
          "webDev": "Web Development",
          "mobileApps": "Mobile Apps",
          "cloudSolutions": "Cloud Solutions",
          "consulting": "Consulting"
        },
        "contactUs": {
          "title": "Contact Us",
          "address": "300 Canal Street, Lawrence, MA 01840",
          "phone": "1 (978) 943-2457",
          "email": "contact@walkingfolks.com"
        },
        "copyright": "All rights reserved."
      },
      "contact": {
        "title": "Let's Start a Conversation",
        "subtitle": "Get in Touch",
        "description": "Have a project in mind or just want to learn more? We'd love to hear from you."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "home": "Inicio",
        "about": "Nosotros",
        "services": "Servicios",
        "blog": "Blog",
        "contact": "Contáctanos"
      },
      "hero": {
        "subtitle": "Transformando Ideas en Realidad",
        "title": {
          "part1": "Soluciones Innovadoras para",
          "part2": "Empresas Modernas"
        },
        "description": "¿Cansado de soluciones tecnológicas complejas? Nosotros simplificamos. Entregamos soluciones de software, nube y ciberseguridad rentables, minimalistas e innovadoras.",
        "cta": {
          "start": "Contáctanos",
          "learn": "Más Info"
        },
        "stats": {
          "projects": "Proyectos Completados",
          "satisfaction": "Satisfacción del Cliente",
          "support": "Soporte Disponible"
        }
      },
      "tech": {
        "title": "Nuestra Pila Tecnológica",
        "description": "Utilizamos tecnologías de vanguardia para construir soluciones modernas, escalables y confiables"
      },
      "about": {
        "title": "Sobre Nosotros",
        "description": "Con más de 10 años en el campo del software e infraestructura, nos enfocamos en entregar soluciones tecnológicas rentables, minimalistas e innovadoras manteniendo la transparencia y el soporte de desarrollo de alta calidad.",
        "expertTeam": {
          "title": "Equipo Experto",
          "description": "Nuestros profesionales experimentados aportan un amplio conocimiento a cada proyecto."
        },
        "globalReach": {
          "title": "Alcance Global",
          "description": "Fuerte presencia en mercados de EE.UU. y América Latina."
        },
        "quality": {
          "title": "Calidad Asegurada",
          "description": "Comprometidos con la entrega de soluciones de alta calidad."
        }
      },
      "services": {
        "title": "Nuestros Servicios",
        "description": "Soluciones integrales adaptadas a sus necesidades",
        "sections": {
          "software": {
            "title": "Desarrollo de Software",
            "description": "Construimos el futuro, de principio a fin. Nuestra experiencia full-stack ofrece:",
            "features": [
              "Bots que automatizan con precisión",
              "Aplicaciones back-end, front-end y móviles",
              "Integración de APIs para conectividad",
              "Pruebas QA y automatización",
              "Diseño UI & UX que convierte",
              "Arquitectura de software escalable"
            ]
          },
          "projectManagement": {
            "title": "Gestión de Proyectos",
            "description": "No solo gestionamos—aceleramos. Espere:",
            "features": [
              "Flujos de trabajo ágiles que se adaptan",
              "Gestión de riesgos que sobresale",
              "Asignación inteligente de recursos",
              "Planificación precisa de proyectos"
            ]
          },
          "infrastructure": {
            "title": "Infraestructura",
            "description": "Hemos dominado la columna vertebral de la tecnología - y se la traemos toda:",
            "features": [
              "Servicios en la nube en principales plataformas",
              "Infraestructura de nivel empresarial",
              "Migración perfecta a la nube",
              "DevOps que optimiza",
              "Ingeniería de Confiabilidad del Sitio",
              "Actualizaciones de sistemas heredados",
              "Respaldo y recuperación ante desastres"
            ]
          },
          "security": {
            "title": "Ciberseguridad",
            "description": "Su seguridad es nuestra obsesión:",
            "features": [
              "Monitoreo 24/7 de sistemas",
              "Detección avanzada de amenazas",
              "Mitigación proactiva de riesgos",
              "Gestión segura de identidad",
              "Respuesta rápida a incidentes",
              "Seguridad de nivel empresarial"
            ]
          },
          "outsourcing": {
            "title": "Tercerización y Ampliación de Equipos",
            "description": "¿Necesita talento elite? Lo tenemos:",
            "features": [
              "Desarrolladores de software expertos",
              "Ingenieros en la nube calificados",
              "Especialistas en seguridad",
              "Expertos en garantía de calidad",
              "Administradores de sistemas",
              "Soporte IT multinivel"
            ]
          }
        }
      },
      "faq": {
        "title": "Preguntas Frecuentes",
        "description": "Encuentra respuestas a preguntas comunes sobre nuestros servicios y procesos.",
        "items": [
          {
            "question": "¿Qué servicios ofrecen?",
            "answer": "Ofrecemos una amplia gama de servicios que incluyen desarrollo web, desarrollo de aplicaciones móviles, soluciones en la nube y consultoría en transformación digital. Nuestro equipo se especializa en crear soluciones personalizadas adaptadas a sus necesidades específicas."
          },
          {
            "question": "¿Cuánto tiempo toma un proyecto típico?",
            "answer": "Los tiempos del proyecto varían según la complejidad y el alcance. Un sitio web simple puede tomar de 4 a 6 semanas, mientras que las aplicaciones más complejas pueden tomar de 3 a 6 meses. Proporcionaremos un cronograma detallado durante nuestra consulta inicial."
          },
          {
            "question": "¿Proporcionan soporte continuo?",
            "answer": "Sí, ofrecemos varios paquetes de soporte y mantenimiento para asegurar que su solución continúe funcionando de manera óptima. Nuestro equipo está disponible para actualizaciones, corrección de errores y mejoras después del lanzamiento."
          },
          {
            "question": "¿Con qué tecnologías trabajan?",
            "answer": "Trabajamos con una amplia gama de tecnologías modernas incluyendo React, Node.js, Python, AWS y más. Elegimos la mejor pila tecnológica según los requisitos y objetivos específicos de su proyecto."
          },
          {
            "question": "¿Cómo manejan la comunicación del proyecto?",
            "answer": "Mantenemos una comunicación clara a través de reuniones regulares, informes de progreso y herramientas dedicadas de gestión de proyectos. Tendrá una línea directa con su equipo de proyecto y actualizaciones regulares sobre los hitos."
          }
        ]
      },
      "footer": {
        "slogan": "Creando soluciones innovadoras para los desafíos del mañana",
        "quickLinks": "Enlaces Rápidos",
        "aboutUs": "Nosotros",
        "services": "Servicios",
        "blog": "Blog",
        "privacyPolicy": "Política de Privacidad",
        "servicesSection": {
          "title": "Servicios",
          "webDev": "Desarrollo Web",
          "mobileApps": "Aplicaciones Móviles",
          "cloudSolutions": "Soluciones en la Nube",
          "consulting": "Consultoría"
        },
        "contactUs": {
          "title": "Contáctenos",
          "address": "300 Canal Street, Lawrence, MA 01840",
          "phone": "1 (978) 943-2457",
          "email": "contact@walkingfolks.com"
        },
        "copyright": "Todos los derechos reservados."
      },
      "contact": {
        "title": "Iniciemos una Conversación",
        "subtitle": "Contáctanos",
        "description": "¿Tienes un proyecto en mente o quieres saber más? Nos encantaría escucharte."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
