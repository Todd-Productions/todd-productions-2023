import React from "react"

export interface SectionSubHeadingProps {
  children?: string
}

const SectionSubHeading: React.FC<SectionSubHeadingProps> = (props) => {
  const { children } = props

  return (
    <h3 className="text-black font-normal text-xl mb-8 relative uppercase">
      {children}
    </h3>
  )
}

export default SectionSubHeading
