import { Meta, Story } from "@storybook/react";

import Header, { HeaderProps } from "./Header";

export default {
  title: "ui/molecules/Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args, { globals }) => (
  <Header {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...Header.defaultProps,
};
