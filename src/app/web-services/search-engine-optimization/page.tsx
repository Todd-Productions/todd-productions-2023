import { SEOTemplate } from "../../../ui/templates"

import data from "../../../data/web/seo.json"
import { getTopCTA, getDefaultProps } from "../../actions"

import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

const SEOPage = () => {
  const crumbs: ICrumb[] = [
    {
      url: "/web-services",
      label: "WEB SERVICES",
    },
    {
      label: data.pageInfoData.pageTitle,
    },
  ]

  return (
    <SEOTemplate
      seoTitle={data.seoTitle}
      seoDescription={data.seoDescription}
      seoPackages={data.seoPackages}
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoData)}
      {...getDefaultProps()}
    />
  )
}

export default SEOPage
