import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button, SectionHeading, SectionSubHeading } from "../../atoms"
import { IButton } from "../../../types"

export interface ISplitContent {
  imageSrc: string
  imageAlt: string
  heading: string
  subHeading: string
  content: string
  button: IButton
  imgLeft?: boolean
}

export interface SplitContentProps extends ISplitContent {}

const SplitContentSection: React.FC<SplitContentProps> = ({
  imageSrc,
  imageAlt,
  heading,
  subHeading,
  content,
  button,
  imgLeft,
}) => {
  const gridColSizes = imgLeft
    ? "md:grid-cols-[3fr_2fr]"
    : "md:grid-cols-[2fr_3fr]"
  const order = imgLeft ? "md:order-1" : "md:order-2"
  const order2 = imgLeft ? "md:order-2" : "md:order-1"

  return (
    <section className="bg-white px-4 md:px-0">
      <div className={`grid ${gridColSizes} h-full`}>
        <div className={`h-60 md:h-auto relative order-1 ${order}`}>
          <Image className="object-cover" src={imageSrc} alt={imageAlt} fill />
        </div>

        <div className={`my-10 md:p-16 order-2 ${order2}`}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionSubHeading>{subHeading}</SectionSubHeading>
          <p className="mb-12 leading-9">{content}</p>
          <Link href={button.link}>
            <Button fullWidth>{button.label}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SplitContentSection
