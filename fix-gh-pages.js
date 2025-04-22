// filepath: /home/jrobernai/websiteNextJS/mariage-tania-jr/fix-gh-pages.js
const fs = require('fs');
const path = require('path');

// Repository name used in GitHub Pages URLs
const repoName = 'mariage-tania-jr';
const outputDir = path.join(__dirname, 'docs');

// Function to find all HTML files in the output directory
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Get all HTML files
const htmlFiles = findHtmlFiles(outputDir);
console.log(`Found ${htmlFiles.length} HTML files to process...`);

// Process each HTML file
htmlFiles.forEach(filePath => {
  console.log(`Processing: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // First, fix paths that include the repository name
  content = content.replace(
    /href="\/mariage-tania-jr\//g, 
    'href="./'
  );
  
  content = content.replace(
    /src="\/mariage-tania-jr\//g, 
    'src="./'
  );
  
  // Then fix any remaining paths that start with /
  content = content.replace(
    /href="\/_next\//g, 
    'href="./_next/'
  );
  
  content = content.replace(
    /src="\/_next\//g, 
    'src="./_next/'
  );
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content);
});

console.log('All HTML files processed for GitHub Pages');