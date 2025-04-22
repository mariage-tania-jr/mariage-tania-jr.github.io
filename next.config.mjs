/** @type {import('next').NextConfig} */

// For GitHub Pages deployment, we need to use a specific configuration
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mariage-tania-jr';

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    
    // Use absolute URLs for GitHub Pages
    basePath: isProd ? `/${repoName}` : '',
    
    // Add trailing slash for better path resolution
    trailingSlash: true,
    
    // This is the key setting for GitHub Pages - ensure all asset URLs are correct
    assetPrefix: isProd ? `/${repoName}/` : '',
    
    // Required for Next.js Image component in static export
    images: {
      unoptimized: true,
      // Make image src paths work properly on GitHub Pages
      loader: 'custom',
      loaderFile: './src/imageLoader.js',
    },
}

export default nextConfig;
