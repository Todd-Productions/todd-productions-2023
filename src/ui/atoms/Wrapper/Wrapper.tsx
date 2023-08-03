import React from "react"

import "./wrapper.css"

export interface WrapperProps {
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props
  return <div className="mx-auto wrapper">{children}</div>
}

export default Wrapper
