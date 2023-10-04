import React from "react"
import Image from "next/image"

import { Button, SectionHeading, Wrapper } from "../../atoms"

import { IButton } from "../../../types"

import "./example-section.css"

export interface IExampleProps {
  title: string
  description: string
  videoLink?: string
  button: IButton
  siteImg?: string
}

const ExampleSection: React.FC<IExampleProps> = (props) => {
  const { title, description, videoLink, button, siteImg } = props
  return (
    <section className="pt-10">
      <Wrapper>
        <div className="pb-10 grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr]">
          <div className="header-container order-2 md:order-1">
            <SectionHeading>{title}</SectionHeading>
            <a
              href={button.link as string}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button fullWidth>{button.label}</Button>
            </a>
          </div>

          <div className="content order-1 md:order-2">{description}</div>
        </div>
        <div className="media-container">
          {videoLink ? (
            <div className="video-container mx-auto">
              <iframe
                src={videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="img-container mx-auto">
              <Image src={siteImg as string} alt={title} fill />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ExampleSection
