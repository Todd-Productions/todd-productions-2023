import { Meta, Story } from "@storybook/react";

import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";

export default {
  title: "ui/molecules/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as Meta;

const Template: Story<BreadcrumbsProps> = (args, { globals }) => (
  <Breadcrumbs {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...Breadcrumbs.defaultProps,
  crumbs: [
    {
      label: "Here",
      url: "/",
    },
    {
      label: "Something",
      url: "/something",
    },
  ],
};
