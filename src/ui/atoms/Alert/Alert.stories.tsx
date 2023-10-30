import { Meta, Story } from "@storybook/react"

import Alert, { AlertProps } from "./Alert"

export default {
  title: "ui/atoms/Alert",
  component: Alert,
  argTypes: {},
} as Meta

const Template: Story<AlertProps> = (args, { globals }) => (
  <Alert {...args} {...globals} />
)

export const Default = Template.bind({})
Default.args = {
  ...Alert.defaultProps,
  children: "Content will be going within here",
  color: "default",
}
