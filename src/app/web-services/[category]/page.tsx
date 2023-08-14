import { SampleTemplate } from "../../../ui/templates"

import getCategoryData from "../../../../lib/getCategoryData"
import { getTopCTA, getDefaultProps } from "../../actions"

const CatPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  const data: any = getCategoryData(category)
  console.log(data.sites)
  return (
    <SampleTemplate
      topCTAData={getTopCTA(data.pageInfoSection)}
      samplesTitle="Sample Title"
      samples={data.sites ?? []}
      {...getDefaultProps()}
    />
  )
}

export default CatPage
