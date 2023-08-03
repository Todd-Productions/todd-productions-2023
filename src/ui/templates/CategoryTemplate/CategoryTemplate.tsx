import React from "react"

import { MainLayout } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface CategoryTemplateProps extends DefaultTemplateProps {}

const CategoryTemplate: React.FC<CategoryTemplateProps> = (props) => (
  // const { crumbs, headerLinks, footerLinks } = props

  <MainLayout {...getMainLayoutProps(props)}>CategoryTemplate</MainLayout>
)

export default CategoryTemplate
