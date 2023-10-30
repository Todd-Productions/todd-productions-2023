import React, { ReactNode } from "react"
import cns from "classnames"

import "./alert.css"

export type AlertColor = "default" | "red"

export interface AlertProps {
  color?: AlertColor
  children?: ReactNode
}

const Hamburger: React.FC<AlertProps> = (props: AlertProps) => {
  const { color, children } = { color: "default", ...props }

  return (
    <div
      className={cns(
        "box-border p-6 text-sm border border-black h-fit text-white text-center",
        {
          [`${color}`]: color,
        }
      )}
    >
      {children}
    </div>
  )
}

export default Hamburger
