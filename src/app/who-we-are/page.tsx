import { getDefaultProps } from "../actions"
import { WhoAreWeTemplate } from "../../ui/templates"
import data from "../../data/whoAreWe.json"

// @ types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const WhoAreWePage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "WHO ARE WE",
    },
  ]

  return (
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
}

export default WhoAreWePage
