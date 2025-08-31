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
  app.post("/api/comments/:commentId/vote", async (req, res) => {
    try {
      const { commentId } = req.params;
      const { voteType } = req.body; // 'up' or 'down'
      
      if (voteType !== 'up' && voteType !== 'down') {
        return res.status(400).json({ error: "Invalid vote type" });
      }
      
      const updatedComment = await storage.voteComment(commentId, voteType);
      res.json(updatedComment);
    } catch (error) {
      console.error("Error voting on comment:", error);
      res.status(500).json({ error: "Failed to vote on comment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
