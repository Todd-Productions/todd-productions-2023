import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface ContactTemplateProps extends DefaultTemplateProps {}

const ContactTemplate: React.FC<ContactTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      {...getSocialLinks(props)}
    >
      ContactTemplate
    </MainLayout>
  )
}

export default ContactTemplate
