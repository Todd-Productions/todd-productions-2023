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
  title: data.heading,
  description: <div dangerouslySetInnerHTML={{ __html: data.description }} />,
  bannerImg: data.bannerImg,
  videoLink: data.videoLink,
  button: {
    label: data.button.label,
    link: data.button.link,
  },
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
