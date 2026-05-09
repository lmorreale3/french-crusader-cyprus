/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment the following lines for GitHub Pages deployment:
  // output: 'export',
  // basePath: '/french-texts-crusader-cyprus',
  // trailingSlash: true,
}

export default nextConfig
