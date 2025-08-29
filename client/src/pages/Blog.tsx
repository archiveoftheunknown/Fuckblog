import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";
import { searchPosts } from "@/lib/search";
import { Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    t("categories.all"),
    t("categories.politicalAnalysis"),
    t("categories.digitalDemocracy"),
    t("categories.governmentTech"),
    t("categories.investigation"),
    t("categories.mediaAnalysis"),
    t("categories.dataScience")
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === t("categories.all") || post.category === selectedCategory)
    .filter(post => 
      searchQuery === "" || 
      searchPosts(searchQuery).some(searchedPost => searchedPost.id === post.id)
    );

  return (
    <div className="py-20 px-8" data-testid="page-blog">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {t("blog.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("blog.description")}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
              data-testid="input-blog-search"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-all duration-300 min-w-48"
              data-testid="select-category-filter"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            {t("blog.showing")} {filteredPosts.length} {t("blog.of")} {blogPosts.length} {t("blog.articles")}
            {selectedCategory !== t("categories.all") && ` ${t("blog.in")} ${selectedCategory}`}
            {searchQuery && ` ${t("blog.matching")} "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            data-testid="blog-posts-grid"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="no-results-message"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t("blog.noArticlesFound")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("blog.tryAdjusting")}
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory(t("categories.all"));
                setSearchQuery("");
              }}
              className="glass-button px-6 py-3 rounded-xl font-semibold text-primary-foreground"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-clear-filters"
            >
              {t("blog.clearFilters")}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
