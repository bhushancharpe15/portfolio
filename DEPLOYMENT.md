# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio website to GitHub Pages using GitHub Actions.

## Prerequisites

1. A GitHub account
2. Your portfolio project pushed to a GitHub repository
3. GitHub Pages enabled on your repository

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

First, make sure your code is pushed to a GitHub repository:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website ready for deployment"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Configure Repository Settings

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`. It will:

- Build your Next.js application
- Deploy it to GitHub Pages automatically
- Trigger on every push to `main` or `master` branch

### 4. Important Configuration Notes

#### Repository Name Consideration

The current configuration assumes your repository is named `portfolio-website-main`. If your repository has a different name, you need to update the `next.config.js` file:

```javascript
// Update these lines in next.config.js
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR_REPOSITORY_NAME' : '',
basePath: process.env.NODE_ENV === 'production' ? '/YOUR_REPOSITORY_NAME' : ''
```

#### Custom Domain (Optional)

If you have a custom domain, update the workflow file:

```yaml
# In .github/workflows/deploy.yml, update the cname line:
cname: your-custom-domain.com
```

### 5. Deployment Process

Once you push your code to the `main` branch:

1. GitHub Actions will automatically start building your project
2. You can monitor the progress in the **Actions** tab of your repository
3. Once complete, your site will be available at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### 6. Troubleshooting

#### Build Failures
- Check the Actions tab for detailed error logs
- Ensure all dependencies are properly listed in `package.json`
- Verify that your Next.js configuration is correct

#### 404 Errors
- Make sure the `basePath` and `assetPrefix` in `next.config.js` match your repository name
- Check that all internal links use relative paths

#### Images Not Loading
- Ensure images are in the `public` folder
- Check that the `images.unoptimized: true` setting is in your Next.js config

### 7. Local Testing

Before deploying, test your static export locally:

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# You can serve them locally to test
npx serve out
```

### 8. Updating Your Site

To update your deployed site:
1. Make your changes
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and redeploy

## File Structure

```
portfolio-website-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Your source code
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
└── DEPLOYMENT.md              # This guide
```

## Support

If you encounter any issues:

1. Check the GitHub Actions logs in your repository
2. Verify your Next.js configuration
3. Ensure all dependencies are correctly installed
4. Test the build process locally first

Your portfolio website should now be successfully deployed to GitHub Pages!

