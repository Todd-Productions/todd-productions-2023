import type { Meta, StoryObj } from "@storybook/react"

import BasicContentSection, { IBasicContent } from "./BasicContentSection"

const meta: Meta<typeof BasicContentSection> = {
  title: "ui/molecules/BasicContentSection",
  component: BasicContentSection,
}

export default meta

type Story = StoryObj<typeof BasicContentSection>

export const Default: Story = {
  render: (args) => <BasicContentSection {...args} />,
  args: {
    title: "VIDEO PRODUCTION",
    textContent:
      "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
    buttonLink: "/",
    buttonText: "see video types",
  },
}
