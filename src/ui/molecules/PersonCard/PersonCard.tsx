import React, { ReactNode } from "react"

import Image from "next/image"

import { Button } from "../../atoms"

export interface IMember {
  img: string
  name: string
  title: string
  bio: ReactNode
  linkText?: string
}

// export type PersonClickType = (_: IMember) => void

export interface PersonCardProps {
  member: IMember
  // handleClick?: PersonClickType
  size?: number
  maxWidth?: number
}

const PersonCard: React.FC<PersonCardProps> = (props: PersonCardProps) => {
  const { member } = props
  const { img, name, title, linkText } = member

  return (
    <div className="flex flex-col items-stretch">
      <div className="transition-all duration-500 items-end flex-row bg-cover w-full h-full">
        <Image src={img} fill alt={name} />
      </div>
      <div className="flex flex-grow">
        <div>
          <div>{name}</div>
          <div>{title}</div>
          <div>
            <Button color="primary">{linkText ?? "Read Bio"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

PersonCard.defaultProps = {}

export default PersonCard
