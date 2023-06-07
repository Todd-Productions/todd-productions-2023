import React from "react"

import { MainLayout } from "@/ui/organisms"
import { getSocialLinks } from "@/ui/molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface CategoryTemplateProps extends DefaultTemplateProps {}

const CategoryTemplate: React.FC<CategoryTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      {...getSocialLinks(props)}
    >
      CategoryTemplate
    </MainLayout>
  )
}

export default CategoryTemplate
