import React from "react"
import Image from "next/image"

import "./hero.css"

export interface HeroProps {
  img: string
  height?: number
  priority?: boolean
  altText?: string
  objectPosition?: string
  isVideo?: boolean
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img, height, priority, altText, objectPosition, isVideo } = props

  return (
    <div className="hero" style={{ height }}>
      {isVideo ? (
        <video src="/videos/home-hero-new.mp4" autoPlay loop muted />
      ) : (
        <Image
          className="hero-img"
          style={{ objectPosition }}
          src={img}
          priority={priority}
          alt={altText ?? "banner image"}
          fill
        />
      )}
    </div>
  )
}

export default Hero
