import React from "react"

import { Hero } from "../../atoms"
import { SplitContentSection, BasicContentSection } from "../../molecules/"
import { UrlType } from "../../../types"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IBasicContent } from "../../molecules/BasicContentSection/BasicContentSection"

export interface ServicesContetProps {
  bannerImg: UrlType
  contentBlocks: ISplitContent[]
  topCTAData: IBasicContent
}

const ServicesContent: React.FC<ServicesContetProps> = (props) => {
  const { bannerImg, contentBlocks, topCTAData } = props
  return (
    <div>
      <BasicContentSection
        title={topCTAData.title}
        textContent={topCTAData.textContent}
        buttonText={topCTAData.buttonText}
        buttonLink={topCTAData.buttonLink}
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
