import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { DefaultTemplateProps } from "../HomeTemplate/HomeTemplate"
import SplitContentSection from "../../molecules/SplitContentSection/SplitContentSection"
import { Hero } from "../../atoms"
import { UrlType } from "../../../types"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"

export interface ServiceTemplateProps extends DefaultTemplateProps {
  bannerImg: UrlType
  contentBlocks: ISplitContent[]
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = (props) => {
  const { crumbs, headerLinks, footerLinks, bannerImg, contentBlocks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      <Hero img={bannerImg} />
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
    </MainLayout>
  )
}

export default ServiceTemplate
