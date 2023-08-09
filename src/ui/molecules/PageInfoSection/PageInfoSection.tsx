import React, { ReactNode } from "react"
import Link from "next/link"

import { Button, SectionHeading, Section, Wrapper, Hero } from "../../atoms"
import { UrlType, IButton } from "../../../types"
import "./pageinfosection.css"

export interface IPageInfoContent {
  title: string
  description: ReactNode
  button: IButton
  videoLink?: UrlType
  bannerImg?: string
}

type SplitContentProps = IPageInfoContent

const PageInfoSection: React.FC<SplitContentProps> = ({
  title,
  description,
  button,
  videoLink,
  bannerImg,
}) => (
  <Section>
    <Wrapper>
      <div className="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr]">
        <div className="header-container order-3 md:order-1">
          <SectionHeading>{title}</SectionHeading>
          <Link href={button.link}>
            <Button fullWidth>{button.label}</Button>
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

        <div className="leading-6 order-1 md:order-2">{description}</div>
      </div>
    </Wrapper>
    {bannerImg ? (
      <div className="mt-8">
        <Hero img={bannerImg} />
      </div>
    ) : null}
  </Section>
)

export default PageInfoSection
