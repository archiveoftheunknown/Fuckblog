import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import idTranslations from "../translations/id.json";
import enTranslations from "../translations/en.json";
import zhTranslations from "../translations/zh.json";
import esTranslations from "../translations/es.json";
import jaTranslations from "../translations/ja.json";

export type Language = "id" | "en" | "zh" | "es" | "ja";

const translations = {
  id: idTranslations,
  en: enTranslations,
  zh: zhTranslations,
  es: esTranslations,
  ja: jaTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [location, setLocation] = useLocation();
  
  // Determine language based on URL path
  const getLanguageFromPath = () => {
    if (location.startsWith('/en')) {
      return 'en';
    }
    return 'id'; // Indonesian is default
  };
  
  const [language, setLanguageState] = useState<Language>(getLanguageFromPath());

  useEffect(() => {
    const pathLang = getLanguageFromPath();
    if (pathLang !== language) {
      setLanguageState(pathLang);
    }
    document.documentElement.lang = pathLang;
  }, [location]);

  const setLanguage = (lang: Language) => {
    // Navigate to the appropriate language route
    if (lang === 'en') {
      // Add /en prefix to current path
      const currentPath = location.startsWith('/en') ? location.slice(3) : location;
      setLocation(`/en${currentPath}`);
    } else if (lang === 'id') {
      // Remove /en prefix if present
      const currentPath = location.startsWith('/en') ? location.slice(3) : location;
      setLocation(currentPath || '/');
    }
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};