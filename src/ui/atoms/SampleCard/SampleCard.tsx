import React from "react"
import Image from "next/image"
import Link from "next/link"
import { UrlObject } from "url"

import "./samplecard.css"

import { IButton } from "../../../types"

export interface ISampleCard {
  title: string
  img: string | UrlObject
  largeImg?: string | UrlObject
  videoLink?: string
  description?: string
  button?: IButton
  slug: string
}

export interface SampleCardProps {
  card: ISampleCard
}

const SampleCard: React.FC<SampleCardProps> = (props) => {
  const { card } = props
  return (
    <div className="sample-card">
      <Link className="" href={card.slug}>
        <div className="h-full relative flex items-center justify-center text-center">
          <div className="title absolute z-10 font-bold text-white text-2xl lg:text-5xl px-4">
            {card.title}
          </div>
          <div className="overlay" />
          <div className="relative h-full w-full">
            <Image
              className="absolute object-cover h-full w-full"
              src={card.img as string}
              alt={card.title}
              fill
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SampleCard
