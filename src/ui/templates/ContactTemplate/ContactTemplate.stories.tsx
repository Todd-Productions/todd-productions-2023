import type { Meta, StoryObj } from "@storybook/react"

import ContactTemplate from "./ContactTemplate"

const meta: Meta<typeof ContactTemplate> = {
  title: "ui/templates/ContactTemplate",
  component: ContactTemplate,
}

export default meta

type Story = StoryObj<typeof ContactTemplate>

export const Default: Story = {
  args: {
    ...ContactTemplate.defaultProps,
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
    footerLinks: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Video Production",
        url: "/",
      },
      {
        label: "Web Services",
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
        label: "Contact Us",
        url: "/",
      },
    ],
  },
}
