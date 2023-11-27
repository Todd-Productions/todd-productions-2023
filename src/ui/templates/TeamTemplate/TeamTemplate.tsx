import React from "react"

import { MainLayout, TeamMembers } from "../../organisms"

import {
  DefaultTemplateProps,
  getMainLayoutProps,
} from "../HomeTemplate/HomeTemplate"

export interface TeamTemplateProps extends DefaultTemplateProps {}

const TeamTemplate: React.FC<TeamTemplateProps> = (props) => (
  // const {} = props

  <MainLayout {...getMainLayoutProps(props)}>
    <TeamMembers
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      membersTitle="Who Are We"
      members={[
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
        {
          img: "https://source.unsplash.com/random",
          name: "first last",
          title: "Senior Web Developer",
          bio: "This is a bio...",
          linkText: "/",
        },
      ]}
    />
  </MainLayout>
)

export default TeamTemplate
