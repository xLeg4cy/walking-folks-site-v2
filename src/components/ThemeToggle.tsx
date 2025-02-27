
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

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    const scrollPos = window.scrollY;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    
    // Prevent scroll jump
    root.style.overflow = 'hidden';
    setTheme(newTheme);
    
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
          <Button variant="ghost" size="icon" className="relative w-10 h-10 text-foreground dark:text-white hover:bg-[#818CF8]/10">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => handleThemeChange("light")}
          className={`${theme === "light" ? "bg-accent" : ""} cursor-pointer`}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleThemeChange("dark")}
          className={`${theme === "dark" ? "bg-accent" : ""} cursor-pointer`}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
