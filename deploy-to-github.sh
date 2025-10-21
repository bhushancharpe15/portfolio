#!/bin/bash

echo "🚀 Deploying Bhushan Charpe's Portfolio to GitHub Pages"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Please run 'git init' first."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "Add Instagram contact bar and prepare for GitHub Pages deployment"
fi

echo "✅ Portfolio is ready for GitHub Pages deployment!"
echo ""
echo "🌐 Next Steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Repository name: 'bhushan-charpe-portfolio'"
echo "3. Make it PUBLIC"
echo "4. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/bhushan-charpe-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "5. Go to repository Settings → Pages"
echo "6. Select 'GitHub Actions' as source"
echo "7. Your site will be live at: https://YOUR_USERNAME.github.io/bhushan-charpe-portfolio"
echo ""
echo "🎉 Your portfolio includes:"
echo "   ✅ Instagram contact bar"
echo "   ✅ All project links"
echo "   ✅ Achievement section"
echo "   ✅ GitHub Pages configuration"
echo ""
echo "📱 Contact Bar Features:"
echo "   📧 Email: bhushancharpe135@gmail.com"
echo "   📱 Phone: +91 8767106500"
echo "   💼 LinkedIn: Professional profile"
echo "   📸 Instagram: @bhushn.15"
echo "   💻 GitHub: bhushancharpe15"
