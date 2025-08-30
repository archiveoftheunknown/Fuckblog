# GitHub Pages Deployment Instructions

## Files Included
- `dist/public/` - Contains all built files ready for deployment
- `.nojekyll` - Prevents GitHub from processing files with Jekyll
- `404.html` - Handles client-side routing for the SPA

## Deployment Steps

### Option 1: Deploy from GitHub Repository

1. Create a new GitHub repository or use existing one
2. Upload all files from `dist/public/` to your repository
3. Go to Settings → Pages in your repository
4. Under "Source", select "Deploy from a branch"
5. Choose your branch (usually `main` or `master`)
6. Select root folder `/` 
7. Click Save
8. Your site will be available at: `https://[username].github.io/[repository-name]/`

### Option 2: Using GitHub Actions (Automatic Deployment)

1. Push all source code to your repository
2. Create `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

3. Enable GitHub Pages in repository settings
4. Site will auto-deploy on every push to main branch

## Important Notes

- If deploying to `https://[username].github.io/[repository-name]/`, you may need to update the base path in `vite.config.ts`:
  ```js
  export default {
    base: '/[repository-name]/'
  }
  ```
  Then rebuild with `npm run build`

- The site uses client-side routing, so all routes will work correctly with the included 404.html redirect script

- Make sure to upload ALL files including hidden files like `.nojekyll`

## Custom Domain (Optional)

1. Add a file named `CNAME` in `dist/public/` with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings