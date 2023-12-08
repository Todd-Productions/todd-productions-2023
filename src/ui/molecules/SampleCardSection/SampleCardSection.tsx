import React from "react"
import cns from "classnames"

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
        <div
          className={cns(
            "sample-card-section-grid grid grid-auto-rows-40 xl:grid-cols-3 gap-4 place-items-center",
            { "grid-cols-1 md:grid-cols-2": !isCard },
            { "grid-cols-2": isCard }
          )}
        >
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
