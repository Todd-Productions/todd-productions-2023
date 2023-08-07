"use client"

import { HomeTemplate } from "../ui/templates"

import homeData from "../data/home.json"
import { navLinks, footerLinks, socialLinks } from "../../siteMeta"

import { getSocialLinks } from "../ui/molecules/Header/Header"

// @types
import { IPageInfoContent } from "../ui/molecules/PageInfoSection/PageInfoSection"
import { ISplitContent } from "../ui/molecules/SplitContentSection/SplitContentSection"
import { DefaultTemplateProps } from "../ui/templates/HomeTemplate/HomeTemplate"

// Setting type causes error - is not assignable to type 'never'.
const getDefaultProps = (): DefaultTemplateProps => ({
  headerLinks: navLinks,
  footerLinks,
  ...getSocialLinks(socialLinks),
})

const getTopCTA = (data: any): IPageInfoContent => ({
  title: data.pageInfoData.heading,
  description: (
    <div
      dangerouslySetInnerHTML={{
        __html: data.pageInfoData.description,
      }}
    />
  ),
  button: {
    label: data.pageInfoData.button.label,
    link: data.pageInfoData.button.link,
  },
})

const getSplitContent = (data: any): ISplitContent[] =>
  data.map((section: ISplitContent) => ({
    imageSrc: section.imageSrc,
    imageAlt: section.imageAlt,
    heading: section.heading,
    subHeading: section.subHeading,
    content: section.content,
    buttonLink: section.buttonLink,
    buttonLabel: section.buttonLabel,
  }))

const HomePage = () => (
  <HomeTemplate
    topCTAData={getTopCTA(homeData)}
    splitContent={getSplitContent(homeData.splitContent)}
    {...getDefaultProps()}
  />
)

export default HomePage
