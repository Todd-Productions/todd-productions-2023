import React from "react"

import { PageInfoSection } from "../../molecules"
import { MainLayout, TeamMembers } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

// @types
import { IButton, UrlType } from "../../../types"
import { IMember } from "../../molecules/PersonCard/PersonCard"

export interface WhoAreWeTemplateProps extends DefaultTemplateProps {
  title: string
  description: string
  button: IButton
  videoLink?: UrlType
  bannerImg?: string
  membersTitle: string
  membersDescription: string
  members: IMember[]
}

const WhoAreWeTemplate: React.FC<WhoAreWeTemplateProps> = (props) => {
  const {
    title,
    description,
    button,
    videoLink,
    bannerImg,
    membersTitle,
    membersDescription,
    members,
  } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <PageInfoSection
        title={title}
        description={description}
        button={button}
        videoLink={videoLink as string}
        bannerImg={bannerImg as string}
      />

      <TeamMembers
        members={members}
        title={membersTitle}
        description={membersDescription}
      />
    </MainLayout>
  )
}

export default WhoAreWeTemplate
