import React, { ReactNode } from "react"
import Link from "next/link"

import { Button, SectionHeading, Section, Wrapper } from "../../atoms"
import { UrlType } from "../../../types"
import "./pageinfosection.css"

export interface IPageInfoContent {
  title: string
  textContent: ReactNode
  buttonLink: UrlType
  buttonText: string
  videoLink?: UrlType
}

export interface SplitContentProps extends IPageInfoContent {}

const PageInfoSection: React.FC<SplitContentProps> = ({
  title,
  textContent,
  buttonLink,
  buttonText,
  videoLink,
}) => (
  <Section>
    <Wrapper>
      <div className="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr] px-10">
        <div className="order-3 md:order-1">
          <SectionHeading>{title}</SectionHeading>
          <Link href={buttonLink}>
            <Button fullWidth>{buttonText}</Button>
          </Link>
        </div>
        {videoLink ? (
          <div className="video-container order-2 md:order-3 md:col-start-2 bg-black">
            <iframe
              src={videoLink as string}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}
        <div className="leading-6 order-1 md:order-2">{textContent}</div>
      </div>
    </Wrapper>
  </Section>
)

export default PageInfoSection
