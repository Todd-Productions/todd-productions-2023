import webApplicationsData from "../src/data/web/web-applications.json"
import marketingWebsitesData from "../src/data/web/marketing-websites.json"

function getCategoryData(category: string) {
  switch (category) {
    case "web-applications":
      return webApplicationsData
    case "marketing-websites":
      return marketingWebsitesData
    default:
      throw new Error(`There's been an error getting category data.`)
  }
}

export default getCategoryData
