import React from "react"

import { MainLayout } from "@/ui/organisms"

import { INavLink } from "@/types"
import { ICrumb } from "@/ui/molecules/Breadcrumbs/Breadcrumbs"

export interface DefaultTemplateProps {
  crumbs: ICrumb[]
  headerLinks: INavLink[]
}

export interface HomeTemplateProps extends DefaultTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout crumbs={crumbs} headerLinks={headerLinks}>
      Home Template
    </MainLayout>
  )
}

export default HomeTemplate
