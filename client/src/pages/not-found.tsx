import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, Home } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const [location] = useLocation();
  const { t, language } = useLanguage();
  
  // Determine the home path based on language
  const homePath = language === 'en' ? '/en' : '/';
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <motion.div 
        className="glass-card rounded-2xl p-8 max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          {t('notFound.title')}
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('notFound.message')}
        </p>
        
        <Link href={homePath}>
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            data-testid="button-back-home"
          >
            <Home className="mr-2 h-5 w-5" />
            {t('notFound.backHome')}
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}