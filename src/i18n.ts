
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
          "start": "Get Started",
          "learn": "Learn More"
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
          "start": "Empezar",
          "learn": "Más Info"
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
