import type { Meta, StoryObj } from "@storybook/react"

import SampleCards from "./SampleCardSection"

const meta: Meta<typeof SampleCards> = {
  title: "ui/molecules/SampleCardSection",
  component: SampleCards,
}

export default meta

type Story = StoryObj<typeof SampleCards>

export const Default: Story = {
  render: (args) => <SampleCards {...args} />,
  args: {
    title: "EXAMPLES OF PROMOTIONAL / SALES",
    isCard: false,
    cards: [
      {
        title: "Food Labeling Product",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
      {
        title: "Worker Training product",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
      {
        title: "'Signature Decks' Build Time-lapse",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
      {
        title: "Restaurant Menu Product",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
      {
        title: "'Absolute Haitian' Machine Assembly Time-lapse",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
      {
        title: "industrial manufacturing product",
        img: "https://source.unsplash.com/random",
        largeImg: "",
        slug: "",

        button: {
          label: "contact us",
          link: "/",
        },
      },
    ],
  },
}
