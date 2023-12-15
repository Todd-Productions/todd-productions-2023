import { getCanonicalLink } from "../../utils/common"
import homeData from "../data/home.json"
import { HomeTemplate } from "../ui/templates"
import { getDefaultProps, getSplitContent, getTopCTA } from "./actions"

export function generateMetadata() {
  return {
    title: "Video Production - Website Design - Toledo, Ohio",
    description:
      "Based in Maumee Ohio, Todd Productions has more than 20 years experience as a full service media firm. Video production to website design and more!",
    alternates: {
      canonical: getCanonicalLink(""),
    },
  }
}

const HomePage = () => (
  <HomeTemplate
    topCTAData={getTopCTA(homeData.pageInfoData)}
    splitContent={getSplitContent(homeData.splitContent)}
    {...getDefaultProps()}
  />
)

export default HomePage
