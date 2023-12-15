import { NextResponse } from "next/server"
import * as yup from "yup"

import sendEmail from "./email"

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

const { EMAIL_TO } = process.env

export const POST = async (request: Request) => {
  const res = await request.json()

  try {
    const { email, name, message } = await schema.validate(res)
    await sendEmail({
      to: EMAIL_TO ?? "contact@toddprod.com",
      subject: "Contact Submission - Todd Productions Inc.",
      context: {
        email,
        name,
        message,
      },
    })

    return NextResponse.json({
      message: "Successfully sent message",
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error,
      },
      {
        status: 400,
      }
    )
  }
}
