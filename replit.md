# Political Insights Blog Platform

## Overview

Political Insights is a modern political analysis and commentary platform built with a full-stack TypeScript architecture. The application features a React frontend with sophisticated animations, a Node.js Express backend, and PostgreSQL database integration using Drizzle ORM. The platform is designed to deliver in-depth political content, digital democracy analysis, and investigative journalism through an elegant, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React 18 with TypeScript, featuring a modern component-based architecture. The UI leverages the shadcn/ui component library built on Radix UI primitives for accessibility and consistency. Styling is implemented using Tailwind CSS with a custom dark theme featuring warm colors (browns, oranges) optimized for reading political content.

**Key Frontend Technologies:**
- React Router alternative (Wouter) for lightweight client-side routing
- Framer Motion for sophisticated animations and micro-interactions
- TanStack React Query for efficient data fetching and caching
- Custom CSS variables for theming with glassmorphism effects

**Component Structure:**
- Reusable UI components following atomic design principles
- Page-level components for major routes (Home, Blog, About, Contact)
- Shared layout components (Sidebar, Footer, Newsletter)
- Blog-specific components with rich typography and markdown rendering

### Backend Architecture
The server implements a minimal Express.js architecture designed for API development and static file serving. The backend uses ES modules and TypeScript throughout, with development hot-reloading via Vite integration.

**Server Features:**
- Express middleware for JSON parsing and CORS handling
- Request/response logging for API endpoints
- Development-only Vite integration for hot module replacement
- Static file serving for production builds
- Error handling middleware with proper HTTP status codes

**Storage Layer:**
- Abstract storage interface (IStorage) supporting multiple implementations
- In-memory storage implementation for development/testing
- User management with basic CRUD operations
- Database schema defined using Drizzle ORM with PostgreSQL

### Data Management
The application uses Drizzle ORM as the database abstraction layer, configured for PostgreSQL with the Neon serverless driver. The schema is defined in TypeScript with Zod validation for type safety.

**Database Design:**
- Users table with UUID primary keys and unique username constraints
- Drizzle Kit for migrations and schema management
- Environment-based database configuration
- Type-safe database operations with full TypeScript integration

**Content Management:**
- Static blog post data stored in TypeScript modules
- Full-text search capabilities using Fuse.js
- Category and tag-based content filtering
- Markdown content rendering with syntax highlighting

### Authentication & Authorization
The current implementation includes a basic user schema but authentication is not yet fully implemented. The architecture supports session-based authentication with the connect-pg-simple session store configured for PostgreSQL.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with PostCSS, shadcn/ui component library
- **Animation**: Framer Motion for complex animations and transitions

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support via tsx
- **Database**: PostgreSQL via @neondatabase/serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Development**: Vite for build tooling and development server

### UI Component Libraries
- **Radix UI**: Complete suite of accessible UI primitives including dialogs, dropdowns, tooltips, and form components
- **Lucide React**: Consistent icon library for UI elements
- **React Markdown**: Markdown rendering for blog content

### Development & Build Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type safety across client and server
- **ESBuild**: Fast bundling for production server builds
- **Replit Integration**: Development banner and cartographer plugin for Replit environment

### Data & Search
- **TanStack React Query**: Data fetching, caching, and synchronization
- **Fuse.js**: Client-side fuzzy search functionality
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities

### Production Considerations
The application is configured for deployment with static file serving, environment-based configuration, and proper error handling. The build process creates optimized bundles for both client and server code, with the server compiled to a single JavaScript file for easy deployment.