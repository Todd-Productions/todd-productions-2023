import React, { ReactNode } from "react"
import cns from "classnames"

import "./content.css"

interface ContentProps {
  children: ReactNode
  textWhite?: boolean
}

const Content: React.FC<ContentProps> = ({ children, textWhite }) => (
  <div
    className={cns("content leading-8 text-grey-600", {
      "text-white": textWhite,
    })}
  >
    {children}
  </div>
)

export default Content
