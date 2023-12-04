import React, { ReactNode } from "react"

import "./content.css"

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="content leading-8 text-grey-600">{children}</div>
)

export default Content
