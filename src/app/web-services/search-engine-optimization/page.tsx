import { getCanonicalLink } from "../../../../utils/common"
import { getTopCTA, getDefaultProps } from "../../actions"
import { SEOTemplate } from "../../../ui/templates"
import data from "../../../data/web/seo.json"

// @types
import { ICrumb } from "../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export function generateMetadata() {
  return {
    title: "Boost Website Google Rankings",
    description:
      "Search Engine Optimization packages will help boost your website's Google search rankings and get more customers. Get higher rankings in Maumee Ohio",
    alternates: {
      canonical: getCanonicalLink("web-services/search-engine-optimization"),
    },
  }
}

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
