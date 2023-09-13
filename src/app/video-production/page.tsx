import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/video/video.json"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const crumbs: ICrumb[] = [
  {
    label: "VIDEO PRODUCTION",
  },
]

const VideoPage = () => (
  <ServiceTemplate
    crumbs={crumbs}
    topCTAData={getTopCTA(data.pageInfoSection)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default VideoPage
