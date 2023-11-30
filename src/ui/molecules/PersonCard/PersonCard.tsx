import React, { ReactNode } from "react"

import Image from "next/image"
import { Content } from "../../atoms"

import "./person-card.css"

export interface IMember {
  img: string
  name: string
  title: string
  bio: ReactNode
}

export interface PersonCardProps {
  member: IMember
  size?: number
  maxWidth?: number
}

const PersonCard: React.FC<PersonCardProps> = (props: PersonCardProps) => {
  const { member } = props
  const { img, name, title, bio } = member

  return (
    <figure className="person-card w-full h-fit">
      <div className="relative h-full w-full mx-auto person-img-container">
        <Image
          className="absolute w-full h-auto object-cover rounded-full"
          src={img}
          alt={name}
          fill
        />
      </div>

      <figcaption className="w-full text-center">
        <div>
          <h4 className="font-black text-blue-500 text-2xl mt-5 uppercase">
            {name}
          </h4>
          <p className="opacity-95 text-lg uppercase">{title}</p>
          <Content>
            <div
              className="text-left mt-4"
              dangerouslySetInnerHTML={{ __html: String(bio) }}
            />
          </Content>
        </div>
      </figcaption>
    </figure>
  )
}

PersonCard.defaultProps = {}

export default PersonCard
