import { getCanonicalLink } from "../../../utils/common"
import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"
import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/other.json"

// @types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const crumbs: ICrumb[] = [
  {
    label: "OTHER",
  },
]

export function generateMetadata() {
  return {
    title: "Print & Media Services",
    description:
      "We offer a wide array of media services other than video production, including print and voice over work, Maumee and Northwest Ohio",
    alternates: {
      canonical: getCanonicalLink("other-services"),
    },
  }
}

const OtherPage = () => (
  <ServiceTemplate
    crumbs={crumbs}
    topCTAData={getTopCTA(data.pageInfoData)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default OtherPage
