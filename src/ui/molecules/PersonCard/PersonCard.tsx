import React, { ReactNode } from "react"

import Image from "next/image"

import "./person-card.css"

export interface IMember {
  img: string
  name: string
  title: string
  bio: ReactNode
  linkText?: string
}

export interface PersonCardProps {
  member: IMember
  size?: number
  maxWidth?: number
  handleClick?: (p: IMember) => void
}

const PersonCard: React.FC<PersonCardProps> = (props: PersonCardProps) => {
  const { member, handleClick } = props
  const { img, name, title } = member

  return (
    <figure className="person-card flex flex-col justify-center items-start w-full h-full transition-all hover:scale-105 cursor-pointer">
      <button
        type="button"
        onClick={() => handleClick && handleClick(member)}
        className="relative h-full w-full person-img-container"
      >
        <Image
          className="absolute w-full h-auto object-cover person-img"
          src={img}
          alt={name}
          fill
        />
      </button>
      <figcaption>
        <div className="capitalize text-black">
          <h4 className="font-normal">{name}</h4>
          <p className="opacity-50 ">{title}</p>
        </div>
      </figcaption>
    </figure>
  )
}

PersonCard.defaultProps = {}

export default PersonCard
