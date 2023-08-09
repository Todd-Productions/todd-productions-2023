import type { Meta, StoryObj } from "@storybook/react"

import SplitContentSection from "./SplitContentSection"

const meta: Meta<typeof SplitContentSection> = {
  title: "ui/molecules/SplitContentSection",
  component: SplitContentSection,
}

export default meta

type Story = StoryObj<typeof SplitContentSection>

export const Default: Story = {
  render: (args) => <SplitContentSection {...args} />,
  args: {
    imageSrc: "https://source.unsplash.com/random",
    imageAlt: "",
    heading: "VIDEO PRODUCTION",
    subHeading: "SALES, COMMERICAL, MUSIC, AND MORE",
    content:
      "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
    button: {
      link: "/",
      label: "see video types",
    },
  },
}
