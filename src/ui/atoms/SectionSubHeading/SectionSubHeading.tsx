import React, { ReactNode } from "react"
import cns from "classnames"

export interface SectionSubHeadingProps {
  children?: string | ReactNode
  isWhite?: boolean
  isGrey?: boolean
}

const SectionSubHeading: React.FC<SectionSubHeadingProps> = (props) => {
  const { children, isWhite, isGrey } = props

  return (
    <h3
      className={cns("text-black font-normal text-xl mb-8 relative uppercase", {
        "text-white": isWhite,
        "text-grey-600": isGrey,
      })}
    >
      {children}
    </h3>
  )
}

export default SectionSubHeading
