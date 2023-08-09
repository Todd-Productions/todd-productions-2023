import React from "react"

import { PageInfoSection } from "../../molecules"
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
}

const BasicTemplate: React.FC<BasicTemplateProps> = (props) => {
  const { title, description, button } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={title}
        description={description}
        button={button}
      />
    </MainLayout>
  )
}

export default BasicTemplate
