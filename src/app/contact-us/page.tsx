import { ContactTemplate } from "../../ui/templates"

import data from "../../data/contact.json"
import { getDefaultProps } from "../actions"

const ContactPage = () => (
  <ContactTemplate
    title={data.title}
    description={data.description}
    email={data.email}
    phone={data.phone}
    {...getDefaultProps()}
  />
)

export default ContactPage
