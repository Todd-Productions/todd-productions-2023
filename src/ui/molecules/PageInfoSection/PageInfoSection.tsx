"use client"

import React, { ReactNode } from "react"
import Link from "next/link"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import { Button, SectionHeading, Wrapper, Hero } from "../../atoms"
import { IButton } from "../../../types"
import "./pageinfosection.css"

export interface IPageInfo {
  title: string
  pageTitle?: string
  description: ReactNode
  button: IButton
  bannerImg?: string
  videoLink?: string
}

type SplitContentProps = IPageInfo

const PageInfoSection: React.FC<SplitContentProps> = ({
  title,
  description,
  button,
  bannerImg,
  videoLink,
}) => (
  <section>
    <Wrapper>
      <div className="py-10 grid gap-10 md:gap-y-10 gap-x-20 grid-cols-1 lg:grid-cols-[1fr_3fr] ">
        <div className="header-container order-3 lg:order-1">
          <SectionHeading>{title}</SectionHeading>
          <Link href={button.link}>
            <Button color="default" fullWidth>
              {button.label}
            </Button>
          </Link>
        </div>
        {videoLink ? (
          <div className="video-container order-2 lg:order-3 lg:col-start-2">
            <LiteYouTubeEmbed
              aspectHeight={9}
              aspectWidth={16}
              // Clean
              id={videoLink.split("/embed/")[1]}
              title="YouTube video player"
            />
          </div>
        ) : null}
        <div className="content leading-8 order-1 lg:order-2">
          {description}
        </div>
      </div>
    </Wrapper>
    {bannerImg ? (
      <div className="mt-8 hidden md:block">
        <Hero img={bannerImg} />
      </div>
    ) : null}
  </section>
)

export default PageInfoSection
