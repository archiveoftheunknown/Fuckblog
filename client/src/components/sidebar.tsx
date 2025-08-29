import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Home, FileText, Info, Archive, MessageCircle, Search } from "lucide-react";
import SearchBar from "./search-bar";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "About", href: "/about", icon: Info },
  { name: "Archives", href: "/archives", icon: Archive },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 top-0 h-screen w-72 glass z-40 border-r border-border"
      data-testid="sidebar"
    >
      <div className="p-6">
        {/* Logo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Political Insights
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Modern Analysis & Commentary</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <SearchBar />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = location === item.href || (item.href === "/blog" && location.startsWith("/blog"));
            
            return (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link href={item.href}>
                  <a
                    className={`nav-link flex items-center px-4 py-3 rounded-xl text-foreground hover:bg-accent transition-all duration-300 ${
                      isActive ? "active bg-accent" : ""
                    }`}
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
    </motion.aside>
  );
}
