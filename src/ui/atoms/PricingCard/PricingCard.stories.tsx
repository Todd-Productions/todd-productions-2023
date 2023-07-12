import type { Meta, StoryObj } from "@storybook/react"

import PricingCard from "./PricingCard"

const meta: Meta<typeof PricingCard> = {
  title: "ui/atoms/PricingCard",
  component: PricingCard,
}

export default meta

type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
  render: (args: any) => <PricingCard {...args} />,
  args: {
    service: {
      type: "PROFESSIONAL",
      price: "150",
      priceFrequency: "a month",
      highlights: [
        "Keyword research based on site analytical data",
        "Adjustment of HTML tags including title and meta",
        "Increased MONTHLY updates for higher rankings",
      ],
    },
  },
}
