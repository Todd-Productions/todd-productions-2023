import React, { ReactNode } from "react"
import Link from "next/link"

import {
  Button,
  SectionHeading,
  SectionSubHeading,
  Wrapper,
  Hero,
  Content,
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
    <section>
      <div className="text-white text-center my-8 py-16 px-8 mx-auto md:max-w-5xl bg-grey-600">
        <h3 className="font-black text-xl mb-8 uppercase">Section Title</h3>
        <div className="text-left">
          <Content textWhite>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            ratione pariatur dolorum fugit harum, qui soluta ullam, perferendis
            vero autem, possimus reprehenderit dolor? Illum atque sint eaque,
            non eos magnam?
          </Content>
        </div>
      </div>
    </section>
    <section>
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
    </section>
  </>
)

export default HomeHeroSection
