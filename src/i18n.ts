
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
      "stats": {
        "projects": "Projects Delivered",
        "satisfaction": "Client Satisfaction",
        "support": "Support Available"
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
      "stats": {
        "projects": "Proyectos Entregados",
        "satisfaction": "Satisfacción del Cliente",
        "support": "Soporte Disponible"
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
