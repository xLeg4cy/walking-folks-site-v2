
import { motion } from 'framer-motion';
import LogoMark from '../svg/LogoMark';
import LogoLetters from '../svg/LogoLetters';


import { useNavigate, useLocation } from 'react-router-dom';

const NavLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Scroll to hero section if on home page
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL to remove any hash or query
      window.history.pushState({}, '', '/');
    } else {
      // Navigate to home if on other pages
      navigate('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center relative" // Added relative positioning to fix framer-motion warning
    >
      <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 group">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="h-8 w-auto flex items-center justify-center"
        >
          <LogoMark size={32} />
        </motion.div>

        <motion.span
          className="text-xl font-bold text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <LogoLetters />
        </motion.span>
      </a>
    </motion.div>
  );
};

export default NavLogo;
