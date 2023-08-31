import React from "react"

import { PageInfoSection, SampleCardSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import {
  getMainLayoutProps,
  DefaultTemplateProps,
} from "../HomeTemplate/HomeTemplate"

import { ISampleCard } from "../../../types"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface SampleTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfoContent
  bannerImg: string
  samples?: ISampleCard[]
  samplesTitle?: string
}

const SampleTemplate: React.FC<SampleTemplateProps> = (props) => {
  const { samples, samplesTitle, topCTAData, bannerImg } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        bannerImg={bannerImg}
        videoLink={topCTAData.videoLink}
      />

      {samplesTitle && samples ? (
        <SampleCardSection
          title={samplesTitle}
          cards={samples}
          isCard={topCTAData.isCard}
        />
      ) : null}
    </MainLayout>
  )
}

export default SampleTemplate
