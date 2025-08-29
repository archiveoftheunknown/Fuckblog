import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import BlogCard from "@/components/blog-card";
import { blogPosts, getFeaturedPosts, getRecentPosts } from "@/data/blog-posts";

export default function Home() {
  const featuredPost = getFeaturedPosts()[0];
  const recentPosts = getRecentPosts(6).filter(post => !post.featured);

  return (
    <div data-testid="page-home">
      <HeroSection />
      
      {/* Featured Articles Section */}
      <section className="py-20 px-8" data-testid="featured-articles-section">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Featured Analysis
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              In-depth political commentary and analysis from our expert contributors
            </p>
          </motion.div>

          {/* Main Featured Article */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <BlogCard post={featuredPost} featured={true} />
            </motion.div>
          )}

          {/* Article Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-testid="recent-articles-grid"
          >
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
