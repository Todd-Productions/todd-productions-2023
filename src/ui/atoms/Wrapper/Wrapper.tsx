import React from "react"

export interface WrapperProps {
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props
  return <div className="px-2 mx-auto">{children}</div>
}

export default Wrapper
