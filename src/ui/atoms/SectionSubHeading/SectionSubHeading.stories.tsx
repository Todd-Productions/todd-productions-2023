import { Meta, Story } from "@storybook/react"

import SectionSubHeading, { SectionSubHeadingProps } from "./SectionSubHeading"
import Section from "../Section/Section"

export default {
  title: "ui/atoms/SectionSubHeading",
  component: SectionSubHeading,
  argTypes: {},
} as Meta

const Template: Story<SectionSubHeadingProps> = (args, { globals }) => (
  <Section>
    <SectionSubHeading {...args} {...globals} />
  </Section>
)

export const Default = Template.bind({})
Default.args = {
  ...SectionSubHeading.defaultProps,
  children: "Section Sub Heading",
}
