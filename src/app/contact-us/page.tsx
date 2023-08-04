"use client"

import { ContactTemplate } from "../../ui/templates"
import { navLinks, footerLinks } from "../../../siteMeta"

// import { getDefaultProps } from "../page"

const ContactPage = () => (
  <ContactTemplate
    title={"let's talk business"}
    description="We appreciate your visit to our website. We look forward to hearing from you. Give us a call or email us... whatever is convenient for you."
    email="contact@toddprod.com"
    phone="419-290-0794"
    headerLinks={navLinks}
    footerLinks={footerLinks}
  />
)

export default ContactPage
