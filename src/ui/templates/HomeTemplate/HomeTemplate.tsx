import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { INavLink, ISocialLinks } from "../../../types"
import { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"

export interface DefaultTemplateProps extends ISocialLinks {
  crumbs: ICrumb[]
  headerLinks: INavLink[]
  footerLinks: INavLink[]
}

export interface HomeTemplateProps extends DefaultTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { crumbs, headerLinks, footerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      Home Template
    </MainLayout>
  )
}

export default HomeTemplate
