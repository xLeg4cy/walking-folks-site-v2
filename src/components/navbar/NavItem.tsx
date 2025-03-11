
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem = ({ id, label, isActive, onClick }: NavItemProps) => {
  return (
    <motion.button
      onClick={() => onClick(id)}
      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
        isActive
          ? "text-[#4338CA] dark:text-[#818CF8]"
          : "text-gray-600 hover:text-[#4338CA] dark:text-gray-300 dark:hover:text-[#818CF8]"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4338CA] dark:bg-[#818CF8]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default NavItem;
