import { Meta, Story } from "@storybook/react";

import SectionHeading, { SectionHeadingProps } from "./SectionHeading";

export default {
  title: "ui/atoms/SectionHeading",
  component: SectionHeading,
  argTypes: {},
} as Meta;

const Template: Story<SectionHeadingProps> = (args, { globals }) => (
  <SectionHeading {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...SectionHeading.defaultProps,
  children: "Section Heading",
};
