import { Metadata } from "next"

import { getCanonicalLink } from "../../../../utils/common"
import getCategoryData from "../../../../utils/getCategoryData"
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"
import { IPageInfo } from "../../../ui/molecules/PageInfoSection/PageInfoSection"
import { SamplesTemplate } from "../../../ui/templates"
import { getDefaultProps, getTopCTA } from "../../actions"

export interface ICategorySample {
  title: string
  img: string
  largeImg: string
  description?: string
  url: string
}

export interface ICategoryData {
  pageInfoSection: IPageInfo
  samples?: ICategorySample[]
}

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params
  const data: ICategoryData = await getCategoryData(`web/${category}`)

  return {
    title: data.pageInfoSection.seoTitle,
    description: data.pageInfoSection.seoDescription,
    alternates: {
      canonical: getCanonicalLink(`web-services/${category}`),
    },
  }
}

const CatPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  const data: ICategoryData = await getCategoryData(`web/${category}`)

  const crumbs: ICrumb[] = [
    {
      label: "WEB SERVICES",
      url: "/web-services",
    },
    {
      label: data.pageInfoSection.pageTitle as string,
    },
  ]

  return (
    <SamplesTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoSection)}
      samples={data.samples}
      samplesTitle={data.pageInfoSection.pageTitle as string}
      {...getDefaultProps()}
    />
  )
}

export default CatPage
