import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCommentSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Get comments for a specific blog post
  app.get("/api/comments/:postSlug", async (req, res) => {
    try {
      const { postSlug } = req.params;
      const comments = await storage.getCommentsByPost(postSlug);
      res.json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  // Create a new comment
  app.post("/api/comments", async (req, res) => {
    try {
      const validatedData = insertCommentSchema.parse(req.body);
      const comment = await storage.createComment(validatedData);
      res.json(comment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid comment data", details: error.errors });
      } else {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Failed to create comment" });
      }
    }
  });

  // Vote on a comment
  app.post("/api/comments/:commentId/vote", async (req: any, res) => {
    try {
      const { commentId } = req.params;
      const { voteType } = req.body; // 'up' or 'down'
      
      if (voteType !== 'up' && voteType !== 'down') {
        return res.status(400).json({ error: "Invalid vote type" });
      }
      
      // Initialize session votes if not exists
      if (!req.session.votes) {
        req.session.votes = {};
      }
      
      // Check if user already voted on this comment
      const previousVote = req.session.votes[commentId];
      
      // If user is trying to vote the same way again, reject
      if (previousVote === voteType) {
        return res.status(400).json({ error: "You have already voted on this comment" });
      }
      
      let updatedComment;
      
      // If user had a previous opposite vote, we need to handle the switch
      if (previousVote && previousVote !== voteType) {
        // User is switching vote (e.g., from upvote to downvote)
        // We need to remove the old vote AND add the new vote
        // This means: -1 from the old vote count, +1 to the new vote count
        updatedComment = await storage.switchVote(commentId, previousVote, voteType);
      } else {
        // User is voting for the first time
        updatedComment = await storage.voteComment(commentId, voteType);
      }
      
      // Track the vote in session
      req.session.votes[commentId] = voteType;
      
      res.json(updatedComment);
    } catch (error) {
      console.error("Error voting on comment:", error);
      res.status(500).json({ error: "Failed to vote on comment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
