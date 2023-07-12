import React from "react"

import { Section, Wrapper } from "../../atoms"
import { ContactForm, ContactContent } from "../../molecules"
import { ContactContentProps } from "../../molecules/ContactContent/ContactContent"

export interface ContactProps extends ContactContentProps {}

const ContactSection: React.FC<ContactProps> = (props) => {
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
    <Section>
      <Wrapper>
        <div className="grid px-6 md:px-0 md:grid-cols-2 gap-x-20">
          <ContactContent
            title={title}
            description={description}
            email={email}
            phone={phone}
            facebook={facebook}
            linkedin={linkedin}
            instagram={instagram}
            twitter={twitter}
          />
          <ContactForm />
        </div>
      </Wrapper>
    </Section>
  )
}

export default ContactSection
