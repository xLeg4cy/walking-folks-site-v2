
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    const scrollPos = window.scrollY;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    
    // Prevent scroll jump
    root.style.overflow = 'hidden';
    i18n.changeLanguage(lang);
    
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPos);
      root.style.overflow = prevOverflow;
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant="ghost" size="icon" className="relative w-10 h-10 hover:bg-[#818CF8]/10">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Switch language</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('es')}
          className="cursor-pointer"
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
