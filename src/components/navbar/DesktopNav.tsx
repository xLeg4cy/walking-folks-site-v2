
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

interface DesktopNavProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  onContactClick: () => void;
}

const DesktopNav = ({
  navItems,
  activeSection,
  onSectionClick,
  onContactClick
}: DesktopNavProps) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center space-x-1"
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={onSectionClick}
          />
        ))}
      </motion.div>

      <motion.button
        onClick={onContactClick}
        className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#4338CA] hover:bg-[#818CF8] dark:bg-[#818CF8] dark:hover:bg-[#4338CA] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('nav.contact')}
      </motion.button>
    </div>
  );
};

export default DesktopNav;
