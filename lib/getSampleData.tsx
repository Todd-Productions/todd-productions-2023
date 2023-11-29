async function getSampleData(cat: string, type: string, sampleSlug: string) {
  const webApplicationsData = await import(`../src/data/${cat}/${type}.json`)
  const sampleData = webApplicationsData[sampleSlug]
  console.log(sampleData)
  return sampleData
}

export default getSampleData
