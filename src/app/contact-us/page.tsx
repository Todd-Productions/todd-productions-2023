import { ICrumb } from "@/ui/molecules/Breadcrumbs/Breadcrumbs"
import { ContactTemplate } from "../../ui/templates"

import data from "../../data/contact.json"
import { getDefaultProps } from "../actions"

// types

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
