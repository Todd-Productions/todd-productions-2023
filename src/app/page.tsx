"use client"

import { HomeTemplate } from "../ui/templates"

import homeData from "../data/home.json"
import { navLinks, footerLinks } from "../../siteMeta"

// @types
import { IPageInfoContent } from "../ui/molecules/PageInfoSection/PageInfoSection"
import { ISplitContent } from "../ui/molecules/SplitContentSection/SplitContentSection"

// Setting type causes error
const getDefaultProps = () => ({
  headerLinks: navLinks,
  footerLinks,
  facebook: "/",
  twitter: "/",
  youtube: "/",
  instagram: "/",
  linkedin: "/",
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

const getSplitContent = (data: any): ISplitContent => ({
  imageSrc: data.imageSrc,
  imageAlt: data.imageAlt,
  title: data.heading,
  subTitle: data.subHeading,
  textContent: data.content,
  buttonLink: data.buttonLink,
  buttonLabel: data.buttonLabel,
})

const HomePage = () => (
  <HomeTemplate
    topCTAData={getTopCTA(homeData)}
    videoData={getSplitContent(homeData.videoData)}
    webData={getSplitContent(homeData.webData)}
    otherData={getSplitContent(homeData.otherData)}
    {...getDefaultProps()}
  />
)

export default HomePage
