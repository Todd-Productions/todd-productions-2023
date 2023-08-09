import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/video/video.json"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"

const VideoPage = () => (
  <ServiceTemplate
    topCTAData={getTopCTA(data.pageInfoSection)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default VideoPage
