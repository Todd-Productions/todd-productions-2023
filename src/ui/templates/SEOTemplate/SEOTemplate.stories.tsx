import type { Meta, StoryObj } from "@storybook/react"

import SEOTemplate from "./SEOTemplate"

const meta: Meta<typeof SEOTemplate> = {
  title: "ui/templates/SEOTemplate",
  component: SEOTemplate,
}

export default meta

type Story = StoryObj<typeof SEOTemplate>

export const Default: Story = {
  args: {
    ...SEOTemplate.defaultProps,
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
