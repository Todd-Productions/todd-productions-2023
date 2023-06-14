import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button, SectionHeading, SectionSubHeading } from "../../atoms"

interface SplitContentSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  subTitle: string
  textContent: string
  buttonLink: string
  buttonText: string
  imgRight?: boolean
}

const SplitContentSection: React.FC<SplitContentSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  textContent,
  buttonLink,
  buttonText,
  imgRight,
}) => {
  return (
    <section className="bg-white">
      <div
        className={`grid grid-cols-[${
          imgRight ? "2fr_1fr" : "1fr_2fr"
        }] h-full`}
      >
        <div className={`relative ${imgRight ? "order-1" : "order-2"}`}>
          <Image src={imageSrc} alt={imageAlt} fill />
        </div>
        <div className={`p-16  ${imgRight ? "order-2" : "order-1"}`}>
          <SectionHeading>{title}</SectionHeading>
          <SectionSubHeading>{subTitle}</SectionSubHeading>
          <div className="mb-12 leading-9">{textContent}</div>
          <Link href={buttonLink}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SplitContentSection
