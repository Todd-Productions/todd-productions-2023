"use client"

import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"
import { Input, Button } from "../../atoms"

type Inputs = {
  name: string
  email: string
  message: string
}

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white pb-24">
      <Input
        label="name"
        placeholder="Name *"
        {...register("name", { required: true })}
      />
      <Input
        label="email"
        placeholder="Email *"
        type="email"
        {...register("email", { required: true })}
      />

      <div className="bg-white pb-4">
        <label
          htmlFor="message"
          className="uppercase font-bold text-blue-500 py-4 radius-2 w-full block"
        >
          what can we do for you? *
          <textarea
            id="message"
            className="rounded border border-solid border-gray-500 p-4 w-full font-normal h-80 outline-none focus:shadow-lg resize-none"
            placeholder="What Can We Do For You? *"
            {...register("message", { required: true })}
          />
        </label>
      </div>

      {(errors.name || errors.email || errors.message) && (
        <span className="px-20 text-red-500">All fields are required*</span>
      )}

      <div className="text-center">
        <Button color="primary" type="submit" fullWidth>
          contact us
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
