import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Link } from "wouter";
import { searchPosts } from "@/lib/search";
import type { BlogPost } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SearchBar() {
  const { t, language } = useLanguage();
  
  // Add language prefix for English routes
  const getLocalizedPath = (path: string) => {
    return language === 'en' ? `/en${path}` : path;
  };
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchPosts(query);
      setResults(searchResults.slice(0, 5)); // Limit to 5 results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setQuery("");
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="search-input w-full px-4 py-3 pl-11 pr-10 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          data-testid="search-input"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        {query && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="search-clear"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl border border-border max-h-96 overflow-y-auto z-50"
            data-testid="search-results"
          >
            <div className="p-2">
              {results.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={getLocalizedPath(`/blog/${post.slug}`)}
                    onClick={handleResultClick}
                    className="block p-3 rounded-lg hover:bg-accent transition-colors duration-200"
                    data-testid={`search-result-${post.id}`}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm mb-1 line-clamp-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="inline-block px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.readTime} {t("blog.minRead")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
