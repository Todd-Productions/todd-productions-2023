async function getSampleData(cat: string, type: string, sampleSlug: string) {
  const webApplicationsData = await import(`../src/data/${cat}/${type}.json`)
  const site = webApplicationsData.samples.find(
    (obj: any) => obj.slug === sampleSlug
  )

  return site
}

export default getSampleData
