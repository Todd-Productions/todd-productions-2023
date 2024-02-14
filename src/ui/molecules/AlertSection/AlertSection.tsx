import React, { FC } from "react"
import Image from "next/image"

import { Wrapper, Content, Button } from "@/ui/atoms"

export interface AlertSectionProps {}

const AlertSection: FC<AlertSectionProps> = () => (
  <section className="bg-white py-10 border-b-4 border-t-4 border-solid border-orange-500">
    <Wrapper maxWidth="700px">
      <div className="grid gap-y-8 gap-x-8 md:gap-y-0 md:grid-cols-3 justify-center items-center">
        <div className="md:col-span-2">
          <Content>
            In our 25th year, we are rebranding as{" "}
            <strong>Stanton Creative Media</strong>, symbolizing our family
            company&apos;s growth in digital and print media. Todd Productions,
            Inc. will remain the parent company to Stanton Creative Media,
            Frontward Web Hosting and Three Quarters Entertainment.
          </Content>
        </div>
        <div className="justify-self-center">
          <Image
            src="/images/scm-logo.png"
            width={300}
            height={100}
            alt="logo"
            priority
          />
        </div>
      </div>
      <div className="text-center mt-8 w-full">
        <a
          href="https://www.stantoncreativemedia.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button color="orange" capitalize>
            View Website
          </Button>
        </a>
      </div>
    </Wrapper>
  </section>
)

export default AlertSection
