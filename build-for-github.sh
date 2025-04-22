#!/bin/bash
# filepath: /home/jrobernai/websiteNextJS/mariage-tania-jr/build-for-github.sh

echo "Building website for GitHub Pages..."

# Clean up previous build
rm -rf docs

# Build the Next.js site
npm run build

# Fix the asset paths for GitHub Pages
node fix-gh-pages.js

echo "Build complete! Your site is ready for GitHub Pages deployment."
echo "The static files are in the 'docs' directory."
echo "Push these changes to your GitHub repository to update your site."