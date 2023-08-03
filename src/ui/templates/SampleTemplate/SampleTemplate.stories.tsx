import type { Meta, StoryObj } from "@storybook/react"

import SampleTemplate from "./SampleTemplate"

const meta: Meta<typeof SampleTemplate> = {
  title: "ui/templates/SampleTemplate",
  component: SampleTemplate,
}

export default meta

type Story = StoryObj<typeof SampleTemplate>

export const Default: Story = {
  args: {
    crumbs: [
      {
        label: "Web Services",
        url: "/web-services",
      },
      {
        label: "Search Engine Optimization",
        url: "/web-services/search-engine-optimization",
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
    samples: [
      {
        title: "Food Labeling Product",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "Worker Training product",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "'Signature Decks' Build Time-lapse",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "Restaurant Menu Product",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "'Absolute Haitian' Machine Assembly Time-lapse",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "industrial manufacturing product",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
    ],
    samplesTitle: "EXAMPLES OF PROMOTIONAL / SALES",
    topCTAData: {
      title: "PROMOTE YOUR PRODUCT OR EVENT",
      description: (
        <div>
          <p>
            Promotional videos are an effective way to invite someone to a
            conference, event, open house, or even a webinar. They promote your
            event while giving your audience a feel for your brand. Promotional
            videos should include brief, but specific details of your event with
            some type of Call To Action to encourage the viewer to sign up or
            save the date. The goal is to boost event attendance and generate.
            potential leads.
          </p>
        </div>
      ),
      button: {
        link: "/",
        label: "connect with us",
      },
    },
    bannerImg: "https://source.unsplash.com/random",
  },
}
