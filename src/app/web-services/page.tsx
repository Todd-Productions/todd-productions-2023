import { ServiceTemplate } from "../../ui/templates"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import data from "../../data/web/web.json"

import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const WebPage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "WEB SERVICES",
    },
  ]
  return (
    <ServiceTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoData)}
      splitContent={getSplitContent(data.splitContent)}
      {...getDefaultProps()}
    />
  )
}

export default WebPage
