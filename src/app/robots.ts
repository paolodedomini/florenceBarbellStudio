import type { MetadataRoute } from "next";

const SITE_URL = "https://www.florencebarbellstudio.it";

/** ROBOTS.TXT GENERATO DA NEXT */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/slice-simulator", "/it/area-utenti"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
