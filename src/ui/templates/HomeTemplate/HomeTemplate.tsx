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
  const { crumbs, headerLinks, footerLinks, videoData, webData, otherData } =
    props

  return (
    <MainLayout
      crumbs={crumbs}
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      {...getSocialLinks(props)}
    >
      <SplitContentSection
        title={videoData.title}
        subTitle={videoData.subTitle}
        textContent={videoData.textContent}
        buttonLink={videoData.buttonLink}
        buttonText={videoData.buttonText}
        imageSrc={videoData.imageSrc}
        imageAlt={videoData.imageAlt}
        imgleft
      />

      <SplitContentSection
        title={webData.title}
        subTitle={webData.subTitle}
        textContent={webData.textContent}
        buttonLink={webData.buttonLink}
        buttonText={webData.buttonText}
        imageSrc={webData.imageSrc}
        imageAlt={webData.imageAlt}
      />

      <SplitContentSection
        title={otherData.title}
        subTitle={otherData.subTitle}
        textContent={otherData.textContent}
        buttonLink={otherData.buttonLink}
        buttonText={otherData.buttonText}
        imageSrc={otherData.imageSrc}
        imageAlt={otherData.imageAlt}
        imgleft
      />
    </MainLayout>
  )
}

export default HomeTemplate
