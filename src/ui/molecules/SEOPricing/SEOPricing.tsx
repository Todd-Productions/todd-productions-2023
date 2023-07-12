import React from "react"

import { Section, Wrapper, PricingCard } from "../../atoms"
import { IPricingCard } from "../../../types"

export interface SEOProps {
  title: string
  description: string
  packages: IPricingCard[]
}

const SEOPricing: React.FC<SEOProps> = (props) => {
  const { title, description, packages } = props

  return (
    <Section>
      <Wrapper>
        <h2 className="text-center text-4xl font-normal">{title}</h2>
        <div className="grid grid-cols-3 gap-x-8 my-12">
          {packages.map((service) => (
            <PricingCard service={service} />
          ))}
        </div>
        <div className="text-sm">{description}</div>
      </Wrapper>
    </Section>
  )
}

export default SEOPricing
