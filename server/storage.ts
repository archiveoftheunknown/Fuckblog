import { type User, type InsertUser, type Comment, type InsertComment, users, comments } from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCommentsByPost(postSlug: string): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
  voteComment(commentId: string, voteType: 'up' | 'down'): Promise<Comment>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getCommentsByPost(postSlug: string): Promise<Comment[]> {
    return await db
      .select()
      .from(comments)
      .where(eq(comments.postSlug, postSlug))
      .orderBy(desc(comments.createdAt));
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const [comment] = await db
      .insert(comments)
      .values(insertComment)
      .returning();
    return comment;
  }

  async voteComment(commentId: string, voteType: 'up' | 'down'): Promise<Comment> {
    const field = voteType === 'up' ? comments.upvotes : comments.downvotes;
    const [updatedComment] = await db
      .update(comments)
      .set({ 
        [voteType === 'up' ? 'upvotes' : 'downvotes']: sql`${field} + 1`
      })
      .where(eq(comments.id, commentId))
      .returning();
    return updatedComment;
  }
}

export const storage = new DatabaseStorage();
