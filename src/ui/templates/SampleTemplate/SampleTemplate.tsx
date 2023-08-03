import React from "react"

import { Hero } from "../../atoms"
import { PageInfoSection, SampleCardSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"
import { ISampleCard } from "../../../types"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SampleTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfoContent
  bannerImg: string
  samples: ISampleCard[]
  samplesTitle: string
}

const SampleTemplate: React.FC<SampleTemplateProps> = (props) => {
  const {
    crumbs,
    headerLinks,
    footerLinks,
    samples,
    samplesTitle,
    topCTAData,
    bannerImg,
  } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
      />

      <Hero img={bannerImg} />

      <SampleCardSection title={samplesTitle} cards={samples} />
    </MainLayout>
  )
}

export default SampleTemplate
