import React from "react"
import slugify from "slugify"

import { SplitContentSection, PageInfoSection } from "../../molecules"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface ServicesContentProps {
  contentBlocks: ISplitContent[]
  topCTAData: IPageInfoContent
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
          imageAlt={section.imageAlt}
          buttonLabel={section.buttonLabel}
          buttonLink={section.buttonLink}
          imgleft={idx % 2 === 0}
          key={slugify(section.heading)}
        />
      ))}
    </div>
  )
}

export default ServicesContent
