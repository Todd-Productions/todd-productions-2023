"use client"

import { HomeTemplate } from "../ui/templates"

import homeData from "../data/home.json"
import { navLinks, footerLinks } from "../../siteMeta"

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
const HomePage = () => (
  <HomeTemplate
    topCTAData={{
      title: homeData.pageInfoData.title,
      description: (
        <div
          dangerouslySetInnerHTML={{
            __html: homeData.pageInfoData.description,
          }}
        />
      ),
      button: {
        label: homeData.pageInfoData.button.label,
        link: homeData.pageInfoData.button.link,
      },
    }}
    videoData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "VIDEO PRODUCTION",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    webData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "web services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    otherData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "other services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    {...getDefaultProps()}
  />
)

export default HomePage
