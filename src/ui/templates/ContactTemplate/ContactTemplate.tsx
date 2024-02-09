import React from "react"

import { AlertSection } from "@/ui/molecules"
import { MainLayout, ContactSection } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"
import { ContactProps } from "../../organisms/ContactSection/ContactSection"

export interface ContactTemplateProps
  extends DefaultTemplateProps,
    ContactProps {}

const ContactTemplate: React.FC<ContactTemplateProps> = (props) => {
  const {
    title,
    description,
    email,
    phone,
    facebook,
    linkedin,
    instagram,
    twitter,
  } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AlertSection />

      <ContactSection
        title={title}
        description={description}
        email={email}
        phone={phone}
        facebook={facebook}
        linkedin={linkedin}
        instagram={instagram}
        twitter={twitter}
      />
    </MainLayout>
  )
}

export default ContactTemplate
