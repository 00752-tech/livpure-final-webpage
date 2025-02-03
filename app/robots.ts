import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://livpurereview2025.com/sitemap.xml",
    host: "https://livpurereview2025.com",
  }
}

