import React from "react"

export interface SimpleSectionHeadingProps {
  children?: string
}

const SimpleSectionHeading: React.FC<SimpleSectionHeadingProps> = (props) => {
  const { children } = props

  return (
    <h2 className="text-center text-2xl md:text-5xl font-normal mb-12">
      {children}
    </h2>
  )
}

export default SimpleSectionHeading
