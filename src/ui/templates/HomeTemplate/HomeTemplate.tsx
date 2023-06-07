import React from "react"

import { MainLayout } from "@/ui/organisms"

import { INavLink, ISocialLinks } from "@/types"
import { ICrumb } from "@/ui/molecules/Breadcrumbs/Breadcrumbs"
import { getSocialLinks } from "@/ui/molecules/Header/Header"

export interface DefaultTemplateProps extends ISocialLinks {
  crumbs: ICrumb[]
  headerLinks: INavLink[]
}

export interface HomeTemplateProps extends DefaultTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { crumbs, headerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      {...getSocialLinks(props)}
    >
      Home Template
    </MainLayout>
  )
}

export default HomeTemplate
