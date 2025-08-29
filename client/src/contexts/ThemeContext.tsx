import { createContext, useContext, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as Theme) || "dark";
  });
  
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (event: React.MouseEvent) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    setRipplePosition({ x, y });
    setIsTransitioning(true);
    
    // Start the theme change slightly after the animation begins
    setTimeout(() => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, 300);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      
      {/* Ripple effect overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            ref={rippleRef}
            className="fixed inset-0 pointer-events-none z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`absolute rounded-full ${
                theme === "dark" 
                  ? "bg-gradient-radial from-white/30 via-white/20 to-transparent" 
                  : "bg-gradient-radial from-black/30 via-black/20 to-transparent"
              }`}
              initial={{ 
                width: 0, 
                height: 0,
                x: ripplePosition.x,
                y: ripplePosition.y,
                translateX: "-50%",
                translateY: "-50%"
              }}
              animate={{ 
                width: "300vmax",
                height: "300vmax",
                x: ripplePosition.x,
                y: ripplePosition.y,
                translateX: "-50%",
                translateY: "-50%"
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}