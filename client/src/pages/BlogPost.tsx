import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [location] = useLocation();
  
  // Add language prefix for English routes
  const getLocalizedPath = (path: string) => {
    return language === 'en' ? `/en${path}` : path;
  };
  
  // Check if coming from archives
  const urlParams = new URLSearchParams(window.location.search);
  const fromArchives = urlParams.get('from') === 'archives';
  const backUrl = fromArchives ? getLocalizedPath('/archives') : getLocalizedPath('/blog');
  const backText = fromArchives ? t('blog.backToArchives') : t('blog.backToBlog');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  
  const post = getBlogPostBySlug(id || "") || blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 px-8" data-testid="blog-post-not-found">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t("blog.articleNotFound")}</h1>
          <p className="text-muted-foreground mb-8">{t("blog.articleNotFoundDesc")}</p>
          <Link href={backUrl}>
            <a>
              <motion.button
                className="glass-button px-6 py-3 rounded-xl font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-back-to-blog"
              >
                {backText}
              </motion.button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'ja' ? 'ja-JP' : language === 'es' ? 'es-ES' : language === 'id' ? 'id-ID' : 'en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const handleShare = async () => {
    try {
      // Always copy to clipboard first
      await navigator.clipboard.writeText(window.location.href);
      
      // Show toast notification
      toast({
        title: t("blog.linkCopied"),
        description: t("blog.linkCopiedDesc"),
        duration: 3000,
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      // Try fallback method
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: t("blog.linkCopied"),
        description: t("blog.linkCopiedDesc"),
        duration: 3000,
      });
    }
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Extract headings from markdown content for table of contents
  const tableOfContents = useMemo(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const headings: { level: number; text: string; id: string }[] = [];
    let match;
    
    const content = language === 'en' && post.content_en ? post.content_en : post.content;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ level, text, id });
    }
    
    return headings;
  }, [post.content, post.content_en, language]);

  // Scroll to heading when clicking on TOC item
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 overflow-x-hidden" data-testid="page-blog-post">
      <div className="container mx-auto max-w-7xl">
        {/* Navigation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={backUrl}>
            <a>
              <motion.button
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ x: -4 }}
                data-testid="button-back-to-blog"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{backText}</span>
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
            {language === 'en' && post.title_en ? post.title_en : post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === 'en' && post.excerpt_en ? post.excerpt_en : post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="w-5 h-5" />
              <span>{formattedDate}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} {t("blog.minRead")}</span>
            </div>
            
            <motion.button
              onClick={handleShare}
              className="flex items-center space-x-1 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-share-article"
            >
              <Share2 className="w-5 h-5" />
              <span>{t("blog.share")}</span>
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
          <div className="lg:col-span-3 overflow-x-hidden">
            <MarkdownRenderer content={language === 'en' && post.content_en ? post.content_en : post.content} className="max-w-full" />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">{t("blog.tags")}</h3>
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
              {tableOfContents.length > 0 && (
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="font-semibold mb-6 text-lg text-foreground flex items-center">
                    <BookOpen className="w-5 h-5 mr-3" />
                    {t("blog.tableOfContents")}
                  </h3>
                  <div className="space-y-4">
                    {tableOfContents.map((heading, index) => (
                      <motion.div
                        key={index}
                        className={`text-muted-foreground hover:text-primary cursor-pointer transition-colors py-1 select-none ${
                          heading.level === 1 ? 'font-semibold text-base' : heading.level === 2 ? 'ml-4 text-sm' : 'ml-8 text-sm'
                        }`}
                        onClick={() => scrollToHeading(heading.id)}
                        whileHover={{ x: 4 }}
                        data-testid={`toc-${heading.id}`}
                        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
                      >
                        {heading.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="font-semibold mb-6 text-lg text-foreground">{t("blog.relatedArticles")}</h3>
                  <div className="space-y-5">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} href={getLocalizedPath(`/blog/${relatedPost.slug}`)}>
                        <a className="block" data-testid={`link-related-${relatedPost.id}`}>
                          <div className="cursor-pointer group">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {language === 'en' && relatedPost.title_en ? relatedPost.title_en : relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(relatedPost.publishedAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'ja' ? 'ja-JP' : language === 'es' ? 'es-ES' : language === 'id' ? 'id-ID' : 'en-US', { 
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
