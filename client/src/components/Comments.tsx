import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MessageSquare, User } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";
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
  };
  language: string;
}

export function Comments({ postSlug, translations, language }: CommentsProps) {
  const [displayName, setDisplayName] = useState("");
  const [content, setContent] = useState("");
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {translations.title}
        </h2>
      </div>

      {/* Comment Form */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-orange-200 dark:border-gray-700">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-gray-700 dark:text-gray-300">
                {translations.displayName}
              </Label>
              <Input
                id="displayName"
                type="text"
                placeholder={translations.displayNamePlaceholder}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-white dark:bg-gray-900"
                data-testid="input-display-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment" className="text-gray-700 dark:text-gray-300">
                {translations.comment} *
              </Label>
              <Textarea
                id="comment"
                placeholder={translations.commentPlaceholder}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="min-h-[100px] bg-white dark:bg-gray-900"
                data-testid="input-comment"
              />
            </div>

            <Button
              type="submit"
              disabled={createCommentMutation.isPending || !content.trim()}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white"
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
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          </div>
        ) : comments.length === 0 ? (
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-orange-200 dark:border-gray-700">
            <CardContent className="py-8 text-center text-gray-500 dark:text-gray-400">
              {translations.noComments}
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card
              key={comment.id}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-orange-200 dark:border-gray-700"
              data-testid={`comment-${comment.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {comment.displayName || translations.anonymous}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    • {formatDate(comment.createdAt)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {comment.content}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}