import React from "react"

import { PageInfoSection, AlertSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { IPricingCard } from "../../atoms/PricingCard/PricingCard"
import { IPageInfo } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SEOTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfo
  seoSectionTitle: string
  seoSectionDescription: string
  seoPackages: IPricingCard[]
}

const SEOTemplate: React.FC<SEOTemplateProps> = (props) => {
  const { topCTAData } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AlertSection />
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        videoLink={topCTAData.videoLink}
      />
      {/* <SEOPricing
        title={seoSectionTitle}
        description={seoSectionDescription}
        packages={seoPackages}
      /> */}
    </MainLayout>
  )
}

export default SEOTemplate
