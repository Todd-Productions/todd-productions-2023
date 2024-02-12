import React from "react"
import slugify from "slugify"

import { getSocialLinks } from "../../molecules/Header/Header"
import { MainLayout } from "../../organisms"

import { INavLink, ISocialLinks } from "../../../types"
import { HomeHeroSection, SplitContentSection } from "../../molecules"
import { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"

// @types
import { IPageInfo } from "../../molecules/PageInfoSection/PageInfoSection"
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"

export interface DefaultTemplateProps extends ISocialLinks {
  crumbs?: ICrumb[]
  headerLinks: INavLink[]
  footerLinks: INavLink[]
}

export interface HomeTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfo
  splitContent: ISplitContent[]
}

export const getMainLayoutProps = (data: DefaultTemplateProps) => ({
  crumbs: data.crumbs,
  headerLinks: data.headerLinks,
  footerLinks: data.footerLinks,
  ...getSocialLinks(data),
})

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { topCTAData, splitContent } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <HomeHeroSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
        bannerImg={String(topCTAData.bannerImg)}
        {...getSocialLinks(props)}
      />

      {splitContent.map((section) => (
        <SplitContentSection
          heading={section.heading}
          subHeading={section.subHeading}
          content={section.content}
          button={section.button}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imgLeft={section.imgLeft}
          key={slugify(String(section.heading))}
        />
      ))}
    </MainLayout>
  )
}

export default HomeTemplate
