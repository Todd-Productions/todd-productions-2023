import React from "react"

import { SectionHeading } from "../../atoms"
import Social from "../Social/Social"

// @types
import { UrlType, ISocialLinks } from "../../../types"

export interface ContactContentProps extends ISocialLinks {
  title: string
  description: string
  email: UrlType
  phone: string
}

const ContactContent: React.FC<ContactContentProps> = (props) => {
  const {
    title,
    description,
    email,
    phone,
    facebook,
    linkedin,
    instagram,
    twitter,
  } = props

  return (
    <div>
      <SectionHeading>{title}</SectionHeading>
      <p className="mt-4">{description}</p>
      <div className="mt-4 mb-12">
        <div className="pb-3">
          <b className="text-grey-600">Email: </b>
          <a
            href={`mailto: ${email}`}
            className="inline text-blue-500 hover:underline"
          >
            {email as string}
          </a>
        </div>
        <div>
          <b className="text-grey-600">Phone: </b>
          <a
            href={`tel: ${email}`}
            className="inline text-blue-500 hover:underline"
          >
            {phone}
          </a>
        </div>
      </div>

      <h3 className="text-grey-600 text-2xl font-normal mb-6">
        Connect With Us
      </h3>
      <div>
        <Social
          facebook={facebook}
          linkedin={linkedin}
          instagram={instagram}
          twitter={twitter}
        />
      </div>
    </div>
  )
}

export default ContactContent
