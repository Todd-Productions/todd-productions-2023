import React from "react"
import cns from "classnames"

import "./pricingcard.css"

const borderColors: { [key: string]: string } = {
  PROFESSIONAL: "red",
  ADVANCED: "blue",
  STANDARD: "grey",
}

export interface IPricingCard {
  type: string
  price: string
  priceFrequency: string
  highlights: string[]
}

export interface PricingCardProps {
  service: IPricingCard
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { service } = props

  return (
    <div
      className={cns(
        "grid text-center bg-white shadow-xl drop-shadow-xl border-b-8 border-solid",
        { [`${borderColors[service.type]}-border`]: service.type }
      )}
    >
      <div
        className={cns("text-white py-4", {
          [`${borderColors[service.type]}`]: service.type,
        })}
      >
        {service.type}
      </div>
      <div className="py-16 border-b border-l border-r border-solid border-grey-500">
        <div className="text-6xl font-extrabold pb-2">${service.price}</div>
        <div>{service.priceFrequency}</div>
      </div>
      <ul className="my-8 pl-12 pr-4 list-disc leading-8 text-left">
        {service.highlights.map((item) => (
          <li className="pb-2">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
