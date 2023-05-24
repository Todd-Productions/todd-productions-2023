import { Meta, Story } from "@storybook/react"

import MainLayout, { MainLayoutProps } from "./MainLayout"

export default {
  title: "ui/organisms/MainLayout",
  component: MainLayout,
  argTypes: {},
} as Meta

const Template: Story<MainLayoutProps> = (args, { globals }) => (
  <MainLayout {...args} {...globals} />
)

export const Default = Template.bind({})
Default.args = {
  ...MainLayout.defaultProps,
  crumbs: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Video Production",
      url: "/video",
    },
  ],
}
