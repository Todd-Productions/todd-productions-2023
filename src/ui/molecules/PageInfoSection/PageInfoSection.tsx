import React, { ReactNode } from "react"
import Link from "next/link"

import { Button, SectionHeading, Section, Wrapper } from "../../atoms"

export interface IPageInfoContent {
  title: string
  textContent: ReactNode
  buttonLink: string
  buttonText: string
}

export interface SplitContentProps extends IPageInfoContent {}

const PageInfoSection: React.FC<SplitContentProps> = ({
  title,
  textContent,
  buttonLink,
  buttonText,
}) => {
  return (
    <Section>
      <Wrapper>
        <div className="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-[1fr_3fr] px-10">
          <div>
            <SectionHeading>{title}</SectionHeading>
            <Link href={buttonLink}>
              <Button fullWidth>{buttonText}</Button>
            </Link>
          </div>
          <div className="leading-6">{textContent}</div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default PageInfoSection
