import express from "express";
import session from "express-session";
import { registerRoutes } from "../server/routes.js";

const app = express();

// Configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all routes
registerRoutes(app);

// Export for Vercel
export default app;