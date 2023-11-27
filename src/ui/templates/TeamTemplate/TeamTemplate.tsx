import React from "react"

import { MainLayout } from "../../organisms"
import { PersonCard } from "../../molecules"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface TeamTemplateProps extends DefaultTemplateProps {}

const TeamTemplate: React.FC<TeamTemplateProps> = (props) => (
  // const {} = props

  <MainLayout {...getMainLayoutProps(props)}>
    <PersonCard
      member={{
        img: "",
        name: "first last",
        title: "Senior Web Developer",
        bio: "This is a bio...",
        linkText: "/",
      }}
    />
  </MainLayout>
)

export default TeamTemplate
