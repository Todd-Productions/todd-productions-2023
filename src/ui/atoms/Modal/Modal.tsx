import React from "react"
import ModalBox, { ModalBoxProps } from "../ModalBox/ModalBox"

export interface ModalProps extends ModalBoxProps {
  on?: boolean
  toggle?: () => void
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, toggle, on, maxWidth, minWidth } = props

  return (
    <div
      className="h-full w-full fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-10"
      style={{ display: on ? "block" : "none" }}
    >
      <div className="h-full w-full overflow-auto box-border p-10 flex flex-col justify-start items-center content-center pt-40">
        <ModalBox onClose={toggle} maxWidth={maxWidth} minWidth={minWidth}>
          {children}
        </ModalBox>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  on: false,
}

export default Modal
