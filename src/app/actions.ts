import { navLinks, footerLinks, socialLinks } from "../../siteMeta"
import { getSocialLinks } from "../ui/molecules/Header/Header"
import { IPageInfoContent } from "../ui/molecules/PageInfoSection/PageInfoSection"
import { ISplitContent } from "../ui/molecules/SplitContentSection/SplitContentSection"

export const getDefaultProps = (): any => ({
  headerLinks: navLinks,
  footerLinks,
  ...getSocialLinks(socialLinks),
})

export const getTopCTA = (data: any): IPageInfoContent => ({
  title: data.pageInfoData.heading,
  description: data.pageInfoData.description,
  button: {
    label: data.pageInfoData.button.label,
    link: data.pageInfoData.button.link,
  },
})

export const getSplitContent = (data: any): ISplitContent[] =>
  data.map((section: ISplitContent) => ({
    imageSrc: section.imageSrc,
    imageAlt: section.imageAlt,
    heading: section.heading,
    subHeading: section.subHeading,
    content: section.content,
    buttonLink: section.buttonLink,
    buttonLabel: section.buttonLabel,
  }))
