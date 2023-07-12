import type { Meta, StoryObj } from "@storybook/react"

import ContactContent from "./ContactContent"

const meta: Meta<typeof ContactContent> = {
  title: "ui/molecules/ContactContent",
  component: ContactContent,
}

export default meta

type Story = StoryObj<typeof ContactContent>

export const Default: Story = {
  args: {
    title: "let's talk business",
    description:
      "We appreciate your visit to our website. We look forward to hearing from you. Give us a call or email us... whatever is convenient for you.",
    email: "contact@toddprod.com",
    phone: "419-290-0794",
    facebook: "/",
    linkedin: "/",
    instagram: "/",
    twitter: "/",
  },
}
