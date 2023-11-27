import React from "react"
import Link from "next/link"

import { PersonCard } from "../../molecules"
import {
  Section,
  Wrapper,
  SectionHeading,
  SectionSubHeading,
} from "../../atoms"

import "./team-members.css"

// @types
import { IMember } from "../../molecules/PersonCard/PersonCard"

export interface TeamMembersProps {
  title: string
  membersTitle: string
  members: IMember[]
}

const TeamMembers: React.FC<TeamMembersProps> = (props) => {
  const { title, membersTitle, members } = props

  return (
    <Section>
      <Wrapper>
        <div>
          <div className="heading-container flex justify-between items-start">
            <SectionHeading>{title}</SectionHeading>
            <div className="text-2xl leading-10">
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
          <ul className="our-values-list grid grid-cols-3 gap-x-8 leading-loose text-xl leading-normal">
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
        <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-8">
          {members.map((member) => (
            <PersonCard member={member} />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default TeamMembers
