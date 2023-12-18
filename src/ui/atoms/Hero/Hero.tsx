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
        <>
          <video src="/videos/home-hero.mp4" autoPlay loop muted />
          <div className="video-text h-16 flex flex-col items-center justify-center text-white">
            <div className="video-heading font-black px-4 leading-normal mb-6 text-5xl md:text-7xl text-center">
              ELECTRONIC MEDIA COMPANY
            </div>
            <div className="video-subheading flex items-center justify-around text-xl md:text-4xl ">
              VIDEO
              <span />
              WEB
              <span />
              MORE
            </div>
          </div>
        </>
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
