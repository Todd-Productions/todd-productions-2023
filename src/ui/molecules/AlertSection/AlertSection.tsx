import React, { FC } from "react"
import Image from "next/image"

import { Section, Wrapper, Content, SectionSubHeading } from "@/ui/atoms"

export interface AlertSectionProps {}

const AlertSection: FC<AlertSectionProps> = () => (
  <Section>
    <Wrapper>
      <div className="grid grid-cols-[1fr_3fr]">
        <div>
          <SectionSubHeading>Some Heading</SectionSubHeading>
          <Image
            src="/images/scm-logo.png"
            width={200}
            height={100}
            alt="logo"
            priority
          />
        </div>
        <Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            ratione doloremque qui earum provident dolorem aspernatur, esse
            necessitatibus eveniet sapiente harum iure molestias explicabo totam
            modi voluptas neque! Ad, architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            ratione doloremque qui earum provident dolorem aspernatur, esse
            necessitatibus eveniet sapiente harum iure molestias explicabo totam
            modi voluptas neque! Ad, architecto.
          </p>
        </Content>
      </div>
    </Wrapper>
  </Section>
)

export default AlertSection
