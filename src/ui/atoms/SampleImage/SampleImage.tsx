import React from "react"
import Image from "next/image"
import Link from "next/link"

import "../SampleCard/samplecard.css"
import { ISampleCard } from "../SampleCard/SampleCard"

export interface SampleImageProps {
  card: ISampleCard
}

const SampleImage: React.FC<SampleImageProps> = (props) => {
  const { card } = props

  return (
    <div className="sample-card">
      <Link href={card.slug}>
        <div className="h-full relative flex items-center justify-center text-center px-4">
          <Image
            className="object-contain"
            src={card.img as string}
            fill
            alt={card.title}
          />
        </div>
      </Link>
    </div>
  )
}

export default SampleImage
