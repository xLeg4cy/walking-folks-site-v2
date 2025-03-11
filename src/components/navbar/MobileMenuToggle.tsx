
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle = ({ isOpen, onClick }: MobileMenuToggleProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#4338CA] dark:text-gray-300 dark:hover:text-[#818CF8]"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </motion.button>
  );
};

export default MobileMenuToggle;
