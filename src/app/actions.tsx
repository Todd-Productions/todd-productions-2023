import { getSocialLinks } from "../ui/molecules/Header/Header"
import { navLinks, footerLinks, socialLinks } from "../../siteMeta"

// @types
import { IPageInfo } from "../ui/molecules/PageInfoSection/PageInfoSection"
import { ISplitContent } from "../ui/molecules/SplitContentSection/SplitContentSection"
import { ISEOMeta } from "../types"

export const getDefaultProps = (data?: ISEOMeta) => ({
  seoTitle: data?.seoTitle,
  seoDescription: data?.seoDescription,
  headerLinks: navLinks,
  footerLinks,
  ...getSocialLinks(socialLinks),
})

export const getTopCTA = (data: any): IPageInfo => ({
  title: data.heading,
  description: <div dangerouslySetInnerHTML={{ __html: data.description }} />,
  bannerImg: data.bannerImg,
  button: {
    label: data.button.label,
    link: data.button.link,
  },
  videoLink: data.videoLink,
})

export const getSplitContent = (data: any): ISplitContent[] =>
  data.map((section: ISplitContent) => ({
    imageSrc: section.imageSrc,
    imageAlt: section.imageAlt,
    heading: section.heading,
    subHeading: section.subHeading,
    content: section.content,
    button: section.button,
    imgLeft: section.imgLeft,
  }))
