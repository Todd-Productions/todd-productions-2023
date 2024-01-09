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
          Todd Productions Inc. Celebrates 25 Years of Excellence in Digital
          Media Production
        </h3>
        <SectionSubHeading isWhite>
          Maumee area experts in video, audio, animation and web design marks
          business anniversary with streaming documentary
        </SectionSubHeading>
        <div className="text-left mb-8">
          <Content textWhite>
            <p>
              <strong>Maumee, Ohio, January 15, 2024</strong> - Todd Productions
              Inc., a leading media production company based in Maumee, Ohio, is
              proud to announce its 25th business anniversary. Since its
              founding in 1999, the company has produced award-winning
              documentaries, TV spots, corporate videos, and educational
              materials for clients across northwest Ohio, and throughout the
              East Coast.
            </p>
            <p>
              Todd Stanton, the founder and CEO of Todd Productions Inc., said:
              &quot;We are thrilled to celebrate this milestone with our loyal
              clients, partners, and creative team. For 25 years, we have been
              committed to delivering high-quality digital media products that
              inform, inspire, and entertain. We are grateful for the trust and
              support we have received from our clients and the community over
              the years. We look forward to continuing our mission of excellence
              for many more years to come.&quot;
            </p>
            <p>
              Todd Productions Inc. offers a full range of media production
              services, including video production, animation, graphics,
              audio/visual services and digital distribution, plus website
              programming and hosting, as well as application development. The
              company employs a talented team of professionals who can handle
              any project from concept to completion. Some of the company’s
              notable works include The Paul Schlegel Documentary; development
              of the Maumee Palooza daytime music stage and streaming Maumee
              Palooza TV; as well as numerous corporate training and promotional
              videos, convention reels, legacy films, music videos, ecommerce
              and marketing websites, software applications, and more.
            </p>
            <p>
              <i>
                To celebrate its 25th business anniversary, Todd Productions
                Inc. will debut a new documentary, titled “XX,” which will
                stream on Facebook and YouTube on XX. To learn more, visit
                (social links).
              </i>
            </p>
          </Content>
        </div>
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
