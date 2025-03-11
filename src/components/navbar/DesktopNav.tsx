
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

interface DesktopNavProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const DesktopNav = ({
  navItems,
  activeSection,
  onSectionClick,
}: DesktopNavProps) => {
  return (
    <div className="flex items-center justify-center">
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
    </div>
  );
};

export default DesktopNav;
