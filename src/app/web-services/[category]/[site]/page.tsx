import { Metadata } from "next"

import { capitalizeWords, getCanonicalLink } from "../../../../../utils/common"
import getSampleData from "../../../../../utils/getSampleData"
import { ExampleTemplate } from "../../../../ui/templates"
import { getDefaultProps } from "../../../actions"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export interface IRawPageInfo {
  title: string
  img: string
  largeImg: string
  url: string
  slug: string
  description: string
}

type Props = {
  params: { category: string; site: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, site } = params
  const data: IRawPageInfo = await getSampleData(
    "web",
    category,
    `/web-services/${category}/${site}`
  )
  return {
    title: capitalizeWords(data.title),
    description: `${data.description} | Todd Productions Inc.`,
    alternates: {
      canonical: getCanonicalLink(`web-services/${category}/${site}`),
    },
  }
}

const ExamplePage = async ({
  params,
}: {
  params: { category: string; site: string }
}) => {
  const { category, site } = params

  const data: IRawPageInfo = await getSampleData(
    "web",
    category,
    `/web-services/${category}/${site}`
  )

  const crumbs: ICrumb[] = [
    {
      label: "Home",
      url: ".",
    },
    {
      label: "Web Services",
      url: "/web-services",
    },
    {
      label: "Marketing Services",
      url: "/web-services/marketing-websites",
    },
    {
      label: data?.title ?? "Website",
    },
  ]

  return (
    <ExampleTemplate
      title={data.title}
      description={data.description}
      button={{ label: "View Website", link: data.url }}
      siteImg={data.largeImg}
      {...getDefaultProps()}
      crumbs={crumbs}
    />
  )
}

export default ExamplePage
