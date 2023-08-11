import React from "react"

import { PageInfoSection, SEOPricing } from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { IPricingCard } from "../../../types"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SEOTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfoContent
  seoTitle: string
  seoDescription: string
  seoPackages: IPricingCard[]
}

const SEOTemplate: React.FC<SEOTemplateProps> = (props) => {
  const { topCTAData, seoTitle, seoDescription, seoPackages } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        videoLink={topCTAData.videoLink}
      />
      <SEOPricing
        title={seoTitle}
        description={seoDescription}
        packages={seoPackages}
      />
    </MainLayout>
  )
}

export default SEOTemplate
