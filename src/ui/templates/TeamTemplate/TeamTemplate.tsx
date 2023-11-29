import React from "react"

import { IMember } from "@/ui/molecules/PersonCard/PersonCard"
import { MainLayout, TeamMembers } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface TeamTemplateProps extends DefaultTemplateProps {
  members: IMember[]
}

const TeamTemplate: React.FC<TeamTemplateProps> = (props) => {
  const { members } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <TeamMembers
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        membersTitle="Who Are We"
        members={members}
      />
    </MainLayout>
  )
}

export default TeamTemplate
