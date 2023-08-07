import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button, SectionHeading, SectionSubHeading } from "../../atoms"

export interface ISplitContent {
  imageSrc: string
  imageAlt: string
  title: string
  subTitle: string
  textContent: string
  buttonLink: string
  buttonLabel: string
  imgleft?: boolean
}

export interface SplitContentProps extends ISplitContent {}

const SplitContentSection: React.FC<SplitContentProps> = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  textContent,
  buttonLink,
  buttonLabel,
  imgleft,
}) => {
  const gridColSizes = imgleft
    ? "md:grid-cols-[3fr_2fr]"
    : "md:grid-cols-[2fr_3fr]"
  const order = imgleft ? "md:order-1" : "md:order-2"
  const order2 = imgleft ? "md:order-2" : "md:order-1"

  return (
    <section className="bg-white px-4 md:px-0">
      <div className={`grid ${gridColSizes} h-full`}>
        <div className={`h-60 md:h-auto relative order-1 ${order}`}>
          <Image className="object-cover" src={imageSrc} alt={imageAlt} fill />
        </div>

        <div className={`my-10 md:p-16 order-2 ${order2}`}>
          <SectionHeading>{title}</SectionHeading>
          <SectionSubHeading>{subTitle}</SectionSubHeading>
          <div className="mb-12 leading-9">{textContent}</div>
          <Link href={buttonLink}>
            <Button fullWidth>{buttonLabel}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SplitContentSection
