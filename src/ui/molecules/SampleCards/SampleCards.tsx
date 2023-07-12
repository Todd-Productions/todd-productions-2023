import React from "react"

import { ISampleCard } from "../../../types"

export interface SampleCardsProps {
  title: string
  cards: ISampleCard[]
}

const SampleCards: React.FC<SampleCardsProps> = () => <div>SampleCards</div>

export default SampleCards
