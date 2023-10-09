import React from "react"

export interface InputProps {
  label: string
  placeholder: string
  type?: "text" | "email"
}

const Input: React.FC<InputProps> = (props) => {
  const { label, placeholder, type } = { type: "text", ...props }
  return (
    <div className="bg-white pb-4">
      <label
        className="uppercase font-bold text-blue-500 py-4 radius-2 w-full block font-helvetica text-xs "
        htmlFor={label}
      >
        {label} *
      </label>
      <input
        className="rounded border border-solid border-gray-400 px-4 py-3 w-full outline-none focus:shadow-xl text-sm"
        type={type}
        id="input"
        name="input"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
// rgb(8, 62, 108)
