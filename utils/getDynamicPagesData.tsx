async function getDynamicPages() {
  // Web Samples
  const webApplicationsData = await import(
    `../src/data/web/marketing-websites.json`
  )
  const { samples } = webApplicationsData

  // Video Samples
  const videoProductionCommercialData = await import(
    `../src/data/video/commercial.json`
  )

  const videoProductionDroneData = await import(`../src/data/video/drone.json`)

  const videoProductionMusicData = await import(
    `../src/data/video/music-video-production.json`
  )

  const videoProductionProductData = await import(
    `../src/data/video/product.json`
  )

  const videoProductionPromoSalesData = await import(
    `../src/data/video/promotional-sales.json`
  )

  const videoProductionTrainingData = await import(
    `../src/data/video/training.json`
  )

  return [
    ...samples,
    ...videoProductionCommercialData.samples,
    ...videoProductionDroneData.samples,
    ...videoProductionMusicData.samples,
    ...videoProductionProductData.samples,
    ...videoProductionPromoSalesData.samples,
    ...videoProductionTrainingData.samples,
  ]
}

export default getDynamicPages
