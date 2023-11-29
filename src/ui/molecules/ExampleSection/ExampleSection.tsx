import React from "react"
import Image from "next/image"

import { Button, SectionHeading, Wrapper, VideoPlayer } from "../../atoms"
import { IButton } from "../../../types"
import "./example-section.css"

export interface IExampleProps {
  title: string
  description: string
  button: IButton
  videoLink?: string
  siteImg?: string
}

const ExampleSection: React.FC<IExampleProps> = (props) => {
  const { title, description, videoLink, button, siteImg } = props

  return (
    <section className="py-10">
      <Wrapper>
        <div className="pb-10 grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr]">
          <div className="order-2 md:order-1">
            <SectionHeading>{title}</SectionHeading>
            {button.link && (
              <a
                href={button.link as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button fullWidth>{button.label}</Button>
                heloo
              </a>
            )}
          </div>

          <div className="order-1 md:order-2">{description}</div>
        </div>
        <div className="media-container">
          {videoLink ? (
            <VideoPlayer videoId={videoLink.split("/embed/")[1]} />
          ) : (
            <div className="img-container">
              <Image src={siteImg as string} alt={title} fill />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ExampleSection
