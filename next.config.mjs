/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'docs',  // Specify the output directory as 'docs'
    images: {
      unoptimized: true, // required if you use `next/image`
    },
}

// module.exports = {
//     eslint: {
//       ignoreDuringBuilds: true,
//     },
// }

export default nextConfig;
