import React from "react"

import { PageInfoSection, SEOPricing } from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { IButton, IPricingCard, UrlType } from "../../../types"

export interface SEOTemplateProps extends DefaultTemplateProps {
  title: string
  description: string
  videoBtn: IButton
  videoLink: UrlType
  seoTitle: string
  seoDescription: string
  seoPackages: IPricingCard[]
}

const SEOTemplate: React.FC<SEOTemplateProps> = (props) => {
  const {
    title,
    description,
    videoBtn,
    videoLink,
    seoTitle,
    seoDescription,
    seoPackages,
  } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={title}
        description={description}
        button={videoBtn}
        videoLink={videoLink}
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
