import { getDefaultProps } from "../actions"
import { TeamTemplate } from "../../ui/templates"
import data from "../../data/aboutUs.json"

// types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const ContactPage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "ABOUT US",
    },
  ]

  return (
    <TeamTemplate
      crumbs={crumbs}
      members={data.members}
      {...getDefaultProps()}
    />
  )
}

export default ContactPage
