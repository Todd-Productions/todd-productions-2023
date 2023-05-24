import type { Meta, StoryObj } from "@storybook/react"

import SectionHeading from "./SectionHeading"
import Section from "../Section/Section"
import Wrapper from "../Wrapper/Wrapper"

const meta: Meta<typeof SectionHeading> = {
  title: "ui/atoms/SectionHeading",
  component: SectionHeading,
}

export default meta

type Story = StoryObj<typeof SectionHeading>

export const Default: Story = {
  render: (args) => (
    <Section>
      <Wrapper>
        <SectionHeading {...args} />
      </Wrapper>
    </Section>
  ),
  args: {
    ...SectionHeading.defaultProps,
    children: "Section Heading",
  },
}
