import React from "react"
import slugify from "slugify"

import { SplitContentSection, PageInfoSection } from "../../molecules"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IPageInfo } from "../../molecules/PageInfoSection/PageInfoSection"

export interface ServicesContentProps {
  contentBlocks: ISplitContent[]
  topCTAData: IPageInfo
}

const ServicesContent: React.FC<ServicesContentProps> = (props) => {
  const { contentBlocks, topCTAData } = props
  return (
    <div>
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        bannerImg={topCTAData.bannerImg}
      />

      {contentBlocks.map((section, idx) => (
        <SplitContentSection
          heading={section.heading}
          subHeading={section.subHeading}
          content={section.content}
          imageSrc={section.imageSrc}
          imageAlt={
            section.imageAlt.length ? section.imageAlt : section.heading
          }
          button={section.button}
          imgLeft={section.imgLeft}
          key={slugify(String(idx))}
        />
      ))}
    </div>
  )
}

export default ServicesContent
