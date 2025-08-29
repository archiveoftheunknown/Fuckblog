import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t("newsletter.successTitle"),
      description: t("newsletter.successMessage"),
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-8" data-testid="newsletter-section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-2xl p-12 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
            data-testid="newsletter-title"
          >
            {t("newsletter.title")}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            data-testid="newsletter-description"
          >
            {t("newsletter.description")}
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
              data-testid="input-newsletter-email"
            />
            
            <motion.button
              type="submit"
              disabled={isLoading}
              className="glass-button px-8 py-3 rounded-xl font-semibold text-primary-foreground whitespace-nowrap disabled:opacity-50"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-newsletter-subscribe"
            >
              {isLoading ? t("newsletter.subscribing") : t("newsletter.subscribe")}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
