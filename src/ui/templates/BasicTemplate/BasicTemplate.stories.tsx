import type { Meta, StoryObj } from "@storybook/react"

import BasicTemplate from "./BasicTemplate"

const meta: Meta<typeof BasicTemplate> = {
  title: "ui/templates/BasicTemplate",
  component: BasicTemplate,
}

export default meta

type Story = StoryObj<typeof BasicTemplate>

export const Default: Story = {
  args: {
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
    title: "20+ YEARS OF EXPERIENCE",
    description:
      "Owner Todd Stanton began his business in 1984 shooting and editing videos for weddings. The business continued to grow, and in 1999, Todd Productions became a full service multi-media firm, integrating the latest technology and cutting-edge design methods into every client project. In a broad yet focused sense, Todd Productions, Inc. specializes in every type of video production — from small, intimate events to large, corporate productions for local, regional and global companies. Web design and development, web hosting, digital and printed media, and an array of Internet supportive tools are also part of Todd Productions Inc.’ s capabilities. Our goal is to provide every client with a comprehensive and sensible solution with integrity, meaning, and the utmost care. After all, the work we do for our clients reflects OUR image. So we treat every project as our very own. WHAT DO YOU NEED?",
    button: {
      label: "contact us",
      link: "/",
    },
    videoLink:
      "https://www.youtube.com/watch?v=19XKJ8lb_AE&ab_channel=ToddProductions",
    bannerImg: "https://source.unsplash.com/random",
  },
}
