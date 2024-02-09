import React from "react"

import { MainLayout, ServicesContent } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
  HomeTemplateProps,
} from "../HomeTemplate/HomeTemplate"

export interface ServiceTemplateProps
  extends DefaultTemplateProps,
    HomeTemplateProps {}

const ServiceTemplate: React.FC<ServiceTemplateProps> = (props) => {
  const { splitContent, topCTAData } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <ServicesContent topCTAData={topCTAData} contentBlocks={splitContent} />
    </MainLayout>
  )
}

export default ServiceTemplate
