/** @type {import('next').NextConfig} */

// For GitHub Pages deployment, we need to use a specific configuration

const nextConfig = {
    output: 'export',
    distDir: 'docs',

    // Required for Next.js Image component in static export
    images: {
      unoptimized: true,
    },
}

export default nextConfig;
