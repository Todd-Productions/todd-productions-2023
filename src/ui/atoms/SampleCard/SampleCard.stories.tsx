import type { Meta, StoryObj } from "@storybook/react"

import SampleCard from "./SampleCard"

const meta: Meta<typeof SampleCard> = {
  title: "ui/atoms/SampleCard",
  component: SampleCard,
}

export default meta

type Story = StoryObj<typeof SampleCard>

export const Default: Story = {
  render: (args: any) => <SampleCard {...args} />,
  args: {
    card: {
      title: "Title Here",
      img: "https://picsum.photos/700/700",
      largeImg: "https://picsum.photos/700/700",
      url: "/",
    },
  },
}
