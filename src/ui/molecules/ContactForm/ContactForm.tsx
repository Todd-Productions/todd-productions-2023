"use client"

import React, { useState } from "react"

import { useForm } from "react-hook-form"
import { Input, Button, Alert } from "../../atoms"

export interface IContactValues {
  name: string
  email: string
  message: string
}

const defaultValues: IContactValues = {
  name: "",
  email: "",
  message: "",
}

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IContactValues>({
    defaultValues,
  })

  /**
   * Handle Submission
   */
  const onSubmit = async (data: IContactValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      } else {
        console.log("Success")
        setSuccess(true)
      }
    } catch (error) {
      setError("root", {
        type: "400",
        message: "Sorry, we couldn't process your request",
      })
    }
  }

  return !success ? (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white pb-24">
      <Input
        label="name"
        placeholder="Name *"
        id="name"
        required
        {...register("name", { required: "name requi" })}
      />

      <Input
        label="email"
        placeholder="Email *"
        type="email"
        id="email"
        required
        {...register("email", {
          required: "This field is required",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid Email",
          },
        })}
      />

      <div className="bg-white pb-4">
        <label
          htmlFor="message"
          className="uppercase font-bold text-blue-500 pt-4 radius-2 w-full block font-heading text-xs"
        >
          what can we do for you? *
          <textarea
            id="message"
            className="rounded border border-solid border-gray-400 px-4 py-2 w-full font-normal h-80 outline-none text-sm resize-none text-base mt-4 focus:shadow-xl"
            placeholder="What Can We Do For You? *"
            {...register("message", { required: true })}
          />
        </label>
      </div>

      {(errors.name || errors.email || errors.message) && (
        <span className="text-center mb-4 text-red-500">
          All fields are required*
        </span>
      )}
      {errors.root && (
        <div className="text-center mb-4 text-red-500">
          {errors.root.message}
        </div>
      )}

      <div className="text-center">
        <Button color="primary" type="submit" fullWidth>
          contact us
        </Button>
      </div>
    </form>
  ) : (
    <Alert>
      Thank you! We have received your message and will be in touch shortly.
    </Alert>
  )
}

export default ContactForm
