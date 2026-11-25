import type { MetadataRoute } from "next";
import { createClient } from "@/prismicio";
import { pathnames } from "@/configTranslations";

const SITE_URL = "https://www.florencebarbellstudio.it";

// pagine riservate da non far indicizzare
const EXCLUDED = ["/area-utenti"];

/** SITEMAP GENERATA DA NEXT: pagine statiche + articoli del blog da prismic.io */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = Object.keys(pathnames)
    .filter((path) => path.startsWith("/") && !EXCLUDED.includes(path))
    .map((path) => ({
      url: `${SITE_URL}/it${path === "/" ? "" : path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    }));

  const client = createClient();
  const posts = await client.getAllByType("blogpage");

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/it/blog/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
