import React from "react"

import { MainLayout, ContactSection } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"
import { ContactProps } from "../../organisms/ContactSection/ContactSection"

export interface ContactTemplateProps
  extends DefaultTemplateProps,
    ContactProps {}

const ContactTemplate: React.FC<ContactTemplateProps> = (props) => {
  const {
    crumbs,
    headerLinks,
    footerLinks,
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
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
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
