import React from "react"
import { UrlObject } from "url"
import Image from "next/image"
import Link from "next/link"

import "./samplecard.css"

export interface SampleCardProps {
  title: string
  img: string | UrlObject
  url: string
}

const SampleCard: React.FC<SampleCardProps> = (props) => {
  const { title, img, url } = props

  return (
    <div className="sample-card">
      <Link href={url}>
        <div className="title">{title}</div>
      </Link>
      <div className="overlay"></div>
      <Image className="" src={img as string} fill alt={title} />
    </div>
  )
}

export default SampleCard
