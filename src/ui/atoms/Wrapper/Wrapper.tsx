import React from "react"

import "./wrapper.css"

export interface WrapperProps {
  children?: React.ReactNode
  maxWidth?: string
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, maxWidth } = props
  return (
    <div className="mx-auto wrapper" style={{ maxWidth }}>
      {children}
    </div>
  )
}

export default Wrapper
