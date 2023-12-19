import { getCanonicalLink } from "../../../utils/common"
import data from "../../data/whoAreWe.json"
import { WhoAreWeTemplate } from "../../ui/templates"
import { getDefaultProps } from "../actions"

// @ types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const crumbs: ICrumb[] = [
  {
    label: "WHO ARE WE",
  },
]

export function generateMetadata() {
  return {
    title: "Full Service Multimedia Firm",
    description:
      "Todd Productions is made up of talented professionals who are passionate about producing stunning videos and optimized websites that capture the essence of your brand.",
    alternates: {
      canonical: getCanonicalLink("who-we-are"),
    },
  }
}

const WhoAreWePage = () => (
  <WhoAreWeTemplate
    crumbs={crumbs}
    title={data.title}
    description={data.description}
    videoLink={data.videoLink}
    button={data.button}
    members={data.members}
    membersTitle={data.membersTitle}
    membersDescription={data.membersDescription}
    {...getDefaultProps()}
  />
)

export default WhoAreWePage
