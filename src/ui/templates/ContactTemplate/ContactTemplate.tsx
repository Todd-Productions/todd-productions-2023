import React from "react"

import { MainLayout } from "@/ui/organisms"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface ContactTemplateProps extends DefaultTemplateProps {}

const ContactTemplate: React.FC<ContactTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout crumbs={crumbs} headerLinks={headerLinks}>
      ContactTemplate
    </MainLayout>
  )
}

export default ContactTemplate
