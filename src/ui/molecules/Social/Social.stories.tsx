import type { Meta, StoryObj } from "@storybook/react"

import { Section } from "../../atoms"
import Social from "./Social"

const meta: Meta<typeof Social> = {
  title: "ui/molecules/Social",
  component: Social,
}

export default meta

type Story = StoryObj<typeof Social>

export const Default: Story = {
  render: (args) => (
    <Section>
      <Social {...args} />
    </Section>
  ),
  args: {
    ...Social.defaultProps,
    facebook: "https://facebook",
    twitter: "https://facebook",
    youtube: "https://facebook",
    instagram: "https://facebook",
    linkedin: "https://facebook",
    echo: true,
  },
}
