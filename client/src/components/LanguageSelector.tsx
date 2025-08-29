import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  isSidebarOpen?: boolean;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function LanguageSelector({ isSidebarOpen = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Language Button with Sidebar-aware Animation */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.button
            className="fixed bottom-6 left-6 z-50 w-12 h-12 glass-button rounded-full flex items-center justify-center group"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2
              }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              x: -20,
              rotate: -180,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.3
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-testid="language-selector-button"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="absolute -bottom-1 -right-1 text-xs font-bold text-primary uppercase">
                {currentLang.code}
              </span>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Language Options */}
      <AnimatePresence>
        {isOpen && !isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 left-6 z-50 glass-card rounded-xl overflow-hidden"
            data-testid="language-options"
          >
            <div className="p-2">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    language === lang.code 
                      ? "bg-primary/20 text-primary" 
                      : "hover:bg-accent text-foreground"
                  }`}
                  whileHover={{ x: 4 }}
                  data-testid={`language-option-${lang.code}`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{lang.label}</div>
                    <div className="text-xs text-muted-foreground uppercase">{lang.code}</div>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}