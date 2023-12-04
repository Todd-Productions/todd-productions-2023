import { getCanonicalLink } from "../../../utils/common"
import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/web/web.json"

// @types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const crumbs: ICrumb[] = [
  {
    label: "WEB SERVICES",
  },
]

export function generateMetadata() {
  return {
    title: "Website Design Services",
    description:
      "Marketing websites, website applications, to SEO adjustments. Todd Productions offers a wide array of website developments services in Maumee Ohio",
    alternates: {
      canonical: getCanonicalLink("web-services"),
    },
  }
}

const WebPage = () => (
  <ServiceTemplate
    crumbs={crumbs}
    topCTAData={getTopCTA(data.pageInfoData)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default WebPage
