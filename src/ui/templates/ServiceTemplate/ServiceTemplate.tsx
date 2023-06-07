import React from "react"

import { MainLayout } from "@/ui/organisms"

import { getSocialLinks } from "@/ui/molecules/Header/Header"
import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface ServiceTemplateProps extends DefaultTemplateProps {}

const ServiceTemplate: React.FC<ServiceTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      {...getSocialLinks(props)}
    >
      ServiceTemplate
    </MainLayout>
  )
}

export default ServiceTemplate
