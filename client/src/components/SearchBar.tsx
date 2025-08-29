import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { blogPosts } from '@/data/blog-posts';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  
  const { query, setQuery, results } = useSearch({
    data: blogPosts,
    keys: ['title', 'excerpt', 'content', 'category', 'tags']
  });

  const handleResultClick = (postSlug: string) => {
    setLocation(`/blog/${postSlug}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <motion.input
          type="search"
          placeholder={t('blog.searchPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="search-input w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary pr-10"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          data-testid="input-search"
        />
        {query ? (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-clear-search"
          >
            <X className="w-5 h-5" />
          </button>
        ) : (
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        )}
      </div>

      {/* Search Results */}
      {isOpen && query && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 w-full glass-card rounded-xl border border-border max-h-96 overflow-y-auto z-50"
          data-testid="search-results"
        >
          {results.length > 0 ? (
            <div className="p-2">
              {results.slice(0, 5).map((post) => (
                <motion.button
                  key={post.id}
                  onClick={() => handleResultClick(post.slug)}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors duration-200"
                  whileHover={{ x: 4 }}
                  data-testid={`search-result-${post.id}`}
                >
                  <h4 className="font-semibold text-foreground mb-1 text-sm">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-xs line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-primary text-xs font-medium">
                    {post.category}
                  </span>
                </motion.button>
              ))}
              {results.length > 5 && (
                <div className="px-3 py-2 text-center text-muted-foreground text-xs">
                  Dan {results.length - 5} hasil lainnya...
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground text-sm">
              Tidak ada artikel ditemukan untuk "{query}"
            </div>
          )}
        </motion.div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
