
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  navItems: { id: string; label: string }[];
  onSectionClick: (id: string) => void;
  onContactClick: () => void;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  activeSection,
  navItems,
  onSectionClick,
  onContactClick,
  onClose
}: MobileMenuProps) => {
  const { t } = useTranslation();

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    onClose();
  };

  const handleContactClick = () => {
    onContactClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  activeSection === item.id
                    ? "text-[#4338CA] dark:text-[#818CF8] bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 hover:text-[#4338CA] dark:text-gray-300 dark:hover:text-[#818CF8] hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={handleContactClick}
              className="w-full px-4 py-3 text-base font-medium rounded-lg text-white bg-[#4338CA] hover:bg-[#818CF8] dark:bg-[#818CF8] dark:hover:bg-[#4338CA] transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('nav.contact')}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
