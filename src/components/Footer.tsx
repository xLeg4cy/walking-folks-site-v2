import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { GoMail } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "19789432457";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return <motion.footer
    ref={footerRef}
    style={{ y, opacity }}
    className="bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-200 mt-20 mb-8 relative"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-auto flex items-center justify-center">
              <img
                src="/lovable-uploads/1d6e29f4-c548-4f24-8ec4-75d830188ac3.png"
                alt="Walking Folks"
                className="h-full w-auto object-contain mix-blend-normal"
                width="32"
                height="32"
              />
            </div>
            <span className="ml-3 font-bold text-xl text-gray-900 dark:text-white">Walking Folks</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('footer.slogan')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">{t('footer.quickLinks')}</h3>
          <ul className="space-y-4">
            <li>
              <a href="#about" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                {t('footer.aboutUs')}
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                {t('footer.services')}
              </a>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors flex items-center">
                {t('footer.privacyPolicy')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">{t('footer.servicesSection.title')}</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">{t('footer.servicesSection.webDev')}</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">{t('footer.servicesSection.mobileApps')}</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">{t('footer.servicesSection.cloudSolutions')}</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors">{t('footer.servicesSection.consulting')}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-white">{t('footer.contactUs.title')}</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <FiPhone className="w-5 h-5 mr-3" />
              <button
                onClick={handleWhatsAppClick}
                className="text-left hover:text-brand-purple-medium dark:hover:text-brand-purple-light transition-colors"
              >
                {t('footer.contactUs.phone')}
              </button>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <GoMail className="w-5 h-5 mr-3" />
              <a className="text-gray-600 hover:text-brand-purple-medium dark:text-gray-400 dark:hover:text-brand-purple-light transition-colors" href={`mailto:${t('footer.contactUs.email')}`}>
                <span>{t('footer.contactUs.email')}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Walking Folks. {t('footer.copyright')}</p>
      </div>
    </div>
  </motion.footer>;
};

export default Footer;
