import { ServiceTemplate } from "../../ui/templates"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import data from "../../data/web/web.json"

const WebPage = () => (
  <ServiceTemplate
    topCTAData={getTopCTA(data)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default WebPage
