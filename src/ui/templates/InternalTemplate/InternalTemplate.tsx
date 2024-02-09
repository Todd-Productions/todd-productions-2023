import React, { ReactNode } from "react"

import { InternalSection } from "../../molecules"
import { MainLayout } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface BasicTemplateProps extends DefaultTemplateProps {
  children: ReactNode
}

const BasicTemplate: React.FC<BasicTemplateProps> = (props) => {
  const { children } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <InternalSection>{children}</InternalSection>
    </MainLayout>
  )
}

export default BasicTemplate
