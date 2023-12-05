import React from "react"

import getSampleData from "../../../../../utils/getSampleData"
import { getDefaultProps } from "../../../actions"
import { ExampleTemplate } from "../../../../ui/templates"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export interface IRawPageInfo {
  title: string
  img: string
  largeImg: string
  url: string
  slug: string
  description: string
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
      label: "Web Services",
      url: "/web-services/",
    },
    {
      label: "Marketing Services",
      url: "/web-services/marketing-websites/",
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
