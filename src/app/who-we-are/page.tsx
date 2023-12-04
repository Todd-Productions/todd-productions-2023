import { getCanonicalLink } from "../../../utils/common"
import { getDefaultProps } from "../actions"
import { WhoAreWeTemplate } from "../../ui/templates"
import data from "../../data/whoAreWe.json"

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
      "Based in Maumee Ohio, Todd Productions has more than 20 years experience as a full service media firm. Video production to website design and more!",
    alternates: {
      canonical: getCanonicalLink("who-are-we"),
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
