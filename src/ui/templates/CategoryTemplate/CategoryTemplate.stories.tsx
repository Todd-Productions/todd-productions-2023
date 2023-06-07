import type { Meta, StoryObj } from "@storybook/react"

import CategoryTemplate from "./CategoryTemplate"

const meta: Meta<typeof CategoryTemplate> = {
  title: "ui/templates/CategoryTemplate",
  component: CategoryTemplate,
}

export default meta

type Story = StoryObj<typeof CategoryTemplate>

export const Default: Story = {
  args: {
    ...CategoryTemplate.defaultProps,
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
