export const getCanonicalLink = (path: string | null) => {
  const site = process.env.SITE_URL || "https://www.toddproductions.com"
  return path ? `${site}/${path}` : site
}

export const capitalizeWords = (str: string) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  )
