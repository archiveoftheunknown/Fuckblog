import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import LanguageSelector from "@/components/LanguageSelector";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Copyright from "@/pages/Copyright";
import Guidelines from "@/pages/Guidelines";
import NotFound from "@/pages/not-found";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
          {/* Mobile menu button - only show when sidebar is closed */}
          {!sidebarOpen && (
            <motion.button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 glass-button rounded-lg lg:hidden"
              data-testid="menu-toggle-mobile"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          )}

          {/* Desktop menu button - only show when sidebar is closed */}
          {!sidebarOpen && (
            <motion.button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 glass-button rounded-lg hidden lg:block"
              data-testid="menu-toggle-desktop"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          )}

          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className={`min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:ml-72' : 'ml-0'}`}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:id" component={BlogPost} />
              <Route path="/about" component={About} />
              <Route path="/archives" component={Blog} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/copyright" component={Copyright} />
              <Route path="/guidelines" component={Guidelines} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </main>
            <LanguageSelector isSidebarOpen={sidebarOpen} />
            <Toaster />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
