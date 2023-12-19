import { MetadataRoute } from "next"
import getDynamicPages from "../../utils/getDynamicPagesData"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getDynamicPages()

  const staticRoutes = [
    {
      url: "https://www.toddproductions.com/icon.ico",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com/other-services",
      lastModified: new Date(),
    },

    {
      url: "https://www.toddproductions.com/video-production",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com/web-services",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com/web-services/search-engine-optimization",
      lastModified: new Date(),
    },
    {
      url: "https://www.toddproductions.com/who-we-are",
      lastModified: new Date(),
    },
  ]

  return [
    ...staticRoutes,
    ...data.map((page) => ({ url: page.slug, lastModified: new Date() })),
  ]
}
