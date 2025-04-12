
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { cn } from '@/lib/utils';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileMenu from './navbar/MobileMenu';
import MobileMenuToggle from './navbar/MobileMenuToggle';

interface NavProps {
  onContactClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

const Navbar = ({ onContactClick, onSectionClick }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'partners'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'partners', label: t('nav.partners') },
  ];

  const scrollToSection = (id: string) => {
    onSectionClick(id);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-lg" : ""
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left side - Logo */}
          <NavLogo />

          {/* Center - Navigation Items (desktop only) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <DesktopNav 
              navItems={navItems}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>

          {/* Right side - Theme toggle, language toggle, contact button, and mobile menu */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <ThemeToggle />

              <LanguageToggle />

              <motion.button
                onClick={onContactClick}
                className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#4338CA] hover:bg-[#818CF8] dark:bg-[#818CF8] dark:hover:bg-[#4338CA] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.contact')}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <MobileMenuToggle 
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          navItems={navItems}
          onSectionClick={scrollToSection}
          onContactClick={onContactClick}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </motion.header>
  );
};

export default Navbar;
