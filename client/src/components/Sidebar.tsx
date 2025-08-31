import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { 
  Home, 
  FileText, 
  Info, 
  Archive, 
  MessageCircle, 
  Search 
} from 'lucide-react';
import SearchBar from './SearchBar';
import { slideInLeft } from '@/lib/animations';
import { useLanguage } from '@/contexts/LanguageContext';

const navigationItems = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/about', label: 'Tentang', icon: Info },
  { href: '/archives', label: 'Arsip', icon: Archive },
  { href: '/contact', label: 'Kontak', icon: MessageCircle },
];

export default function Sidebar() {
  const [location] = useLocation();
  const { t } = useLanguage();

  return (
    <motion.aside 
      className="fixed left-0 top-0 h-screen w-72 glass z-40 border-r border-border"
      {...slideInLeft}
      data-testid="sidebar"
    >
      <div className="p-6">
        {/* Logo */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link href="/" data-testid="link-home">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent cursor-pointer">
              {t('hero.title')}
            </h1>
          </Link>
          <p className="text-muted-foreground text-sm mt-1">{t('hero.subtitle')}</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SearchBar />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            // Only highlight Blog for blog posts, not for other pages
            let isActive = false;
            if (location === item.href) {
              // Exact match
              isActive = true;
            } else if (item.href === '/blog' && location.startsWith('/blog/')) {
              // Blog item should be active for blog posts (note the trailing slash)
              isActive = true;
            }
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Link href={item.href} data-testid={`link-${item.label.toLowerCase()}`}>
                  <div className={`nav-link flex items-center px-4 py-3 rounded-xl text-foreground hover:bg-accent transition-all duration-300 cursor-pointer ${
                    isActive ? 'active bg-accent' : ''
                  }`}>
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
    </motion.aside>
  );
}
