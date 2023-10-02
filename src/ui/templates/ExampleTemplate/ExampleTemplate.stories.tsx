import type { Meta, StoryObj } from "@storybook/react"

import ExampleTemplate from "./ExampleTemplate"

const meta: Meta<typeof ExampleTemplate> = {
  title: "ui/templates/ExampleTemplate",
  component: ExampleTemplate,
}

export default meta

type Story = StoryObj<typeof ExampleTemplate>

export const Default: Story = {
  args: {
    title: "VIDEO PRODUCTION",
    description:
      "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
    button: {
      link: "/",
      label: "see video types",
    },
    videoLink: "https://www.youtube.com/embed/u31qwQUeGuM",
  },
}
