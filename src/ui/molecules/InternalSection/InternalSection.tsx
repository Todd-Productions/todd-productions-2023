import React, { ReactNode } from "react"

import { Section, Wrapper } from "../../atoms"

export interface InternalSectionProps {
  children: ReactNode
}

const InternalSection: React.FC<InternalSectionProps> = (props) => {
  const { children } = props

  return (
    <Section>
      <Wrapper>
        <div className="my-10">{children}</div>
      </Wrapper>
    </Section>
  )
}

export default InternalSection
