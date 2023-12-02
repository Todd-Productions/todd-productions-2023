export const getCanonicalLink = (path: string | null) => {
  const site = process.env.SITE_URL || "https://toddproductions.com"
  return path ? `${site}/${path}` : site
}
