import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/other.json"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"

import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const OtherPage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "OTHER",
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

export default OtherPage
