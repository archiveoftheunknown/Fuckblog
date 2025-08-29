import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Latest Articles', href: '/blog' },
    { label: 'Political Analysis', href: '/blog' },
    { label: 'Digital Democracy', href: '/blog' },
    { label: 'About Us', href: '/about' },
  ],
  categories: [
    { label: 'Government Policy', href: '/blog' },
    { label: 'Digital Rights', href: '/blog' },
    { label: 'Media Analysis', href: '/blog' },
    { label: 'Political Commentary', href: '/blog' },
    { label: 'Investigation', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Copyright', href: '/copyright' },
    { label: 'Editorial Guidelines', href: '/guidelines' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border" data-testid="footer">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            {...fadeInUp}
            data-testid="footer-brand"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Political Insights
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Delivering in-depth political analysis and commentary to help you understand the complexities of modern governance and democracy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            data-testid="footer-quick-links"
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            data-testid="footer-categories"
          >
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} data-testid={`link-category-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            data-testid="footer-legal"
          >
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
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
          transition={{ delay: 0.4 }}
          data-testid="footer-bottom"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Political Insights. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/standards" data-testid="link-editorial-standards">
              <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                Editorial Standards
              </span>
            </Link>
            <Link href="/fact-checking" data-testid="link-fact-checking">
              <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                Fact-Checking
              </span>
            </Link>
            <Link href="/support" data-testid="link-support">
              <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                Support
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
