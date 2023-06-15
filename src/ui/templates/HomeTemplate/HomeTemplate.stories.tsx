import type { Meta, StoryObj } from "@storybook/react"

import HomeTemplate from "./HomeTemplate"

const meta: Meta<typeof HomeTemplate> = {
  title: "ui/templates/HomeTemplate",
  component: HomeTemplate,
}

export default meta

type Story = StoryObj<typeof HomeTemplate>

export const Default: Story = {
  args: {
    ...HomeTemplate.defaultProps,
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
    videoData: {
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "VIDEO PRODUCTION",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    },
    webData: {
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "web services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    },
    otherData: {
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "other services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    },
  },
}
