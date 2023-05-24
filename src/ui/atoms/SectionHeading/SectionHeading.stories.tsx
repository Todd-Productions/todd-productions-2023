import { Meta, Story } from "@storybook/react"

import SectionHeading, { SectionHeadingProps } from "./SectionHeading"
import Section from "../Section/Section"
import Wrapper from "../Wrapper/Wrapper"

export default {
  title: "ui/atoms/SectionHeading",
  component: SectionHeading,
  argTypes: {},
} as Meta

const Template: Story<SectionHeadingProps> = (args, { globals }) => (
  <Section>
    <Wrapper>
      <SectionHeading {...args} {...globals} />
    </Wrapper>
  </Section>
)

export const Default = Template.bind({})
Default.args = {
  ...SectionHeading.defaultProps,
  children: "Section Heading",
}
