import type { Meta, StoryObj } from "@storybook/react"

import Breadcrumbs from "./Breadcrumbs"

const meta: Meta<typeof Breadcrumbs> = {
  title: "ui/molecules/Breadcrumbs",
  component: Breadcrumbs,
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    ...Breadcrumbs.defaultProps,
    crumbs: [
      {
        label: "Here",
        url: "/",
      },
      {
        label: "Something",
        url: "/something",
      },
    ],
  },
}
