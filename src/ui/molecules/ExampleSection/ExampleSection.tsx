import React from "react"
import Image from "next/image"

import {
  Button,
  SectionHeading,
  Wrapper,
  VideoPlayer,
  Content,
} from "../../atoms"
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

          <div className="order-1 md:order-2 bg-white">
            <Content>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Content>
          </div>
        </div>

        <div className="media-container px-10 mx-auto">
          {videoLink ? (
            <VideoPlayer videoId={videoLink.split("/embed/")[1]} />
          ) : (
            <div className="video-container relative mx-auto">
              <Image
                src={siteImg as string}
                alt={title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                style={{
                  objectFit: "contain",
                  objectPosition: "top",
                }}
                priority
              />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ExampleSection
