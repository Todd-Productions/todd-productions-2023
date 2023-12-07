"use client"

import React, { ReactNode } from "react"
import Link from "next/link"

import {
  Button,
  SectionHeading,
  Wrapper,
  Hero,
  VideoPlayer,
  Content,
} from "../../atoms"
import { IButton } from "../../../types"

export interface IPageInfo {
  title: string
  pageTitle?: string
  description: ReactNode
  button: IButton
  bannerImg?: string
  videoLink?: string
  seoTitle?: string
  seoDescription?: string
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
          <SectionHeading headingLevel="h1">{title}</SectionHeading>
          <Link href={button.link}>
            <Button color="default" fullWidth>
              {button.label}
            </Button>
          </Link>
        </div>
        {videoLink ? (
          <div className="order-2 lg:order-3 lg:col-start-2">
            <VideoPlayer videoId={videoLink.split("/embed/")[1]} />
          </div>
        ) : null}
        <div className="order-1 lg:order-2">
          <Content>{description}</Content>
        </div>
      </div>
    </Wrapper>
    {bannerImg ? (
      <div className="mt-8 hidden md:block">
        <Hero img={bannerImg} objectPosition="center 20%" priority />
      </div>
    ) : null}
  </section>
)

export default PageInfoSection
