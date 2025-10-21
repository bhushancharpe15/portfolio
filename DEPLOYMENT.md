# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

1. **Push to GitHub Repository:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/portfolio-website-main
   ```

## Manual Deployment

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   npm run export
   ```

2. **Upload the `out` folder:**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch and "/" folder
   - Upload the contents of the `out` folder

## Environment Variables

Make sure to set up the following in your GitHub repository secrets if needed:
- `GITHUB_TOKEN` (automatically provided)

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings to point to your GitHub Pages URL
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Troubleshooting

- If images don't load, check the `basePath` in `next.config.js`
- Make sure all links use relative paths
- Verify the `assetPrefix` is correctly set for production