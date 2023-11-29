import React, { ReactNode } from "react"

export interface ModalBoxProps {
  children: ReactNode
  maxWidth?: number
  minWidth?: number
  onClose?: () => void
}

const ModalBox: React.FC<ModalBoxProps> = (props: ModalBoxProps) => {
  const { children, maxWidth, minWidth, onClose } = props

  return (
    <div
      className="fixed bg-white relative border-black text-black border-solid border box-border"
      style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
    >
      <button
        type="button"
        onClick={() => onClose && onClose()}
        className="text-blue-500 flex justify-center content-center items-center absolute right-0 text-3xl cursor-pointer mr-4 mt-2 transition hover:border-white"
      >
        x
      </button>
      <div className="p-10 w-full pt-8 box-border">{children}</div>
    </div>
  )
}

ModalBox.defaultProps = {
  maxWidth: 800,
  minWidth: 500,
}

export default ModalBox
