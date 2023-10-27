import React from "react"

export interface InputProps {
  id: string
  name: string
  type?: "text" | "email"
  placeholder?: string
  label: string
  required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, name, placeholder, type, label, required, ...other } = props

  return (
    <div className="bg-white pb-4">
      <label
        htmlFor={name}
        className="uppercase font-bold text-blue-500 py-4 radius-2 w-full block font-helvetica text-xs "
      >
        {label} {required && "*"}
      </label>
      <input
        className="rounded border border-solid border-gray-400 px-4 py-3 w-full outline-none focus:shadow-xl text-sm"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        ref={ref}
        required={required}
        {...other}
      />
    </div>
  )
})

Input.defaultProps = {
  type: "text",
}

export default Input
