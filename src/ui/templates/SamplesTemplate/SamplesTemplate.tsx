import React from "react"

import {
  PageInfoSection,
  SampleCardSection,
  AlertSection,
} from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { IPageInfo } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SampleTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfo
  samples?: any[]
  isCard?: boolean
  samplesTitle: string
}

const SamplesTemplate: React.FC<SampleTemplateProps> = (props) => {
  const { samples, topCTAData, isCard, samplesTitle } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AlertSection />

      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        bannerImg={topCTAData.bannerImg}
        videoLink={topCTAData.videoLink}
      />

      {samples ? (
        <SampleCardSection
          title={`EXAMPLES OF ${samplesTitle}`}
          cards={samples}
          isCard={isCard}
        />
      ) : null}
    </MainLayout>
  )
}

export default SamplesTemplate
