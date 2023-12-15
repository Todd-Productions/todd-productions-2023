import { getCanonicalLink } from "../../../utils/common"
import data from "../../data/contact.json"
import { ContactTemplate } from "../../ui/templates"
import { getDefaultProps } from "../actions"

// types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const crumbs: ICrumb[] = [
  {
    label: "CONTACT US",
  },
]

export function generateMetadata() {
  return {
    title: "Video Production, Web Design, Graphic Designs - What Do You Need?",
    description:
      "Video Production, Web Design, Graphic Designs - What Do You Need?",
    alternates: {
      canonical: getCanonicalLink("contact-us"),
    },
  }
}

const ContactPage = () => (
  <ContactTemplate
    title={data.title}
    description={data.description}
    email={data.email}
    phone={data.phone}
    crumbs={crumbs}
    {...getDefaultProps()}
  />
)

export default ContactPage
