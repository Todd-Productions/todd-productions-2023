import React, { ReactNode } from "react"

import "./content.css"

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="content">{children}</div>
)

export default Content
