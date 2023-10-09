import React, { ReactNode } from "react"

import { Section, Wrapper } from "../../atoms"
import "./internal-section.css"

export interface InternalSectionProps {
  children: ReactNode
}

const InternalSection: React.FC<InternalSectionProps> = (props) => {
  const { children } = props

  return (
    <Section>
      <Wrapper>
        <div className="internal-section">{children}</div>
      </Wrapper>
    </Section>
  )
}

export default InternalSection
