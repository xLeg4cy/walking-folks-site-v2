
import { motion } from 'framer-motion';

const NavLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <a href="/" className="flex items-center space-x-2 group">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          src="/lovable-uploads/1d6e29f4-c548-4f24-8ec4-75d830188ac3.png"
          alt="Walking Folks Logo"
          className="h-8 w-auto rounded-md"
        />
        <motion.span 
          className="text-xl font-bold text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Walking Folks
        </motion.span>
      </a>
    </motion.div>
  );
};

export default NavLogo;
