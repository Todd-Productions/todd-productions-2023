import React, { ReactNode } from "react"
import Link from "next/link"

import {
  Button,
  SectionHeading,
  Wrapper,
  Hero,
  Content,
  SectionSubHeading,
} from "../../atoms"
import { IButton } from "../../../types"

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
    <section className="bg-grey-600">
      <div className="text-white text-center mb-8 py-16 px-8 mx-auto md:max-w-6xl">
        <h3 className="font-black text-4xl mb-8 uppercase">
          Marking our 25th year as Todd Productions
        </h3>
        <div className="text-left mb-8">
          <Content textWhite>
            We are thrilled to announce that Todd Productions Inc. is
            celebrating its 25th year in business on January 15. Under the name
            that was conceived at the tender age of ten, Todd Stanton and his
            team have been producing high-quality content that always aims to
            entertain, educate and inspire our audiences. We are grateful for
            the support of our partners, clients and fans who have made this
            journey possible. You are the reason we do what we do! As our
            founder and CEO Todd Stanton says, &quot;We believe that every story
            deserves to be told in a captivating and engaging way – digitally
            and masterfully.&quote;
          </Content>
        </div>
        <SectionSubHeading isWhite>
          Now the question begs itself, what will Todd Productions, the Sequel,
          have in store for you?
        </SectionSubHeading>
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

export default HomeHeroSection
