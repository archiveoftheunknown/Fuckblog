import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Lock } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  const { t, language } = useLanguage();
  
  // Add language prefix for English routes
  const getLocalizedPath = (path: string) => {
    return language === 'en' ? `/en${path}` : path;
  };
  
  const footerLinks = {
    quickLinks: [
      { label: t("footer.home"), href: getLocalizedPath("/") },
      { label: t("footer.latestArticles"), href: getLocalizedPath("/blog") },
      { label: t("categories.politicalAnalysis"), href: getLocalizedPath("/blog") },
      { label: t("categories.digitalDemocracy"), href: getLocalizedPath("/blog") },
    ],
    categories: [
      { label: t("categories.governmentPolicy"), href: getLocalizedPath("/blog") },
      { label: t("categories.digitalRights"), href: getLocalizedPath("/blog") },
      { label: t("categories.mediaAnalysis"), href: getLocalizedPath("/blog") },
      { label: t("categories.politicalCommentary"), href: getLocalizedPath("/blog") },
      { label: t("categories.investigation"), href: getLocalizedPath("/blog") },
    ],
    legal: [
      { label: t("footer.privacyPolicy"), href: getLocalizedPath("/privacy") },
      { label: t("footer.termsOfService"), href: getLocalizedPath("/terms") },
      { label: t("footer.copyright"), href: getLocalizedPath("/copyright") },
    ],
  };
  return (
    <footer className="bg-[hsl(20,14%,8%)] backdrop-blur-sm border-t border-[hsl(25,20%,12%)]" data-testid="footer">
      <div className="container mx-auto px-8 py-12">
        {/* Brand Section - Full width on all sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="footer-brand"
          className="mb-8"
        >
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[hsl(9,75%,61%)] to-[hsl(42,92%,56%)] bg-clip-text text-transparent">
            {t("brand.title")}
          </h3>
          <p className="text-[hsl(25,5%,60%)] text-sm leading-relaxed max-w-2xl">
            {t("footer.description")}
          </p>
        </motion.div>

        {/* Links Section - 3 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            data-testid="footer-quick-links"
          >
            <h4 className="font-semibold text-[hsl(0,0%,95%)] mb-3 md:mb-4 text-sm md:text-base">{t("footer.quickLinks")}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-[hsl(25,5%,60%)] hover:text-[hsl(9,75%,61%)] transition-colors duration-300" 
                       onClick={scrollToTop}
                       data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="footer-categories"
          >
            <h4 className="font-semibold text-[hsl(0,0%,95%)] mb-3 md:mb-4 text-sm md:text-base">{t("footer.categories")}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-[hsl(25,5%,60%)] hover:text-[hsl(9,75%,61%)] transition-colors duration-300" 
                       onClick={scrollToTop}
                       data-testid={`link-category-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-testid="footer-legal"
          >
            <h4 className="font-semibold text-[hsl(0,0%,95%)] mb-3 md:mb-4 text-sm md:text-base">{t("footer.legal")}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-[hsl(25,5%,60%)] hover:text-[hsl(9,75%,61%)] transition-colors duration-300" 
                       onClick={scrollToTop}
                       data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-[hsl(25,20%,12%)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          data-testid="footer-bottom"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-[hsl(25,5%,60%)] text-sm">
              © 2025 velocitysbeta.com {t("footer.allRightsReserved")}
            </p>
            {/* Security Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-[hsl(25,5%,60%)]">
                <Shield className="w-4 h-4 text-[hsl(120,40%,50%)]" />
                <span className="text-xs">{t("footer.gdprCompliant")}</span>
              </div>
              <div className="flex items-center space-x-1 text-[hsl(25,5%,60%)]">
                <Lock className="w-4 h-4 text-[hsl(120,40%,50%)]" />
                <span className="text-xs">{t("footer.sslSecured")}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
            <Link href={getLocalizedPath("/about")}>
              <a className="text-[hsl(25,5%,60%)] hover:text-[hsl(9,75%,61%)] transition-colors duration-300" 
                 onClick={scrollToTop}
                 data-testid="link-about">
                {t("footer.about")}
              </a>
            </Link>
            <Link href={getLocalizedPath("/archives")}>
              <a className="text-[hsl(25,5%,60%)] hover:text-[hsl(9,75%,61%)] transition-colors duration-300" 
                 onClick={scrollToTop}
                 data-testid="link-archives">
                {t("footer.archives")}
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
