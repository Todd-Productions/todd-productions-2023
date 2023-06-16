import "./hero.css"

export interface HeroProps {
  img: string
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img } = props
  return <div className="hero" style={{ backgroundImage: `url(${img})` }} />
}

export default Hero
