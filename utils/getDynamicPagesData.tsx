async function getDynamicPages() {
  // Web Samples
  const webApplicationsData = await import(
    `../src/data/web/marketing-websites.json`
  )
  const { samples } = webApplicationsData

  // TODO
  // Video Samples

  return [...samples]
}

export default getDynamicPages
