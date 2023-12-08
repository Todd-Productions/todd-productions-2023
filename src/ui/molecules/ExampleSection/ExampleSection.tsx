import React from "react"
import Image from "next/image"

import { Button, SectionHeading, Wrapper, VideoPlayer } from "../../atoms"
import { IButton } from "../../../types"
import "./example-section.css"

import image from "../../../../public/images/placeholders/marketing-sites/apca-fullpage.png"

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
        <div className="pb-10 grid gap-x-10 grid-cols-1 md:grid-cols-[2fr_3fr]">
          <div className="order-2 md:order-1">
            <SectionHeading headingLevel="h1">{title}</SectionHeading>
            {button.link && (
              <a
                href={button.link as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button fullWidth>{button.label}</Button>
              </a>
            )}
          </div>

          <div className="order-1 md:order-2 bg-white">{description}</div>
        </div>

        <div className="media-container mx-auto">
          {videoLink ? (
            <VideoPlayer videoId={videoLink.split("/embed/")[1]} />
          ) : (
            <div className="img-container relative mx-auto">
              <Image
                className="absolute"
                src={siteImg as string}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ExampleSection
