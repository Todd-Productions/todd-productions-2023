import { SampleTemplate } from "../../../ui/templates"

import getCategoryData from "../../../../lib/getCategoryData"
import { getTopCTA, getDefaultProps } from "../../actions"
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

const CatPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  const data: any = getCategoryData(category)
  const crumbs: ICrumb[] = [
    {
      label: "WEB SERVICES",
      url: "/web-services",
    },
    {
      label: data.pageInfoSection.type,
    },
  ]
  return (
    <SampleTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoSection)}
      samplesTitle={data.samplesTitles}
      samples={data.sites}
      {...getDefaultProps()}
    />
  )
}

export default CatPage
