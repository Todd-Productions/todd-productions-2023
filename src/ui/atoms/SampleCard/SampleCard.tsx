import React from "react"
import Image from "next/image"
import Link from "next/link"

import { ISampleCard } from "../../../types"
import "./samplecard.css"

export interface SampleCardProps {
  card: ISampleCard
}

const SampleCard: React.FC<SampleCardProps> = (props) => {
  const { card } = props

  return (
    <div className="sample-card">
      <Link className="bg-white w-fit" href={card.button?.link as string}>
        <div className="h-full relative flex items-center justify-center text-center px-4">
          <div className="title relative z-10 font-bold text-white text-4xl">
            {card.title}
          </div>
          <div className="overlay" />
          <Image
            className="card-img"
            src={card.img as string}
            fill
            alt={card.title}
          />
        </div>
      </Link>
    </div>
  )
}

export default SampleCard
