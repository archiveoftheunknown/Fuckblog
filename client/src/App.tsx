import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import { Menu } from "lucide-react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Mobile menu button - only show when sidebar is closed */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 glass-button rounded-lg lg:hidden"
              data-testid="menu-toggle-mobile"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          {/* Desktop menu button - only show when sidebar is closed */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 glass-button rounded-lg hidden lg:block"
              data-testid="menu-toggle-desktop"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className={`min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:ml-72' : 'ml-0'}`}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:id" component={BlogPost} />
              <Route path="/about" component={About} />
              <Route path="/archives" component={Blog} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </main>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
