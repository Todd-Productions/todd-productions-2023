import React from "react"

import { MainLayout, ServicesContent } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { ServicesContentProps } from "../../organisms/ServicesContent/ServicesContent"

export interface ServiceTemplateProps
  extends DefaultTemplateProps,
    ServicesContentProps {}

const ServiceTemplate: React.FC<ServiceTemplateProps> = (props) => {
  const { bannerImg, contentBlocks, topCTAData } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <ServicesContent
        bannerImg={bannerImg}
        topCTAData={topCTAData}
        contentBlocks={contentBlocks}
      />
    </MainLayout>
  )
}

export default ServiceTemplate
