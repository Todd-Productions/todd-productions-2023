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
        title="Who Are We"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor risus. Nam porttitor aliquam egestas. Etiam pulvinar orci sed dictum fringilla. Sed mollis luctus consectetur. Duis ac diam vitae nulla rutrum sollicitudin. Aliquam laoreet tortor risus, vel hendrerit neque imperdiet quis. Etiam dignissim quam felis, in mollis arcu tincidunt vitae. Etiam ipsum nulla, elementum lobortis nisi quis, hendrerit commodo velit."
        members={members}
      />
    </MainLayout>
  )
}

export default TeamTemplate
