import type { Meta, StoryObj } from "@storybook/react"

import SectionSubHeading from "./SectionSubHeading"
import Section from "../Section/Section"

const meta: Meta<typeof SectionSubHeading> = {
  title: "ui/atoms/SectionSubHeading",
  component: SectionSubHeading,
}

export default meta

type Story = StoryObj<typeof SectionSubHeading>

export const Default: Story = {
  render: (args) => (
    <Section>
      <SectionSubHeading {...args} />
    </Section>
  ),
  args: {
    ...SectionSubHeading.defaultProps,
    children: "Section Sub Heading",
  },
}
