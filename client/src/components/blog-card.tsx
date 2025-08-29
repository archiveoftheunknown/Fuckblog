import { motion } from "framer-motion";
import { Link } from "wouter";
import type { BlogPost } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const { t, language } = useLanguage();
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (featured) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="glass-card rounded-2xl overflow-hidden blog-card cursor-pointer" data-testid={`featured-post-${post.id}`}>
              <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <motion.span 
                      className="glass-button px-6 py-2 rounded-lg text-sm font-medium inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {t("blog.readArticle")}
                    </motion.span>
                  </div>
              </div>
            </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Link href={`/blog/${post.slug}`}>
          <div className="glass-card rounded-2xl overflow-hidden blog-card cursor-pointer" data-testid={`blog-post-${post.id}`}>
            <div className="p-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <h4 className="text-xl font-bold mb-3 text-foreground">
                {post.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'ja' ? 'ja-JP' : language === 'es' ? 'es-ES' : language === 'id' ? 'id-ID' : 'en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
                  {t("blog.readMore")} →
                </span>
              </div>
            </div>
          </div>
      </Link>
    </motion.div>
  );
}

function getCategoryColor(category: string): string {
  const colors = {
    "Political Analysis": "bg-primary/20 text-primary",
    "Digital Democracy": "bg-chart-1/20 text-chart-1", 
    "Government Tech": "bg-chart-2/20 text-chart-2",
    "Investigation": "bg-chart-3/20 text-chart-3",
    "Media Analysis": "bg-chart-4/20 text-chart-4",
    "Data Science": "bg-chart-5/20 text-chart-5",
    "Digital Rights": "bg-primary/20 text-primary"
  };
  return colors[category as keyof typeof colors] || "bg-muted/20 text-muted-foreground";
}
