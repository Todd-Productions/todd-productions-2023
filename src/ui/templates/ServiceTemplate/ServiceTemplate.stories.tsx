import type { Meta, StoryObj } from "@storybook/react"

import ServiceTemplate from "./ServiceTemplate"

const meta: Meta<typeof ServiceTemplate> = {
  title: "ui/templates/ServiceTemplate",
  component: ServiceTemplate,
}

export default meta

type Story = StoryObj<typeof ServiceTemplate>

export const Default: Story = {
  args: {
    ...ServiceTemplate.defaultProps,
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
