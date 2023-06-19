import React from "react"

export interface InputProps {
  label: string
}

const Input: React.FC<InputProps> = (props) => {
  const { label } = props
  return (
    <div className="bg-white p-20">
      <label
        className="uppercase font-bold text-blue-500 py-4 radius-2 w-full block"
        htmlFor="input"
      >
        {label} *
      </label>
      <input
        className="rounded border border-solid border-gray-500 p-4 w-full"
        type="text"
        id="input"
        name="input"
      />
    </div>
  )
}

export default Input
// rgb(8, 62, 108)
