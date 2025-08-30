import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";

export default function Archives() {
  const { t } = useLanguage();

  return (
    <div className="py-20 px-8" data-testid="page-archives">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {t("nav.archives")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("archives.description")}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 6), duration: 0.5 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* No articles fallback */}
        {blogPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-muted-foreground">{t("home.noArticles")}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}