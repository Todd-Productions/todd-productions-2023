import React from "react"

import { MainLayout } from "../../organisms"
import { getSocialLinks } from "../../molecules/Header/Header"

import { INavLink, ISocialLinks } from "../../../types"
import { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"
import { SplitContentSection } from "../../molecules"

// @types
import { ISplitContent } from "../../molecules/SplitContentSection/SplitContentSection"

export interface DefaultTemplateProps extends ISocialLinks {
  crumbs: ICrumb[]
  headerLinks: INavLink[]
  footerLinks: INavLink[]
  videoData: ISplitContent
  webData: ISplitContent
  otherData: ISplitContent
}

export interface HomeTemplateProps extends DefaultTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { crumbs, headerLinks, footerLinks } = props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      <SplitContentSection
        title="video production"
        subTitle="SALES, COMMERICAL, MUSIC, AND MORE"
        textContent="Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals."
        buttonLink="/"
        buttonText="see video types"
        imageSrc="https://source.unsplash.com/random"
        imageAlt=""
        imgleft
      />

      <SplitContentSection
        title="web services"
        subTitle="CONQUER THE WEB"
        textContent="Websites are the digital home of a business! While social media sites can serve as great marketing for you, businesses and organizations need to capitalize on both. At Todd Productions Inc. we’ll work with you to make your website the best that it can be."
        buttonLink="/"
        buttonText="view web services"
        imageSrc="https://source.unsplash.com/random"
        imageAlt=""
      />

      <SplitContentSection
        title="other services"
        subTitle="LOGO DESIGN, PRINT, AND MORE"
        textContent="In this high-tech world of smart phones and tablets, sometimes the best marketing tool is the good old-fashioned printed piece. For many companies, brochures, flyers, and direct mail pieces are just one aspect of their integrated marketing strategy that cuts across old and new technology. Need a brochure, flyer or direct mail piece? Perhaps a new logo or new photography to use in marketing tools? A place to record voice over? Or help with your social media presence? Todd Productions Inc. can help!"
        buttonLink="/"
        buttonText="see other services"
        imageSrc="https://source.unsplash.com/random"
        imageAlt=""
        imgleft
      />
    </MainLayout>
  )
}

export default HomeTemplate
