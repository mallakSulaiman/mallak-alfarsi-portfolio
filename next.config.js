/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: "out",
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig
