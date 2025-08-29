import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { hoverScale } from '@/lib/animations';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  if (featured) {
    return (
      <motion.div
        className="glass-card rounded-2xl overflow-hidden blog-card mb-16"
        {...hoverScale}
        data-testid={`blog-card-featured-${post.id}`}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <motion.img
            src={post.image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"}
            alt={post.title}
            className="w-full h-80 md:h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="p-8">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </motion.div>
            
            <motion.h3
              className="text-3xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {post.title}
            </motion.h3>
            
            <motion.p
              className="text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {post.excerpt}
            </motion.p>
            
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-3 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {post.author.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              
              <Link href={`/blog/${post.slug}`} data-testid={`link-read-article-${post.id}`}>
                <motion.button
                  className="glass-button px-6 py-2 rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Baca Artikel
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden blog-card"
      {...hoverScale}
      data-testid={`blog-card-${post.id}`}
    >
      <motion.img
        src={post.image || getDefaultImage(post.category)}
        alt={post.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="p-6">
        <motion.span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(post.category)}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {post.category}
        </motion.span>
        
        <motion.h4
          className="text-xl font-bold mb-3 text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {post.title}
        </motion.h4>
        
        <motion.p
          className="text-muted-foreground text-sm mb-4 line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {post.excerpt}
        </motion.p>
        
        <motion.div
          className="flex items-center justify-between text-xs text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} menit baca</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-3 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">
                {post.author.avatar}
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">{post.author.name}</span>
          </div>
          
          <Link href={`/blog/${post.slug}`} data-testid={`link-read-more-${post.id}`}>
            <motion.button
              className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center space-x-1"
              whileHover={{ x: 4 }}
            >
              <span>Baca Selengkapnya</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

function getDefaultImage(category: string): string {
  const imageMap = {
    "Analisis Politik": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    "Demokrasi Digital": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    "Teknologi Pemerintahan": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    "Investigasi": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    "Analisis Media": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    "Ilmu Data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  };
  return imageMap[category as keyof typeof imageMap] || imageMap["Analisis Politik"];
}

function getCategoryColor(category: string): string {
  const colors = {
    "Analisis Politik": "bg-primary/20 text-primary",
    "Demokrasi Digital": "bg-chart-1/20 text-chart-1", 
    "Teknologi Pemerintahan": "bg-chart-2/20 text-chart-2",
    "Investigasi": "bg-chart-3/20 text-chart-3",
    "Analisis Media": "bg-chart-4/20 text-chart-4",
    "Ilmu Data": "bg-chart-5/20 text-chart-5"
  };
  return colors[category as keyof typeof colors] || "bg-muted/20 text-muted-foreground";
}
