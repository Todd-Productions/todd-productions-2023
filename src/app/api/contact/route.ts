// import { NextResponse } from "next/server"
// import yup from "yup"
// import sendEmail from "./email"

// const schema = yup.object({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   message: yup.string().required(),
// })

// const { EMAIL_TO } = process.env

// export const POST = async (request: Request) => {
//   const res = await request.json()
//   try {
//     const { email, name, message } = await schema.validate(res)
//     await sendEmail(
//       EMAIL_TO ?? "contact@toddprod.com",
//       "Contact Submission - Todd Productions Inc.",
//       {
//         email,
//         name,
//         message,
//       }
//     )

//     return NextResponse.json({
//       message: "Successfully sent message",
//     })
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error,
//       },
//       {
//         status: 400,
//       }
//     )
//   }
// }

// Build error - Failed to collect page data for /api/contact
// Investigate when implementing
export {}
