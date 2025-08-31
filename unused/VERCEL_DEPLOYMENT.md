# Vercel Deployment Instructions

## Prerequisites
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`

## Step 1: Prepare Your Supabase Database
Your existing Supabase database will work with Vercel. Make sure you have your DATABASE_URL ready.

## Step 2: Deploy to Vercel

### Option A: Deploy via Command Line
1. Run in your terminal:
   ```bash
   vercel
   ```

2. Follow the prompts:
   - Link to existing project? **No**
   - What's your project's name? **political-insights-blog** (or your choice)
   - In which directory is your code located? **./** (current directory)
   - Want to override the settings? **No**

3. Add environment variables:
   ```bash
   vercel env add DATABASE_URL
   vercel env add SESSION_SECRET
   ```
   - For DATABASE_URL: Paste your Supabase connection string
   - For SESSION_SECRET: Generate a random string (min 32 characters)

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: Deploy via GitHub
1. Push your code to a GitHub repository
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - DATABASE_URL: Your Supabase connection string
   - SESSION_SECRET: A random string for sessions

5. Click "Deploy"

## Your URLs
- Development: `https://your-project.vercel.app`
- Production: `https://your-project.vercel.app` or your custom domain

## Important Notes
- Comments and voting will work on Vercel ✅
- Database is already set up (Supabase) ✅
- Session management is configured ✅
- All API routes are at `/api/*` ✅

## Troubleshooting
If you get build errors:
1. Make sure all environment variables are set
2. Check the Vercel dashboard logs
3. Ensure DATABASE_URL is correctly formatted

Your app is now ready for Vercel deployment!