import React from "react"
import cns from "classnames"

export interface SectionSubHeadingProps {
  children?: string
  isWhite?: boolean
}

const SectionSubHeading: React.FC<SectionSubHeadingProps> = (props) => {
  const { children, isWhite } = props

  return (
    <h3
      className={cns("text-black font-normal text-xl mb-8 relative uppercase", {
        "text-white": isWhite,
      })}
    >
      {children}
    </h3>
  )
}

export default SectionSubHeading
