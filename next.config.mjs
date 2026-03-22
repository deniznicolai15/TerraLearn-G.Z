/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and modify the line below if deploying to a GitHub Pages subdirectory
  // basePath: '/your-repo-name',
}

export default nextConfig
