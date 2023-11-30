import React from "react"

import "./heading.css"

type HeadingLevel = "h1" | "h2"

export interface SectionHeadingProps {
  children?: string
  headingLevel?: HeadingLevel
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, headingLevel } = props
  const Heading = headingLevel === "h1" ? "h1" : "h2"
  return (
    <Heading className="text-blue-500 font-black text-4xl mb-2 relative uppercase section-heading font-heading">
      {children}
    </Heading>
  )
}

export default SectionHeading
