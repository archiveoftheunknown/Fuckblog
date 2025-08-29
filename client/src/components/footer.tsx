import { motion } from "framer-motion";
import { Link } from "wouter";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Latest Articles", href: "/blog" },
    { label: "Political Analysis", href: "/blog" },
    { label: "Digital Democracy", href: "/blog" },
    { label: "About Us", href: "/about" },
  ],
  categories: [
    { label: "Government Policy", href: "/blog" },
    { label: "Digital Rights", href: "/blog" },
    { label: "Media Analysis", href: "/blog" },
    { label: "Political Commentary", href: "/blog" },
    { label: "Investigation", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Copyright", href: "/copyright" },
    { label: "Editorial Guidelines", href: "/guidelines" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border" data-testid="footer">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="footer-brand"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Political Insights
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A personal archive of political analysis and commentary by Velo, exploring the complexities of modern governance and democracy.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            data-testid="footer-quick-links"
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid={`link-category-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          data-testid="footer-bottom"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Created by Velo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/standards">
              <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-editorial-standards">
                Editorial Standards
              </a>
            </Link>
            <Link href="/fact-checking">
              <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-fact-checking">
                Fact-Checking
              </a>
            </Link>
            <Link href="/archives">
              <a className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-archives">
                Archives
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
