import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/video/video.json"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"
import { getCanonicalLink } from "../../../utils/common"

const crumbs: ICrumb[] = [
  {
    label: "VIDEO PRODUCTION",
  },
]

export function generateMetadata() {
  return {
    title: "Video Production Services Maumee Ohio",
    description:
      "Award winning video development team, based in Maumee Ohio. Providing production for commercial use and much more!",
    alternates: {
      canonical: getCanonicalLink("video-production"),
    },
  }
}

const VideoPage = () => (
  <ServiceTemplate
    crumbs={crumbs}
    topCTAData={getTopCTA(data.pageInfoSection)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default VideoPage
