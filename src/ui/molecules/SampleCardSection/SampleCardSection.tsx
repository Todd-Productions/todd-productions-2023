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
        <div className="sample-card-section-grid grid grid-cols-2 grid-auto-rows-40 xl:grid-cols-3 gap-4 place-items-center">
          {cards.map((card) =>
            isCard ? (
              <SampleCard card={card} key={card.title} />
            ) : (
              <SampleImage card={card} key={card.title} />
            )
          )}
        </div>
      </Wrapper>
    </Section>
  )
}

export default SampleCards
