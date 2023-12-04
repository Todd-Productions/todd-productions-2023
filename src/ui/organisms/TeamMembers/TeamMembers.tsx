"use client"

import React from "react"
import slugify from "slugify"

import { PersonCard } from "../../molecules"
import { Section, Wrapper, SimpleSectionHeading, Content } from "../../atoms"

import "./team-members.css"

// @types
import { IMember } from "../../molecules/PersonCard/PersonCard"

export interface TeamMembersProps {
  title: string
  description: string
  members: IMember[]
}

const TeamMembers: React.FC<TeamMembersProps> = (props) => {
  const { title, description, members } = props

  return (
    <Section>
      <Wrapper>
        <SimpleSectionHeading>{title ?? "Our Team"}</SimpleSectionHeading>
        <div className="mb-12 mx-auto md:w-3/4">
          <Content>{description}</Content>
        </div>

        <div className="grid justify-items-center align-items-start md:grid-cols-2 h-full gap-x-20 lg:gap-x-40 gap-y-12">
          {members.map((member) => (
            <PersonCard
              key={slugify(`${member.name}-${member.title}`)}
              member={member}
            />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default TeamMembers
