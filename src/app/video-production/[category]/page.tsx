import { ICategoryData } from "@/types"
import { SampleTemplate } from "../../../ui/templates"

import getCategoryData from "../../../../lib/getCategoryData"
import { getTopCTA, getDefaultProps } from "../../actions"
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

const CatPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params

  const data: ICategoryData = await getCategoryData(`video/${category}`)

  const crumbs: ICrumb[] = [
    {
      label: "VIDEO PRODUCTION",
      url: "/video-production",
    },
    {
      label: data.pageInfoSection.type,
    },
  ]

  console.log(data.pageInfoSection.bannerImg)
  return (
    <SampleTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoSection)}
      samplesTitle={data.samplesTitle}
      samples={data.samples}
      {...getDefaultProps()}
    />
  )
}

export default CatPage
