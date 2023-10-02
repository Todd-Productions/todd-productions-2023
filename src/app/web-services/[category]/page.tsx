import { SamplesTemplate } from "../../../ui/templates"
import { IPageInfo } from "../../../ui/molecules/PageInfoSection/PageInfoSection"
import getCategoryData from "../../../../lib/getCategoryData"
import { getTopCTA, getDefaultProps } from "../../actions"
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export interface ICategorySample {
  title: string
  img: string
  largeImg: string
  description?: string
  url: string
}

export interface ICategoryData {
  pageInfoSection: IPageInfo
  samplesTitle?: string
  samples?: ICategorySample[]
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
      label: data.pageInfoSection.type as string,
    },
  ]

  return (
    <SamplesTemplate
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoSection)}
      samples={data.samples}
      {...getDefaultProps()}
    />
  )
}

export default CatPage
