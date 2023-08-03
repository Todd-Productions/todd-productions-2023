import React from "react"
import Image from "next/image"

import "./hero.css"

export interface HeroProps {
  img: string
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img } = props

  return (
    <div className="hero">
      <Image className="hero-img" src={img} alt="hero" fill />
    </div>
  )
}

export default Hero
