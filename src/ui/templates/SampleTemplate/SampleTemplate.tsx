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
  samples?: ISampleCard[]
}

const SampleTemplate: React.FC<SampleTemplateProps> = (props) => {
  const { samples, topCTAData } = props

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
          title={`EXAMPLES OF ${topCTAData.type}`}
          cards={samples}
          isCard={topCTAData.isCard}
        />
      ) : null}
    </MainLayout>
  )
}

export default SampleTemplate
