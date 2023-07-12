import type { Meta, StoryObj } from "@storybook/react"

import SampleCards from "./SampleCards"

const meta: Meta<typeof SampleCards> = {
  title: "ui/molecules/SampleCards",
  component: SampleCards,
}

export default meta

type Story = StoryObj<typeof SampleCards>

export const Default: Story = {
  render: (args) => <SampleCards {...args} />,
  args: {
    title: "EXAMPLES OF PROMOTIONAL / SALES",
    cards: [
      {
        title: "Title Here",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "Title Here",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
      {
        title: "Title Here",
        img: "https://source.unsplash.com/random",
        url: "/",
      },
    ],
  },
}
