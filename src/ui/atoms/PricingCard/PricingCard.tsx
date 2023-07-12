import React from "react"

import { IPricingCard } from "../../../types"

const borderColors: { [key: string]: string } = {
  PROFESSIONAL: "red",
  ADVANCED: "blue",
  STANDARD: "grey",
}

export interface PricingCardProps {
  service: IPricingCard
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { service } = props

  return (
    <div
      className={`grid text-center bg-white shadow-md border-b-8 border-solid border-${
        borderColors[service.type]
      }-500`}
    >
      <div className={`bg-${borderColors[service.type]}-500 text-white py-4`}>
        {service.type}
      </div>
      <div className="py-16 border-b border-l border-r border-solid border-grey-500">
        <div className="text-6xl font-extrabold pb-2">${service.price}</div>
        <div>{service.priceFrequency}</div>
      </div>
      <ul className="my-8 pl-8 list-disc">
        {service.highlights.map((item) => (
          <li className="pb-2">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
