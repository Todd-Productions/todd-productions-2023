import React, { ReactNode } from "react"
import Link from "next/link"

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
  <section className="pt-10">
    <Wrapper>
      <div className="pb-10 grid gap-10 md:gap-20 grid-cols-1 lg:grid-cols-[1fr_3fr]">
        <div className="header-container order-3 md:order-1">
          <SectionHeading>{title}</SectionHeading>
          <Link href={button.link}>
            <Button fullWidth>{button.label}</Button>
          </Link>
        </div>
        {videoLink ? (
          <div className="video-container order-2 md:order-3 md:col-start-2">
            <iframe
              src={videoLink as string}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}
        <div className="content order-1 md:order-2">{description}</div>
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
