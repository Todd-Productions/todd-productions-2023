import React from "react"
import Image from "next/image"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import { Button, SectionHeading, Wrapper } from "../../atoms"
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
  console.log(videoLink)
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
              </a>
            )}
          </div>

          <div className="order-1 md:order-2">{description}</div>
        </div>
        <div className="media-container">
          {videoLink ? (
            <div className="video-container">
              <LiteYouTubeEmbed
                aspectHeight={9}
                aspectWidth={16}
                // Clean
                id={videoLink.split("/embed/")[1]}
                title="YouTube video player"
              />
            </div>
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
