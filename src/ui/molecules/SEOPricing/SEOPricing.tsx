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
        <div className="my-20">
          <h2 className="text-center text-5xl font-normal">{title}</h2>
          <div className="grid grid-cols-3 gap-x-8 my-12">
            {packages.map((service) => (
              <PricingCard service={service} />
            ))}
          </div>
          <div className="text-sm px-60">{description}</div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default SEOPricing
