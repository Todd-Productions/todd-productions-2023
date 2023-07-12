import React from "react"

import { Section, Wrapper, SectionHeading, PricingCard } from "../../atoms"
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
        <SectionHeading>{title}</SectionHeading>
        <div>
          {packages.map((service) => (
            <PricingCard service={service} />
          ))}
        </div>
        <div>{description}</div>
      </Wrapper>
    </Section>
  )
}

export default SEOPricing
