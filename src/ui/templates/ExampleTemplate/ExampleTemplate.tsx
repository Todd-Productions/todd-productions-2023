import React from "react"

import { ExampleSection } from "../../molecules"
import { MainLayout } from "../../organisms"

import { IButton } from "../../../types"
import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface BasicTemplateProps extends DefaultTemplateProps {
  title: string
  description: string
  button: IButton
  videoLink?: string
  siteImg?: string
}

const ExampleTemplatte: React.FC<BasicTemplateProps> = (props) => {
  const { title, description, button, videoLink, siteImg } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <ExampleSection
        title={title}
        description={description}
        button={button}
        videoLink={videoLink}
        siteImg={siteImg}
      />
    </MainLayout>
  )
}

export default ExampleTemplatte
