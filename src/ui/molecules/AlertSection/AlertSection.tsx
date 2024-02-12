import React, { FC } from "react"
import Image from "next/image"

import { Wrapper, Content } from "@/ui/atoms"

export interface AlertSectionProps {}

const AlertSection: FC<AlertSectionProps> = () => (
  <section className="bg-white py-10 border-b-4 border-t-4 border-solid border-orange-500">
    <Wrapper maxWidth="700px">
      <div className="grid gap-y-8 gap-x-8 md:gap-y-0 md:grid-cols-3 justify-center items-center">
        <div className="md:col-span-2">
          <Content>
            <p>
              In our 25th year, we are rebranding as Stanton Creative Media,
              symbolizing our family company&apos;s growth in digital and print
              media. Todd Productions, Inc. will remain the parent company to
              Stanton Creative Media, Frontward Web Hosting and Three Quarters
              Entertainment.
            </p>
          </Content>
        </div>
        <div className="justify-self-center">
          <Image
            src="/images/logo-25-years.png"
            width={300}
            height={100}
            alt="logo"
            priority
          />
        </div>
      </div>
    </Wrapper>
  </section>
)

export default AlertSection
