import React from "react"
import cns from "classnames"

import "./button.css"

export type ButtonColors = "primary" | "danger" | "default"

export interface ButtonProps {
  type?: "submit" | "button"
  color?: ButtonColors
  children?: string
  fullWidth?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, fullWidth, color, onClick } = props
  return (
    <button
      /* eslint-disable react/button-has-type */
      onClick={onClick}
      type={type || "button"}
      className={cns(
        "border-0 bg-transparent transition-all text-base md:text-base text-sm px-2 lg:px-12 py-3 text-center duration-300 lowercase leading-6 no-underline disabled:opacity-50 disabled:cursor-default hover:cursor-pointer hover:no-underline",
        {
          [`btn-${color ?? "primary"}`]: true,
          "btn-block": fullWidth,
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
