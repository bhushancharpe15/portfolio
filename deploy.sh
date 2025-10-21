#!/bin/bash

echo "🚀 Deploying Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run export

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Output folder: ./out"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Push this code to your GitHub repository"
    echo "2. Go to repository Settings → Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. Your site will be available at: https://yourusername.github.io/portfolio-website-main"
    echo ""
    echo "📋 Manual deployment:"
    echo "1. Upload the contents of the 'out' folder to GitHub Pages"
    echo "2. Or use the GitHub Actions workflow for automatic deployment"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
