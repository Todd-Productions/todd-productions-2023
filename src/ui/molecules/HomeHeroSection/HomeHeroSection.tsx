import React, { ReactNode } from "react"
import Image from "next/image"

import {
  SectionSubHeading,
  Wrapper,
  Hero,
  Content,
  VideoPlayer,
} from "../../atoms"
import { IButton } from "../../../types"
import "./HomeHeroSection.css"

export interface IPageInfo {
  title: string
  description: ReactNode
  button: IButton
  bannerImg: string
}

type SplitContentProps = IPageInfo

const HomeHeroSection: React.FC<SplitContentProps> = ({
  title,
  description,
  button,
  bannerImg,
}) => (
  <>
    <section>
      <Hero img={bannerImg} height={500} isVideo priority />
    </section>
    <section className="announcement pt-16">
      <Wrapper>
        <div className="text-grey-600 grid gap-y-10 md:gap-y-0 lg:grid-cols-[600px_1fr] gap-x-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-black text-4xl mb-8 uppercase">
              What&apos;s Next For Todd Productions?
            </h3>
            <div>
              <Image
                src="/images/logo-25-years.png"
                alt="logo"
                width={250}
                height={300}
                priority
              />
            </div>
          </div>
          <div className="text-left mb-2s">
            <Content>
              <p>
                As we turn the page on 2024 – and Todd Productions&apos; 25th
                year in business – we are thrilled to announce that we will soon
                be rebranded as Stanton Creative Media! This new name reflects
                our passion for creating stunning video and web presence that
                showcase your brand, vision and mission. Whether you need a
                promotional video, legacy film, a corporate website, SEO
                strategy or anything in between, we are here to help you achieve
                your goals. Stanton Creative Media is more than just a name
                change, it&apos;s a continued commitment to deliver quality,
                creativity, and professionalism in every project we do. Stay
                tuned for more exciting updates throughout January – including
                the full story of how we have evolved over the last quarter
                century.
              </p>
              <div className="mt-4">
                <SectionSubHeading isGrey>
                  Go behind the scenes and learn how Todd Stanton decided it was
                  time for a change.
                </SectionSubHeading>
              </div>
              <VideoPlayer videoId="vSxHnjO_Ox8" />
            </Content>
          </div>
        </div>
      </Wrapper>
      <div className="banner-bg relative w-full">
        <Image
          src="/images/placeholders/announcement.jpg"
          alt="background"
          fill
          className="absolute"
        />
      </div>
    </section>
    {/* <section className="bg-grey-600">
      <div className="text-white text-center py-16 px-8 mx-auto md:max-w-6xl">
        <h3 className="font-black text-4xl mb-8 uppercase">
          What&apos;s Next for Stanton Creative Media (A Todd Productions
          Company)?
        </h3>
        <div className="text-left mb-8">
          <Content textWhite>
            As we turn the page on 2024 – and Stanton Creative Media (A Todd
            Productions Company)&apos; 25th year in business – we are thrilled
            to announce that we will soon be rebranded as Stanton Creative
            Media! This new name reflects our passion for creating stunning
            video and web presence that showcase your brand, vision and mission.
            Whether you need a promotional video, legacy film, a corporate
            website, SEO strategy or anything in between, we are here to help
            you achieve your goals. Stanton Creative Media is more than just a
            name change, it&apos;s a continued commitment to deliver quality,
            creativity, and professionalism in every project we do. Stay tuned
            for more exciting updates throughout January – including the full
            story of how we have evolved over the last quarter century.
          </Content>
        </div>
        <SectionSubHeading isWhite>
          Go behind the scenes and learn how Todd Stanton decided it was time
          for a change.
        </SectionSubHeading>
      </div>
    </section> */}
    {/* <section>
      <Wrapper>
        <div className="pb-8 z-10">
          <div className="grid gap-0 xl:gap-20 grid-cols-1 xl:grid-cols-[1fr_3fr]">
            <div className="mt-4 order-2 xl:order-1">
              <SectionHeading>{title}</SectionHeading>
              <div className="mt-4">
                <Link href={button.link}>
                  <Button color="default" fullWidth>
                    {button.label}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="leading-8 content-container order-1">
              {description}
            </div>
          </div>
        </div>
      </Wrapper>
    </section> */}
  </>
)

export default HomeHeroSection
