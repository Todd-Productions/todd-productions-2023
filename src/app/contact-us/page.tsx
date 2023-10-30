import { getDefaultProps } from "../actions"
import { ContactTemplate } from "../../ui/templates"
import data from "../../data/contact.json"

// types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const ContactPage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "CONTACT US",
    },
  ]

  return (
    <ContactTemplate
      title={data.title}
      description={data.description}
      email={data.email}
      phone={data.phone}
      crumbs={crumbs}
      {...getDefaultProps()}
    />
  )
}

export default ContactPage
