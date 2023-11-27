import { getDefaultProps } from "../actions"
import { TeamTemplate } from "../../ui/templates"
// import data from "../../data/contact.json"

// types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const ContactPage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "ABOUT US",
    },
  ]

  return <TeamTemplate crumbs={crumbs} {...getDefaultProps()} />
}

export default ContactPage
