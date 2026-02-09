#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo ""
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "🔗 Setting up GitHub remote..."
    git remote add origin "https://github.com/sunny-arya-codes/sunny-arya-codes.github.io.git"
    echo "✅ Remote added!"
    echo ""
fi

# Stage all files
echo "📦 Staging files..."
git add .

# Commit
echo ""
read -p "📝 Commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio"
fi

git commit -m "$commit_msg"
echo "✅ Committed!"
echo ""

# Push
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✨ Done! Your code is on GitHub."
echo ""
echo "📋 Next Steps (if first time):"
echo "1. Go to GitHub → Your Repository → Settings"
echo "2. Click 'Pages' in the left sidebar"
echo "3. Under 'Source', select 'Deploy from a branch'"
echo "4. Select branch: main, folder: / (root)"
echo "5. Click 'Save'"
echo ""
echo "🎉 Your portfolio will be live at:"
echo "   https://sunny-arya-codes.github.io"
