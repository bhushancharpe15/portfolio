# 🚀 QUICK DEPLOYMENT GUIDE

## Option 1: Automated Script (Recommended)

Run the automated deployment script:

```bash
cd /home/bhushan/Desktop/My_Portfolio/portfolio-website-main
./deploy.sh
```

This script will:
- ✅ Initialize Git repository
- ✅ Install dependencies
- ✅ Test the build process
- ✅ Add all files to Git
- ✅ Commit changes with proper message
- ✅ Show you the next steps

## Option 2: Manual Commands

If you prefer to run commands manually:

```bash
# Navigate to your project
cd /home/bhushan/Desktop/My_Portfolio/portfolio-website-main

# Initialize Git (if not already done)
git init

# Install dependencies
npm install

# Test build
npm run build

# Add all files
git add .

# Commit changes
git commit -m "Portfolio website ready for GitHub Pages deployment"

# Add remote repository (replace with your actual GitHub repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔧 GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `portfolio-website-main` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 3. Your Site URL
Your portfolio will be available at:
- `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## 🎯 What Happens Next

1. **Push triggers deployment**: Every time you push to `main` branch
2. **Automatic build**: GitHub Actions builds your site
3. **Automatic deploy**: Site is deployed to GitHub Pages
4. **Live updates**: Changes appear on your live site automatically

## 🔍 Monitoring Deployment

1. Go to your GitHub repository
2. Click **Actions** tab
3. Watch the deployment progress
4. Green checkmark = successful deployment
5. Red X = deployment failed (check logs)

## 🆘 Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Test locally: `npm run build`

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Check if repository name matches `next.config.js` settings
- Verify GitHub Pages is enabled in repository settings

### 404 Errors
- Make sure `basePath` in `next.config.js` matches your repository name
- Check that all internal links are relative

## 📞 Need Help?

1. Check the detailed `DEPLOYMENT.md` file
2. Review GitHub Actions logs in your repository
3. Test build locally first: `npm run build`

---

**🎉 Your portfolio is ready to go live!**

