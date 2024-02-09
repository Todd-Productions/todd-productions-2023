import React from "react"

import { PageInfoSection } from "../../molecules"
import { MainLayout } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"
import { IButton, UrlType } from "../../../types"

export interface BasicTemplateProps extends DefaultTemplateProps {
  title: string
  description: string
  button: IButton
  videoLink?: UrlType
  bannerImg?: string
}

const BasicTemplate: React.FC<BasicTemplateProps> = (props) => {
  const { title, description, button, videoLink, bannerImg } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={title}
        description={description}
        button={button}
        videoLink={videoLink as string}
        bannerImg={bannerImg as string}
      />
    </MainLayout>
  )
}

export default BasicTemplate
