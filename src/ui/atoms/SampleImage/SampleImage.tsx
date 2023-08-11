import React from "react"
import Image from "next/image"

import "../SampleCard/samplecard.css"
import { ISampleCard } from "../../../types"

export interface SampleImageProps {
  card: ISampleCard
}

const SampleImage: React.FC<SampleImageProps> = (props) => {
  const { card } = props

  return (
    <div className="sample-card">
      <div className="h-full relative flex items-center justify-center text-center px-4">
        <Image
          className="card-img"
          src={card.img as string}
          fill
          alt={card.title}
        />
      </div>
    </div>
  )
}

export default SampleImage
