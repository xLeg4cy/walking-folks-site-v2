
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
import { useEffect } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  // Reset any overflow styles that might have been set on the body
  useEffect(() => {
    const handleDropdownChange = () => {
      // Force scrollbar to be visible and ensure no layout shift
      document.documentElement.style.overflow = "scroll";
      document.body.style.paddingRight = "0";
      document.body.style.marginRight = "0";
    };
    
    return () => handleDropdownChange();
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    // Reset any overflow styles set by Radix
    document.documentElement.style.overflow = "scroll";
    document.body.style.paddingRight = "0";
    document.body.style.marginRight = "0";
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

      <DropdownMenuContent align="end" className="bg-background dropdown-open">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('es')}
          className="cursor-pointer"
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
