import React from "react"

import { MainLayout } from "@/ui/organisms"

import { getSocialLinks } from "@/ui/molecules/Header/Header"
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
