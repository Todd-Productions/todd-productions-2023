import type { Meta, StoryObj } from "@storybook/react"

import PageInfoSection from "./PageInfoSection"

const meta: Meta<typeof PageInfoSection> = {
  title: "ui/molecules/PageInfoSection",
  component: PageInfoSection,
}

export default meta

type Story = StoryObj<typeof PageInfoSection>

export const Default: Story = {
  render: (args) => <PageInfoSection {...args} />,
  args: {
    title: "VIDEO PRODUCTION",
    description:
      "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
    button: {
      link: "/",
      label: "see video types",
    },
    videoLink: "https://www.youtube.com/embed/u31qwQUeGuM",
    bannerImg: "https://source.unsplash.com/random",
  },
}
