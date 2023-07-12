import React from "react"

import { Hero } from "../../atoms"
import { SplitContentSection, PageInfoSection } from "../../molecules"
import { UrlType } from "../../../types"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface ServicesContentProps {
  bannerImg: UrlType
  contentBlocks: ISplitContent[]
  topCTAData: IPageInfoContent
}

const ServicesContent: React.FC<ServicesContentProps> = (props) => {
  const { bannerImg, contentBlocks, topCTAData } = props
  return (
    <div>
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
      />
      {bannerImg && <Hero img={bannerImg} />}
      {contentBlocks.map((section) => (
        <SplitContentSection
          title={section.title}
          subTitle={section.subTitle}
          textContent={section.textContent}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          buttonText={section.buttonText}
          buttonLink={section.buttonLink}
          imgleft={section.imgleft}
        />
      ))}
    </div>
  )
}

export default ServicesContent
