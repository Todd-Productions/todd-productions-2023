import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"
import { ServicesContetProps } from "../../organisms/ServicesContent/ServicesContent"
import { ServicesContent } from "../../organisms"

export interface ServiceTemplateProps
  extends DefaultTemplateProps,
    ServicesContetProps {}

const ServiceTemplate: React.FC<ServiceTemplateProps> = (props) => {
  const {
    crumbs,
    headerLinks,
    footerLinks,
    bannerImg,
    contentBlocks,
    topCTAData,
  } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      <ServicesContent
        bannerImg={bannerImg}
        topCTAData={topCTAData}
        contentBlocks={contentBlocks}
      />
    </MainLayout>
  )
}

export default ServiceTemplate
