import { NextResponse } from "next/server"
import * as yup from "yup"
import fs from "fs"
import path from "path"

import sendEmail from "./email"

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

const { EMAIL_TO } = process.env

export const POST = async (request: Request) => {
  const res = await request.json()
  const templatePath = path.join(process.cwd(), `templates/contact.hbs`)

  const emailTemplate = fs.readFileSync(templatePath, "utf8")

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
      template: emailTemplate,
    })

    return NextResponse.json({
      message: "Successfully sent message",
    })
  } catch (error) {
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
