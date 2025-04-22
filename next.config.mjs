/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/mariage-tania-jr' : '';

const nextConfig = {
    output: 'export',
    distDir: 'docs',  // Specify the output directory as 'docs'
    basePath: basePath,  // Define the base path for GitHub Pages
    assetPrefix: basePath,  // Use the same base path for assets
    images: {
      unoptimized: true, // required if you use `next/image`
    },
    trailingSlash: true,
}

export default nextConfig;
