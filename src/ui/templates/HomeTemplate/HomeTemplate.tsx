import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { INavLink, ISocialLinks } from "../../../types"
import { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"
import { SplitContentSection, PageInfoSection } from "../../molecules"

// @types
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"
import { IPageInfoContent } from "../../molecules/PageInfoSection/PageInfoSection"

export interface DefaultTemplateProps extends ISocialLinks {
  crumbs?: ICrumb[]
  headerLinks: INavLink[]
  footerLinks: INavLink[]
}

export interface HomeTemplateProps extends DefaultTemplateProps {
  topCTAData: IPageInfoContent
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
      <PageInfoSection
        title={topCTAData.title}
        description={topCTAData.description}
        button={topCTAData.button}
      />

      {splitContent.map((section, idx) => (
        <SplitContentSection
          heading={section.heading}
          subHeading={section.subHeading}
          content={section.content}
          buttonLink={section.buttonLink}
          buttonLabel={section.buttonLabel}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imgleft={idx % 2 === 0}
        />
      ))}
    </MainLayout>
  )
}

export default HomeTemplate
