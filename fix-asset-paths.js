// filepath: /home/jrobernai/websiteNextJS/mariage-tania-jr/fix-asset-paths.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Repository name used in GitHub Pages URLs
const repoName = 'mariage-tania-jr';

// Directory containing the exported static files
const outputDir = path.join(__dirname, 'docs');

// Find all HTML files
const htmlFiles = glob.sync('**/*.html', { cwd: outputDir });

console.log(`Found ${htmlFiles.length} HTML files to process...`);

// Process each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(outputDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix paths for assets (CSS, JS, images, etc.)
  // Replace absolute paths with relative paths
  content = content.replace(
    new RegExp(`(href|src)="/(${repoName}/_next/[^"]+)"`, 'g'), 
    (match, attr, path) => {
      // Calculate the relative path based on the file's directory depth
      const depth = file.split('/').length - 1;
      const prefix = depth > 0 ? '../'.repeat(depth) : './';
      return `${attr}="${prefix}${path}"`;
    }
  );
  
  // Also fix absolute paths for other assets
  content = content.replace(
    new RegExp(`(href|src)="/(${repoName}/[^"]+)"`, 'g'),
    (match, attr, path) => {
      const depth = file.split('/').length - 1;
      const prefix = depth > 0 ? '../'.repeat(depth) : './';
      return `${attr}="${prefix}${path}"`;
    }
  );
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});

console.log('All files processed. Fixed asset paths for GitHub Pages.');