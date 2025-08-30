import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Home, FileText, Info, Archive, X, Sun, Moon } from "lucide-react";
import SearchBar from "./search-bar";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, language } = useLanguage();
  
  // Add language prefix for English routes
  const getLocalizedPath = (path: string) => {
    return language === 'en' ? `/en${path}` : path;
  };

  const navigation = [
    { name: t("nav.home"), href: getLocalizedPath("/"), icon: Home },
    { name: t("nav.blog"), href: getLocalizedPath("/blog"), icon: FileText },
    { name: t("nav.about"), href: getLocalizedPath("/about"), icon: Info },
    { name: t("nav.archives"), href: getLocalizedPath("/archives"), icon: Archive },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-0 top-0 h-screen w-72 glass z-40 border-r border-border overflow-y-auto"
            data-testid="sidebar"
          >
            <div className="p-6 min-h-screen flex flex-col">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 glass-button rounded-lg"
                data-testid="sidebar-close"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Logo */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
                  {(() => {
                    const path = location.startsWith('/en') ? location.slice(3) : location;
                    if (path === "/" || path === "") return t("nav.home");
                    if (path === "/blog" || path.startsWith("/blog/")) return t("nav.blog");
                    if (path === "/about") return t("nav.about");
                    if (path === "/archives") return t("nav.archives");
                    return t("brand.title");
                  })()}
                </h1>
                <p className="text-muted-foreground text-sm mt-1">{t("brand.tagline")}</p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <SearchBar />
              </motion.div>

              {/* Navigation Links */}
              <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 mb-8"
              >
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location === item.href || 
                    (item.href.endsWith("/blog") && location.includes("/blog"));
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.a
                          className={`nav-link flex items-center px-4 py-3 rounded-xl text-foreground hover:bg-accent transition-all duration-300 ${
                            isActive ? "active bg-accent" : ""
                          }`}
                          data-testid={`nav-link-${item.name.toLowerCase()}`}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            window.innerWidth < 1024 && onClose();
                          }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </motion.a>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Theme Toggle - positioned below nav but not at absolute bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-auto mb-20 lg:mb-0"
              >
                <motion.button
                  onClick={toggleTheme}
                  className="w-full glass-button px-4 py-3 rounded-xl flex items-center justify-center space-x-3 group overflow-hidden"
                  data-testid="theme-toggle"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    key={theme}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-chart-3" />
                    ) : (
                      <Moon className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                  <motion.span 
                    key={`text-${theme}`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="text-sm font-medium"
                  >
                    {theme === "dark" ? t("nav.lightMode") : t("nav.darkMode")}
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}