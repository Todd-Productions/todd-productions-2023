import React from "react"

import { MainLayout } from "@/ui/organisms"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"

export interface CategoryTemplateProps extends DefaultTemplateProps {}

const CategoryTemplate: React.FC<CategoryTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout crumbs={crumbs} headerLinks={headerLinks}>
      CategoryTemplate
    </MainLayout>
  )
}

export default CategoryTemplate
