import type { Meta, StoryObj } from "@storybook/react"

import SampleImage from "./SampleImage"

const meta: Meta<typeof SampleImage> = {
  title: "ui/atoms/SampleImage",
  component: SampleImage,
}

export default meta

type Story = StoryObj<typeof SampleImage>

export const Default: Story = {
  render: (args: any) => <SampleImage {...args} />,
  args: {
    card: {
      title: "Title Here",
      img: "https://picsum.photos/700/700",
      url: "/",
      largeImg: "https://picsum.photos/700/700",
    },
  },
}
