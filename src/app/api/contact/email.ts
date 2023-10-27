import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import handlebars from "handlebars"
import fs from "fs"
import path from "path"

export interface IEmailParams {
  subject: string
  to: string | string[]
  cc?: string | string[]
  template?: string
  context?: any
}

/**
 * Send Email
 */
const email = async (params: IEmailParams): Promise<any> => {
  const { subject, to, context } = params

  /**
   * Configure NodeMail For Sending
   */
  const poolOptions = {
    pool: true,
    maxConnections: 1,
    maxMessages: 5,
  }

  const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }

  const options: SMTPTransport.Options = {
    ...poolOptions,
    ...smtpOptions,
  }

  const transporter = nodemailer.createTransport(options)

  const templatePath = path.join(process.cwd(), `templates/contact.hbs`)
  const emailTemplate = fs.readFileSync(templatePath, "utf8")
  const templateBuild = handlebars.compile(emailTemplate)
  const htmlToSend = templateBuild({
    url: process.env.WEBSITE_URL,
    ...context,
  })

  /**
   * Build Emails For Sending
   */
  await transporter.sendMail({
    from: "no-reply@toddprod.com",
    to,
    subject,
    html: htmlToSend,
  })
}

export default email
