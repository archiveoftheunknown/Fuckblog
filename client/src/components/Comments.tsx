import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MessageSquare, User, ChevronUp, ChevronDown, Calendar, Link2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";
import type { Comment } from "@shared/schema";

interface CommentsProps {
  postSlug: string;
  translations: {
    title: string;
    noComments: string;
    displayName: string;
    displayNamePlaceholder: string;
    comment: string;
    commentPlaceholder: string;
    submit: string;
    submitting: string;
    anonymous: string;
    commentSuccess: string;
    commentError: string;
    loadMore: string;
    remaining: string;
  };
  language: string;
}

export function Comments({ postSlug, translations, language }: CommentsProps) {
  const [content, setContent] = useState("");
  const [visibleComments, setVisibleComments] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [pressedButtons, setPressedButtons] = useState<{ [key: string]: 'up' | 'down' | null }>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();
  
  // Detect dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const { data: comments = [], isLoading } = useQuery<Comment[]>({
    queryKey: ["/api/comments", postSlug],
    queryFn: async () => {
      const response = await fetch(`/api/comments/${postSlug}`);
      if (!response.ok) throw new Error("Failed to fetch comments");
      return response.json();
    },
  });

  const createCommentMutation = useMutation({
    mutationFn: async (data: { postSlug: string; displayName?: string; content: string }) => {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to post comment");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/comments", postSlug] });
      setContent("");
      setIsExpanded(false);
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
      toast({
        title: translations.commentSuccess,
        duration: 3000,
      });
    },
    onError: () => {
      toast({
        title: translations.commentError,
        variant: "destructive",
        duration: 3000,
      });
    },
  });

  const handleSubmit = () => {
    if (!content.trim()) return;

    createCommentMutation.mutate({
      postSlug,
      displayName: "Anonymous",
      content: content.trim(),
    });
  };

  useEffect(() => {
    if (content.trim()) {
      setIsExpanded(true);
    }
  }, [content]);

  const formatDate = (date: string | Date) => {
    const locale = language === "id" ? idLocale : enUS;
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return formatDistanceToNow(dateObj, { addSuffix: true, locale });
  };

  return (
    <div className="mt-12 space-y-6 px-1" data-testid="comments-section">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {translations.title}
      </h2>

      {/* New Comment Form */}
      <motion.div 
        className="flex items-start space-x-4 mb-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className={`glass-card rounded-xl transition-all duration-300 ${isExpanded ? 'ring-2 ring-orange-500/50' : ''}`}>
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => !content.trim() && setIsExpanded(false)}
              placeholder={translations.commentPlaceholder}
              className={`w-full p-4 bg-transparent border-0 focus:ring-0 resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300 ${
                isExpanded ? 'min-h-[100px]' : 'min-h-[60px]'
              }`}
              style={{ color: isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)' }}
              data-testid="input-comment"
            />
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200/20 dark:border-gray-700/20 overflow-visible"
                >
                  <div className="p-3 pr-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                      <button 
                        type="button"
                        className="hover:text-orange-500 transition-colors"
                        title="Add date"
                      >
                        <Calendar className="w-5 h-5" />
                      </button>
                      <button 
                        type="button"
                        className="hover:text-orange-500 transition-colors"
                        title="Add link"
                      >
                        <Link2 className="w-5 h-5" />
                      </button>
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={createCommentMutation.isPending || !content.trim()}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                      data-testid="button-submit-comment"
                    >
                      {createCommentMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {translations.submitting}
                        </>
                      ) : (
                        translations.submit
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          </div>
        ) : comments.length === 0 ? (
          <motion.div 
            className="glass-card rounded-xl p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              {translations.noComments}
            </p>
          </motion.div>
        ) : (
          <>
            <AnimatePresence>
              {comments.slice(0, visibleComments).map((comment, index) => (
                <motion.div
                  key={comment.id}
                  className="flex items-start space-x-4"
                  data-testid={`comment-${comment.id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="glass-card rounded-xl p-4">
                      <p className="font-semibold">
                        {comment.displayName || translations.anonymous}
                      </p>
                      <p className="mt-1">
                        {comment.content}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm mt-2 px-2">
                      <button 
                        className="flex items-center space-x-1 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        onClick={() => setPressedButtons({ ...pressedButtons, [comment.id]: pressedButtons[comment.id] === 'up' ? null : 'up' })}
                        style={{ 
                          color: pressedButtons[comment.id] === 'up' ? 'hsl(9, 75%, 61%)' : (isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)'),
                          opacity: pressedButtons[comment.id] === 'up' ? 1 : 0.7
                        }}
                        onMouseEnter={(e) => {
                          if (pressedButtons[comment.id] !== 'up') {
                            e.currentTarget.style.color = 'hsl(9, 75%, 61%)';
                            e.currentTarget.style.opacity = '1';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (pressedButtons[comment.id] !== 'up') {
                            e.currentTarget.style.color = isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)';
                            e.currentTarget.style.opacity = '0.7';
                          }
                        }}
                      >
                        <ChevronUp className="w-4 h-4" />
                        <span>0</span>
                      </button>
                      <button 
                        className="transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        onClick={() => setPressedButtons({ ...pressedButtons, [comment.id]: pressedButtons[comment.id] === 'down' ? null : 'down' })}
                        style={{ 
                          color: pressedButtons[comment.id] === 'down' ? 'hsl(9, 75%, 61%)' : (isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)'),
                          opacity: pressedButtons[comment.id] === 'down' ? 1 : 0.7
                        }}
                        onMouseEnter={(e) => {
                          if (pressedButtons[comment.id] !== 'down') {
                            e.currentTarget.style.color = 'hsl(9, 75%, 61%)';
                            e.currentTarget.style.opacity = '1';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (pressedButtons[comment.id] !== 'down') {
                            e.currentTarget.style.color = isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)';
                            e.currentTarget.style.opacity = '0.7';
                          }
                        }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <span className="text-xs" style={{ color: isDarkMode ? '#eeebe2' : 'hsl(20, 14%, 45%)', opacity: 0.7 }}>• {formatDate(comment.createdAt)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Load More Button */}
            {comments.length > visibleComments && (
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => setVisibleComments(visibleComments + 5)}
                  className="bg-gray-200/70 dark:bg-gray-700/50 hover:bg-gray-300/70 dark:hover:bg-gray-600/50 text-gray-800 dark:text-gray-300 font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                  data-testid="button-load-more"
                >
                  {translations.loadMore}
                  <span className="ml-2 text-sm opacity-70">
                    ({comments.length - visibleComments})
                  </span>
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}