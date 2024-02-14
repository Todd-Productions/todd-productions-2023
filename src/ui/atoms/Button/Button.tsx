import cns from "classnames"
import React from "react"

import "./button.css"

export type ButtonColors = "primary" | "danger" | "default" | "orange"

export interface ButtonProps {
  type?: "submit" | "button"
  color?: ButtonColors
  disabled?: boolean
  children?: string
  fullWidth?: boolean
  onClick?: () => void
  capitalize?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, fullWidth, color, onClick, disabled, capitalize } =
    props
  return (
    <button
      /* eslint-disable react/button-has-type */
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      className={cns(
        "border-0 bg-transparent transition-all text-base md:text-base text-sm px-2 lg:px-12 py-3 text-center duration-300 lowercase leading-6 no-underline disabled:opacity-50 disabled:cursor-default hover:cursor-pointer hover:no-underline",
        {
          [`btn-${color ?? "primary"}`]: true,
          "btn-block": fullWidth,
          capitalize,
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
