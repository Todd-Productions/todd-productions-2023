import React from "react"

import { PageInfoSection, SampleCardSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { ISampleCard } from "../../atoms/SampleCard/SampleCard"
import { IPageInfo } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SampleTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfo
  samples?: ISampleCard[]
  isCard?: boolean
  samplesTitle: string
}

const SamplesTemplate: React.FC<SampleTemplateProps> = (props) => {
  const { samples, topCTAData, isCard, samplesTitle } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
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
