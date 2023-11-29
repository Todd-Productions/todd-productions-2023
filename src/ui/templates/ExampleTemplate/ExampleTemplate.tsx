import React from "react"

import { ExampleSection } from "../../molecules"
import { MainLayout } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"
import { IButton } from "../../../types"

export interface BasicTemplateProps extends DefaultTemplateProps {
  title: string
  description: string
  button: IButton
  videoLink?: string
  siteImg?: string
  loading?: string
}

const BasicTemplate: React.FC<BasicTemplateProps> = (props) => {
  const { title, description, button, videoLink, siteImg, loading } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      {!loading && (
        <ExampleSection
          title={title}
          description={description}
          button={button}
          videoLink={videoLink}
          siteImg={siteImg}
        />
      )}
    </MainLayout>
  )
}

export default BasicTemplate
