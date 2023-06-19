import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const {} = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return <div>ContactForm</div>
}

export default ContactForm
