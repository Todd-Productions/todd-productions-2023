import React, { FC } from "react"
import Image from "next/image"

import { Section, Wrapper, Content, SectionSubHeading } from "@/ui/atoms"

export interface AlertSectionProps {}

const AlertSection: FC<AlertSectionProps> = () => (
  <section className="bg-white py-10 border-b-4 border-t-4 border-solid border-orange-500">
    <Wrapper maxWidth="700px">
      <div className="grid gap-y-8 gap-x-8 md:gap-y-0 md:grid-cols-3 justify-center items-center">
        <div className="md:col-span-2">
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ratione doloremque qui earum provident dolorem aspernatur, esse
              necessitatibus eveniet sapiente harum iure molestias explicabo
              totam modi voluptas neque! Ad, architecto.
            </p>
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
    </Wrapper>
  </section>
)

export default AlertSection
