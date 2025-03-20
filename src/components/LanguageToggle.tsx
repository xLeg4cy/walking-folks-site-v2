
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
import { useEffect, useRef } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle scrollbar issues when dropdown opens/closes
  useEffect(() => {
    const preventScrollbarShift = () => {
      // Force scrollbar to always be visible
      document.documentElement.style.overflow = "scroll";
      document.documentElement.style.overflowY = "scroll";
      
      // Reset any modified styles that might cause layout shifts
      document.body.style.paddingRight = "0 !important";
      document.body.style.overflow = "";
      document.body.style.overflowY = "";
    };
    
    preventScrollbarShift();
    
    // Ensure cleanup on component unmount
    return () => {
      preventScrollbarShift();
    };
  }, []);

  // Handle click outside to ensure dropdown closes properly
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        preventBodyScroll(false);
      }
    };
    
    const preventBodyScroll = (prevent: boolean) => {
      if (prevent) {
        // When opening dropdown, ensure no layout shift
        document.documentElement.style.overflow = "scroll";
        document.documentElement.style.overflowY = "scroll";
        document.body.style.paddingRight = "0 !important";
      } else {
        // When closing dropdown, restore original state
        document.documentElement.style.overflow = "scroll";
        document.documentElement.style.overflowY = "scroll";
        document.body.style.paddingRight = "0 !important";
        document.body.style.overflow = "";
        document.body.style.overflowY = "";
      }
    };
    
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      preventBodyScroll(false);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    // Reset any overflow styles set by Radix
    document.documentElement.style.overflow = "scroll";
    document.documentElement.style.overflowY = "scroll";
    document.body.style.paddingRight = "0 !important";
    document.body.style.overflow = "";
    document.body.style.overflowY = "";
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
      <div ref={dropdownRef}>
        <DropdownMenuContent align="end" className="bg-background dropdown-open" onAutoFocusOutside={(e) => e.preventDefault()}>
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
      </div>
    </DropdownMenu>
  );
};

export default LanguageToggle;
