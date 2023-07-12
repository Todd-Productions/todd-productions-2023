import type { Meta, StoryObj } from "@storybook/react"

import SEOPricing from "./SEOPricing"

const meta: Meta<typeof SEOPricing> = {
  title: "ui/molecules/SEOPricing",
  component: SEOPricing,
}

export default meta

type Story = StoryObj<typeof SEOPricing>

export const Default: Story = {
  render: (args) => <SEOPricing {...args} />,
  args: {
    packages: [
      {
        type: "PROFESSIONAL",
        price: "150",
        priceFrequency: "a month",
        highlights: [
          "Keyword research based on site analytical data",
          "Adjustment of HTML tags including title and meta",
          "Increased MONTHLY updates for higher rankings",
        ],
      },
      {
        type: "ADVANCED",
        price: "375",
        priceFrequency: "every 3 months",
        highlights: [
          "Keyword research based on site analytical data",
          "Adjustment of HTML tags including title and meta",
          "Increased MONTHLY updates for higher rankings",
        ],
      },
      {
        type: "STANDARD",
        price: "600",
        priceFrequency: "every 6 months",
        highlights: [
          "Keyword research based on site analytical data",
          "Adjustment of HTML tags including title and meta",
          "Increased MONTHLY updates for higher rankings",
        ],
      },
    ],
  },
}
