import React from "react"
import Image from "next/image"

import "./hero.css"

export interface HeroProps {
  img: string
  height?: number
  priority?: boolean
  altText?: string
  objectPosition?: string
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img, height, priority, altText, objectPosition } = props

  return (
    <div className="hero" style={{ height }}>
      <Image
        className="hero-img"
        style={{ objectPosition }}
        src={img}
        priority={priority}
        alt={altText ?? ""}
        fill
      />
    </div>
  )
}

export default Hero
