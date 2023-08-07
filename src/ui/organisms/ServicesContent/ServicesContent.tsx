import React from "react"
import slugify from "slugify"

import { Hero } from "../../atoms"
import { SplitContentSection, PageInfoSection } from "../../molecules"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface ServicesContentProps {
  bannerImg: string
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
          buttonLabel={section.buttonLabel}
          buttonLink={section.buttonLink}
          imgleft={section.imgleft}
          key={slugify(section.title)}
        />
      ))}
    </div>
  )
}

export default ServicesContent
