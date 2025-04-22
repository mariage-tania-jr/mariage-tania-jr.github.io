/** @type {import('next').NextConfig} */

// For GitHub Pages deployment, we need to use a specific configuration
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mariage-tania-jr';

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    
    // Use basePath for GitHub Pages
    basePath: isProd ? `/${repoName}` : '',
    
    // Add trailing slash for better path resolution
    trailingSlash: true,
    
    // This is the key setting for GitHub Pages
    assetPrefix: isProd ? `/${repoName}/` : '',
    
    // Required for Next.js Image component in static export
    images: {
      unoptimized: true,
    },
}

export default nextConfig;
