import React from "react"

import { Section, Wrapper, SampleCard, SimpleSectionHeading } from "../../atoms"
import { ISampleCard } from "../../../types"

export interface SampleCardsProps {
  title: string
  cards: ISampleCard[]
}

const SampleCards: React.FC<SampleCardsProps> = (props) => {
  const { title, cards } = props

  return (
    <Section>
      <Wrapper>
        <SimpleSectionHeading>{title}</SimpleSectionHeading>
        <div className="grid grid-cols-3 gap-y-4 place-items-center">
          {cards.map((card) => (
            <SampleCard card={card} />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default SampleCards
