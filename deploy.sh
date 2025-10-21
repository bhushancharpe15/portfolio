#!/bin/bash

# Portfolio Website Deployment Script
# This script will prepare and deploy your portfolio to GitHub Pages

echo "🚀 Starting Portfolio Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the portfolio-website-main directory."
    exit 1
fi

print_status "Found portfolio project directory"

# Check if git is initialized
if [ ! -d ".git" ]; then
    print_status "Initializing Git repository..."
    git init
    print_success "Git repository initialized"
else
    print_status "Git repository already exists"
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
else
    print_status "Dependencies already installed"
fi

# Test the build process
print_status "Testing build process..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build test successful"
else
    print_error "Build failed. Please check your code for errors."
    exit 1
fi

# Add all files to git
print_status "Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    print_warning "No changes to commit"
else
    print_status "Committing changes..."
    git commit -m "Portfolio website ready for GitHub Pages deployment

- Configured Next.js for static export
- Added GitHub Actions workflow for automated deployment
- Set up proper base path and asset prefix for GitHub Pages
- Added comprehensive deployment documentation

Ready for deployment to GitHub Pages!"
    print_success "Changes committed successfully"
fi

# Display next steps
echo ""
echo "=========================================="
echo "🎉 PORTFOLIO DEPLOYMENT PREPARATION COMPLETE!"
echo "=========================================="
echo ""
print_success "Your portfolio is ready for GitHub Pages deployment!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Create a new repository on GitHub (if you haven't already)"
echo "2. Copy the repository URL"
echo "3. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Go to your GitHub repository → Settings → Pages"
echo "5. Set Source to 'GitHub Actions'"
echo "6. Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
echo ""
echo "📁 Files created/modified:"
echo "   ✅ .github/workflows/deploy.yml (GitHub Actions workflow)"
echo "   ✅ next.config.js (Updated for static export)"
echo "   ✅ package.json (Updated build scripts)"
echo "   ✅ DEPLOYMENT.md (Comprehensive deployment guide)"
echo ""
print_status "All configuration files are ready!"
echo ""
