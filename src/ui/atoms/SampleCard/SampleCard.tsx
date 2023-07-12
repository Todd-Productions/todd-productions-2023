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
      <Link href={card.url}>
        <div className="title">{card.title}</div>
      </Link>
      <div className="overlay" />
      <Image className="" src={card.img as string} fill alt={card.title} />
    </div>
  )
}

export default SampleCard
