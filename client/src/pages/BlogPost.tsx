import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { useToast } from "@/hooks/use-toast";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const post = getBlogPostBySlug(id || "") || blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 px-8" data-testid="blog-post-not-found">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a>
              <motion.button
                className="glass-button px-6 py-3 rounded-xl font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-back-to-blog"
              >
                Back to Blog
              </motion.button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } catch (error) {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
    }
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="py-20 px-8" data-testid="page-blog-post">
      <div className="container mx-auto">
        {/* Navigation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog">
            <a>
              <motion.button
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ x: -4 }}
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog</span>
              </motion.button>
            </a>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              post.category === 'Digital Democracy' ? 'bg-chart-1/20 text-chart-1' :
              post.category === 'Government Tech' ? 'bg-chart-2/20 text-chart-2' :
              post.category === 'Investigation' ? 'bg-chart-3/20 text-chart-3' :
              post.category === 'Media Analysis' ? 'bg-chart-4/20 text-chart-4' :
              post.category === 'Data Science' ? 'bg-chart-5/20 text-chart-5' :
              'bg-primary/20 text-primary'
            }`}>
              {post.category}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="w-5 h-5" />
              <span>{formattedDate}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min read</span>
            </div>
            
            <motion.button
              onClick={handleShare}
              className="flex items-center space-x-1 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-share-article"
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </motion.button>
          </div>
        </motion.div>


        {/* Article Content */}
        <motion.div
          className="grid lg:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4 text-foreground flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Table of Contents
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Genesis Kontroversi Digital
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Investigasi Digital
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Teater Politik
                  </div>
                  <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Dampak dan Masa Depan
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-4 text-foreground">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <a className="block" data-testid={`link-related-${relatedPost.id}`}>
                          <div className="cursor-pointer group">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
