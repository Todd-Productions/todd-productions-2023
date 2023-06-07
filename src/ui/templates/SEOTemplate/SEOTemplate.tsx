import React from "react"

import { MainLayout } from "@/ui/organisms"

import { getSocialLinks } from "@/ui/molecules/Header/Header"
import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface SEOTemplateProps extends DefaultTemplateProps {}

const SEOTemplate: React.FC<SEOTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      {...getSocialLinks(props)}
    >
      SEOTemplate
    </MainLayout>
  )
}

export default SEOTemplate
