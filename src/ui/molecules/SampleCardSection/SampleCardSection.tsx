import React from "react"

import {
  Section,
  Wrapper,
  SampleCard,
  SimpleSectionHeading,
  SampleImage,
} from "../../atoms"
import { ISampleCard } from "../../atoms/SampleCard/SampleCard"

export interface SampleCardsProps {
  title: string
  cards: ISampleCard[]
  isCard?: boolean
}

const SampleCards: React.FC<SampleCardsProps> = (props) => {
  const { title, cards, isCard } = props

  return (
    <Section>
      <Wrapper>
        <SimpleSectionHeading>{title}</SimpleSectionHeading>
        <div className="grid grid-cols-3 gap-y-4 place-items-center">
          {cards.map((card) =>
            isCard ? <SampleCard card={card} /> : <SampleImage card={card} />
          )}
        </div>
      </Wrapper>
    </Section>
  )
}

export default SampleCards
