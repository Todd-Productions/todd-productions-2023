import React from "react"

export interface PricingCardProps {
  type: "PROFESSIONAL" | "ADVANCED" | "STANDARD"
  price: string
  price_frequency: string
  highlights: string[]
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { type, price, price_frequency, highlights } = props
  return (
    <div className="grid">
      <div className="bg-white">{type}</div>
      <div>{price}</div>
      <div>{price_frequency}</div>
      {highlights.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  )
}

export default PricingCard
