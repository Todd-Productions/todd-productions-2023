import React, { ReactNode } from "react"
import Link from "next/link"

import { Button, SectionHeading, Wrapper, Hero } from "../../atoms"
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
  <section>
    <Hero img={bannerImg} height={500} isVideo priority />
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
)

export default HomeHeroSection
