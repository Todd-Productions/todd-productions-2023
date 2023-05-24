import type { Meta, StoryObj } from "@storybook/react"

import Header from "./Header"

const meta: Meta<typeof Header> = {
  title: "ui/molecules/Header",
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    ...Header.defaultProps,
    facebook: "https://facebook",
    twitter: "https://facebook",
    youtube: "https://facebook",
    instagram: "https://facebook",
    linkedin: "https://facebook",
    links: [
      {
        label: "Video",
        url: "/",
      },
      {
        label: "Web",
        url: "/",
      },
      {
        label: "Other",
        url: "/",
      },
      {
        label: "Who We Are",
        url: "/",
      },
      {
        label: "Contact",
        url: "/",
      },
    ],
  },
}
