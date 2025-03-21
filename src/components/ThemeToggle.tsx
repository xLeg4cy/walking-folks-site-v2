
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
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  
  // Reset any overflow styles that might have been set on the body
  useEffect(() => {
    const handleDropdownChange = () => {
      // Force scrollbar to be visible and ensure no layout shift
      document.documentElement.style.overflow = "scroll";
      document.body.style.paddingRight = "0";
      document.body.style.marginRight = "0";
    };
    
    // Apply theme to the document element
    const onThemeChange = () => {
      const isDark = theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Initialize theme
    onThemeChange();
    
    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onThemeChange);
    
    return () => {
      handleDropdownChange();
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onThemeChange);
    };
  }, [theme]);

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
      <DropdownMenuContent align="end" className="bg-background dropdown-open">
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
    </DropdownMenu>
  );
}
