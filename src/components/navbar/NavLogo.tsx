
import { motion } from 'framer-motion';

const NavLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center relative"
    >
      <a href="/" className="flex items-center space-x-2 group">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="h-8 w-auto flex items-center justify-center"
        >
          <img
            src="/lovable-uploads/266bef71-18fa-4a25-8d1d-82bf75f31a67.png"
            alt="Walking Folks Logo"
            className="h-full w-auto object-contain hidden dark:block"
          />
          <img
            src="/lovable-uploads/8a6893d2-3114-4952-93a0-08db785193e3.png"
            alt="Walking Folks Logo"
            className="h-full w-auto object-contain dark:hidden"
          />
        </motion.div>
      </a>
    </motion.div>
  );
};

export default NavLogo;
