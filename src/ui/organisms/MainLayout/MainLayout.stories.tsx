import type { Meta, StoryObj } from "@storybook/react"

import MainLayout from "./MainLayout"

const meta: Meta<typeof MainLayout> = {
  title: "ui/organisms/MainLayout",
  component: MainLayout,
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Default: Story = {
  args: {
    ...MainLayout.defaultProps,
    crumbs: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Video Production",
        url: "/video",
      },
    ],
    facebook: "https://facebook",
    twitter: "https://facebook",
    youtube: "https://facebook",
    instagram: "https://facebook",
    linkedin: "https://facebook",
    headerLinks: [
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
