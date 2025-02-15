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
        "pricing": "Pricing",
        "contact": "Contact Us"
      },
      "hero": {
        "subtitle": "Transforming Ideas into Reality",
        "title": {
          "part1": "Innovative Solutions for",
          "part2": "Modern Businesses"
        },
        "description": "We deliver cutting-edge technology solutions with transparency, efficiency, and unmatched support",
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
        "webdev": {
          "title": "Web Development",
          "description": "Custom web applications and responsive designs"
        },
        "mobile": {
          "title": "Mobile Development",
          "description": "Native and cross-platform mobile solutions"
        },
        "cloud": {
          "title": "Cloud Solutions",
          "description": "Scalable and secure cloud infrastructure"
        }
      },
      "tech": {
        "title": "Our Technology Stack",
        "description": "We leverage cutting-edge technologies and frameworks to build robust, scalable, and efficient solutions for our clients. Our expertise spans across multiple technologies and platforms."
      },
      "team": {
        "title": "Meet Our Team",
        "description": "Expert professionals driving innovation and excellence"
      },
      "pricing": {
        "title": "Flexible Pricing Options",
        "description": "Choose the pricing model that best suits your project needs",
        "fixed": {
          "title": "Fixed Price",
          "description": "Perfect for projects with well-defined scope and requirements"
        },
        "milestone": {
          "title": "Milestone-based",
          "description": "Flexible pricing based on project milestones or time"
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
        "pricing": "Precios",
        "contact": "Contáctanos"
      },
      "hero": {
        "subtitle": "Transformando Ideas en Realidad",
        "title": {
          "part1": "Soluciones Innovadoras para",
          "part2": "Empresas Modernas"
        },
        "description": "Ofrecemos soluciones tecnológicas de vanguardia con transparencia, eficiencia y soporte inigualable",
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
        "webdev": {
          "title": "Desarrollo Web",
          "description": "Aplicaciones web personalizadas y diseños responsivos"
        },
        "mobile": {
          "title": "Desarrollo Móvil",
          "description": "Soluciones móviles nativas y multiplataforma"
        },
        "cloud": {
          "title": "Soluciones en la Nube",
          "description": "Infraestructura en la nube escalable y segura"
        }
      },
      "tech": {
        "title": "Nuestra Tecnología",
        "description": "Utilizamos tecnologías y frameworks de vanguardia para construir soluciones robustas, escalables y eficientes para nuestros clientes. Nuestra experiencia abarca múltiples tecnologías y plataformas."
      },
      "team": {
        "title": "Conoce a Nuestro Equipo",
        "description": "Profesionales expertos impulsando la innovación y la excelencia"
      },
      "pricing": {
        "title": "Opciones de Precios Flexibles",
        "description": "Elige el modelo de precios que mejor se adapte a las necesidades de tu proyecto",
        "fixed": {
          "title": "Precio Fijo",
          "description": "Perfecto para proyectos con alcance y requisitos bien definidos"
        },
        "milestone": {
          "title": "Basado en Hitos",
          "description": "Precios flexibles basados en hitos del proyecto o tiempo"
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
