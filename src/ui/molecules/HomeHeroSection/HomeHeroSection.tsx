import Image from "next/image"
import Link from "next/link"
import React, { ReactNode } from "react"

import { IButton, ISocialLinks } from "../../../types"
import { Button, Content, Hero, SectionHeading, Wrapper } from "../../atoms"

import "./styles.css"

export interface IPageInfo {
  title: string
  description: ReactNode
  button: IButton
  bannerImg: string
}

interface HomeHeroSectionProps extends IPageInfo, ISocialLinks {}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = (props) => {
  const { title, description, button, bannerImg, facebook, youtube } = props

  return (
    <>
      <section>
        <Hero img={bannerImg} height={500} isVideo priority />
      </section>
      <section className="announcement pt-16">
        <Wrapper>
          <div className="text-grey-600 grid gap-y-10 md:gap-y-0 md:grid-cols-[1fr_2fr] gap-x-10">
            <div className="flex flex-col items-center">
              <h3 className="font-black text-4xl mb-8 uppercase">
                Todd Productions: the Sequel
              </h3>
              <Image
                src="/images/logo-25-years.png"
                alt="logo"
                width={250}
                height={300}
                priority
              />
            </div>
            <div className="text-left mb-2s">
              <Content>
                <p>
                  We are thrilled to announce that Todd Productions Inc. is
                  celebrating its 25th year in business. Under the name that was
                  conceived at the tender age of ten, Todd Stanton and his team
                  have been producing high-quality content that always aims to
                  entertain, educate and inspire our audiences. We are grateful
                  for the support of our partners, clients and fans who have
                  made this journey possible. You are the reason we do what we
                  do!
                </p>
                <p>
                  As our founder and CEO Todd Stanton says, &quot;We believe
                  that every story deserves to be told in a captivating and
                  engaging way – digitally and masterfully.&quot;
                </p>
                <p>
                  <em>
                    What&apos;s next for Todd Productions? To celebrate its 25th
                    business anniversary, the company will debut a new
                    documentary, titled &quot;Todd Productions: 25 Years of
                    Creative Media&quot; which will stream on{" "}
                    <a href={facebook} target="_blank" rel="noreferrer">
                      Facebook
                    </a>{" "}
                    and{" "}
                    <a href={youtube} target="_blank" rel="noreferrer">
                      YouTube
                    </a>{" "}
                    on <strong>January 23</strong>.
                  </em>
                </p>
                <div className="justify-center mx-auto content-center items-center mt-10 text-center">
                  <Link href="/25-year-announcement">
                    <Button>get the details </Button>
                  </Link>{" "}
                </div>
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
      <section>
        <Wrapper>
          <div className="py-8 z-10">
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
      </section>
    </>
  )
}

export default HomeHeroSection
