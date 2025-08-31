import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MessageSquare, User } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";
import { motion } from "framer-motion";
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
  const [displayName, setDisplayName] = useState("");
  const [content, setContent] = useState("");
  const [visibleComments, setVisibleComments] = useState(5); // Initially show 5 comments
  const { toast } = useToast();

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
      setDisplayName("");
      setContent("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    createCommentMutation.mutate({
      postSlug,
      displayName: displayName.trim() || undefined,
      content: content.trim(),
    });
  };

  const formatDate = (date: string | Date) => {
    const locale = language === "id" ? idLocale : enUS;
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return format(dateObj, "d MMMM yyyy, HH:mm", { locale });
  };

  return (
    <div className="mt-12 space-y-6" data-testid="comments-section">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-orange-500" />
        <h2 className="text-2xl font-bold dark:text-gray-100 text-[#eeebe2]">
          {translations.title}
        </h2>
      </div>
      {/* Comment Form */}
      <motion.div 
        className="glass-card rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-gray-900 dark:text-gray-100">
                {translations.displayName}
              </Label>
              <Input
                id="displayName"
                type="text"
                placeholder={translations.displayNamePlaceholder}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-transparent border-orange-200/30 dark:border-gray-600/30 focus:border-orange-400 dark:focus:border-orange-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                data-testid="input-display-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment" className="text-gray-900 dark:text-gray-100">
                {translations.comment} *
              </Label>
              <Textarea
                id="comment"
                placeholder={translations.commentPlaceholder}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="min-h-[100px] bg-transparent border-orange-200/30 dark:border-gray-600/30 focus:border-orange-400 dark:focus:border-orange-500 text-gray-900 dark:text-gray-100"
                data-testid="input-comment"
              />
            </div>

            <Button
              type="submit"
              disabled={createCommentMutation.isPending || !content.trim()}
              className="w-full sm:w-auto glass-button px-6 py-2 rounded-lg text-white font-medium"
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
          </form>
        </div>
      </motion.div>
      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          </div>
        ) : comments.length === 0 ? (
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="py-8 text-center text-gray-600 dark:text-gray-300 px-6">
              {translations.noComments}
            </div>
          </div>
        ) : (
          <>
            {comments.slice(0, visibleComments).map((comment, index) => (
              <motion.div
                key={comment.id}
                className="glass-card rounded-2xl overflow-hidden"
                data-testid={`comment-${comment.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6 pb-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold dark:text-gray-100 text-[#eeebe2]">
                      {comment.displayName || translations.anonymous}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      • {formatDate(comment.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Load More Button */}
            {comments.length > visibleComments && (
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => setVisibleComments(visibleComments + 5)}
                  variant="outline"
                  className="glass-button px-6 py-2 rounded-lg text-orange-600 dark:text-orange-400 font-medium"
                  data-testid="button-load-more"
                >
                  {translations.loadMore}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    ({comments.length - visibleComments} {translations.remaining})
                  </span>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}