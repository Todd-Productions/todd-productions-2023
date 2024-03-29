async function getCategoryData(category: string) {
  const webApplicationsData = await import(`../src/data/${category}.json`)
  return webApplicationsData
}

export default getCategoryData
