const nextConfig = {
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "www.liv-pure.co", "www.pngall.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons", "framer-motion"],
    scrollRestoration: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Cache-Control headers
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

