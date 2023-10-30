import { getTopCTA, getDefaultProps } from "../../actions"
import { SEOTemplate } from "../../../ui/templates"
import data from "../../../data/web/seo.json"

// @types
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
      seoSectionTitle={data.seoTitle}
      seoSectionDescription={data.seoDescription}
      seoPackages={data.seoPackages}
      crumbs={crumbs}
      topCTAData={getTopCTA(data.pageInfoData)}
      {...getDefaultProps()}
    />
  )
}

export default SEOPage
