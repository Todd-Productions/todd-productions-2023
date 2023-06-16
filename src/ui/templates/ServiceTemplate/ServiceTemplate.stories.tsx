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
    bannerImg: "https://source.unsplash.com/random",
    contentBlocks: [
      {
        imageSrc: "https://source.unsplash.com/random",
        imageAlt: "",
        title: "VIDEO PRODUCTION",
        subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
        textContent:
          "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
        buttonLink: "/",
        buttonText: "see video types",
      },
      {
        imageSrc: "https://source.unsplash.com/random",
        imageAlt: "",
        title: "VIDEO PRODUCTION",
        subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
        textContent:
          "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
        buttonLink: "/",
        buttonText: "see video types",
        imgleft: true,
      },
    ],
  },
}
