"use client"

import React, { useState } from "react"
import Link from "next/link"
import slugify from "slugify"

import { PersonCard } from "../../molecules"
import {
  Section,
  Wrapper,
  SectionHeading,
  SectionSubHeading,
  Modal,
  Content,
} from "../../atoms"

import "./team-members.css"

// @types
import { IMember } from "../../molecules/PersonCard/PersonCard"

export interface TeamMembersProps {
  title: string
  membersTitle: string
  members: IMember[]
}

interface TeamModalProps {
  member?: IMember
  on: boolean
  toggle: () => void
}

const TeamModal: React.FC<TeamModalProps> = (props: TeamModalProps) => {
  const { member, on, toggle } = props

  return (
    <Modal on={on} toggle={toggle}>
      {member && (
        <div>
          <h2 className="capitalize text-black font-black text-3xl m-0 mb-1 text-center">
            {member?.name}
          </h2>
          <h3 className="capitalize text-black text-grey-600 text-2xl m-0 mb-4 text-center">
            {member?.title}
          </h3>
          <div>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: String(member.bio) }} />
            </Content>
          </div>
        </div>
      )}
    </Modal>
  )
}

const TeamMembers: React.FC<TeamMembersProps> = (props) => {
  const { title, membersTitle, members } = props
  const [on, setOn] = useState(false)
  const [member, setMember] = useState<IMember | undefined>(undefined)

  const toggle = () => {
    setOn((o) => !o)
  }

  // Open Modal
  const openModal = (p: IMember) => {
    const currentPerson: IMember = p
    setMember(currentPerson)
    setOn(true)
  }

  return (
    <Section>
      <Wrapper>
        <TeamModal on={on} toggle={toggle} member={member} />

        <div>
          <div className="heading-container flex flex-col gap-y-4 lg:gap-10 lg:flex-row justify-between items-start">
            <div className="ml-8">
              <SectionHeading>{title}</SectionHeading>
            </div>
            <div className="text-xl md:text-2xl leading-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque commodo et justo eu tempor. Cras nec tincidunt
                ligula, ut pretium eros. Maecenas vestibulum bibendum lacus, eu
                ornare eros viverra vitae.
              </p>

              <p className="mt-8">
                Interested in how we can help you?{" "}
                <Link
                  href="/contact-us"
                  className="text-blue-500 hover:underline"
                >
                  Let&apos;s talk.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="my-20">
          <SectionSubHeading>Our Values</SectionSubHeading>
          <ul className="our-values-list grid md:grid-cols-3 gap-x-8 leading-loose text-xl leading-normal">
            <li>
              <h4>One</h4>
              <p>
                Quisque gravida malesuada mi, at aliquet quam tempus a.
                Curabitur bibendum commodo orci, a hendrerit nisl pellentesque
                id.
              </p>
            </li>
            <li>
              <h4>Two</h4>
              <p>
                Quisque gravida malesuada mi, at aliquet quam tempus a.
                Curabitur bibendum commodo orci, a hendrerit nisl pellentesque
                id.
              </p>
            </li>
            <li>
              <h4>Three</h4>
              <p>
                Quisque gravida malesuada mi, at aliquet quam tempus a.
                Curabitur bibendum commodo orci, a hendrerit nisl pellentesque
                id.
              </p>
            </li>
          </ul>
        </div>

        <SectionSubHeading>{membersTitle ?? "Who Are We"}</SectionSubHeading>
        <div className="grid justify-items-center sm:grid-cols-2 h-full gap-x-8 gap-y-12">
          {members.map((member) => (
            <PersonCard
              key={slugify(`${member.name}-${member.title}`)}
              member={member}
              handleClick={openModal}
            />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default TeamMembers
