import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface CategoryTemplateProps extends DefaultTemplateProps {}

const CategoryTemplate: React.FC<CategoryTemplateProps> = (props) => {
  const { crumbs, headerLinks, footerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      CategoryTemplate
    </MainLayout>
  )
}

export default CategoryTemplate
