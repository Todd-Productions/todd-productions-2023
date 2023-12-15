import { Metadata } from "next"

import { getCanonicalLink } from "../../../../utils/common"
import { SamplesTemplate } from "../../../ui/templates"
import { getDefaultProps, getTopCTA } from "../../actions"
import { ICategoryData } from "../../web-services/[category]/page"

import getCategoryData from "../../../../utils/getCategoryData"

// @types
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params
  const data: ICategoryData = await getCategoryData(`video/${category}`)

  return {
    title: data.pageInfoSection.seoTitle,
    description: data.pageInfoSection.seoDescription,
    alternates: {
      canonical: getCanonicalLink(`/video-production/${category}`),
    },
  }
}

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
