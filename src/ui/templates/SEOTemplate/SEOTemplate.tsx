import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface SEOTemplateProps extends DefaultTemplateProps {}

const SEOTemplate: React.FC<SEOTemplateProps> = (props) => {
  const { crumbs, headerLinks, footerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      SEOTemplate
    </MainLayout>
  )
}

export default SEOTemplate
