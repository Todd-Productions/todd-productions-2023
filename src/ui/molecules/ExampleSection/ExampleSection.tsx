import React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button, SectionHeading, Wrapper } from "../../atoms"

import { IButton } from "../../../types"

import "./example-section.css"

export interface IExampleProps {
  title: string
  description: string
  embededLink: string
  button: IButton
  img: string
}

const ExampleSection = (props: IExampleProps) => {
  const { title, description, embededLink, button, img } = props
  return (
    <section className="pt-10">
      <Wrapper>
        <div className="pb-10 grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr]">
          <div className="header-container order-2 md:order-1">
            <SectionHeading>{title}</SectionHeading>
            <Link href={button.link}>
              <Button fullWidth>{button.label}</Button>
            </Link>
          </div>

          <div className="content order-1 md:order-2">{description}</div>
        </div>
        <div className="media-container">
          {embededLink ? (
            <div className="video-container mx-auto">
              <iframe
                src={embededLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <Image src={img} alt={title} fill />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ExampleSection
