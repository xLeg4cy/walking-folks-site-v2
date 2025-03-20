
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant="ghost" size="icon" className="relative w-10 h-10 text-foreground dark:text-white hover:bg-[#818CF8]/10">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <div ref={dropdownRef}>
        <DropdownMenuContent align="end" className="bg-background dropdown-open" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DropdownMenuItem 
            onClick={() => setTheme("light")}
            className={`${theme === "light" ? "bg-accent" : ""} cursor-pointer`}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme("dark")}
            className={`${theme === "dark" ? "bg-accent" : ""} cursor-pointer`}
          >
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
