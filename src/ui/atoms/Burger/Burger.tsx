import React from "react"

import "./burger.css"

export interface HamburgerProps {
  on?: boolean
  onClick?: () => void
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
  const { on, onClick } = props

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick()
    }
  }

  return !on ? (
    <button
      onClick={() => onClick && onClick()}
      onKeyDown={() => onClick && handleKeyDown}
      className="hamburger"
      type="button"
    >
      <div />
      <div />
      <div />
    </button>
  ) : null
}

export default Hamburger
