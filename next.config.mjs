/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
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
