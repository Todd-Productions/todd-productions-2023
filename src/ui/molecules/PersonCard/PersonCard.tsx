"use client"

import React, { ReactNode, useState, useRef } from "react"

import Image from "next/image"
import { Content, Button } from "../../atoms"

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

  const [showBio, setShowBio] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const previewBio = `${String(bio).split(" ").slice(0, 29).join(" ")}...`

  const handleShowBio = () => {
    setShowBio(!showBio)
    contentRef.current?.scrollIntoView()
  }

  return (
    <figure ref={contentRef} className="person-card w-full h-fit">
      <div className="relative h-full w-full mx-auto person-img-container">
        <Image
          className="absolute w-full h-auto object-contain"
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
          <p className="opacity-95 text-lg uppercase mt-3">{title}</p>
          <Content>
            <div
              className="text-left mt-4 text-xl md:text-2xl leading-10"
              dangerouslySetInnerHTML={{
                __html: showBio ? String(bio) : String(previewBio),
              }}
            />
          </Content>
        </div>
      </figcaption>
      <div className="w-full text-center">
        <Button color="default" type="button" onClick={handleShowBio}>
          {showBio ? "Collapse" : "Read More"}
        </Button>
      </div>
    </figure>
  )
}

export default PersonCard
