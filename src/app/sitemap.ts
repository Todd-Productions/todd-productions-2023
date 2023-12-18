import { MetadataRoute } from "next"
import getDynamicPages from "../../utils/getDynamicPagesData"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getDynamicPages()
  return [...data.map((page) => ({ url: page.slug, lastModified: new Date() }))]
}
