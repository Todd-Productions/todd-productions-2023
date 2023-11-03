import { getTopCTA, getDefaultProps } from "../../actions"
import { ICategoryData } from "../../web-services/[category]/page"
import { SamplesTemplate } from "../../../ui/templates"

import getCategoryData from "../../../../lib/getCategoryData"

// @types
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
      label: data.pageInfoSection.pageTitle as string,
    },
  ]

  return (
    <SamplesTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoSection)}
      samplesTitle={data.pageInfoSection.pageTitle as string}
      samples={data.samples}
      isCard
      {...getDefaultProps()}
    />
  )
}

export default CatPage
