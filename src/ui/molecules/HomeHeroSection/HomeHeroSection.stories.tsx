import type { Meta, StoryObj } from "@storybook/react"

import HomeHeroSection from "./HomeHeroSection"

const meta: Meta<typeof HomeHeroSection> = {
  title: "ui/molecules/HomeHeroSection",
  component: HomeHeroSection,
}

export default meta

type Story = StoryObj<typeof HomeHeroSection>

export const Default: Story = {
  render: (args) => <HomeHeroSection {...args} />,
  args: {
    title: "E=MC2",
    description: (
      <div>
        <p>In 1905, Einstein got it right. We’ve just modernized it.</p>
        <p>
          At Todd Productions Inc., e=mc2 means electronic media content for
          clients. We help businesses and organizations promote their products
          and services by developing content for electronic media (Internet,
          Social Media, TV). That includes video production, web design / web
          development, web hosting, and many more services.
        </p>
        <p>
          Based in Northwest Ohio since 1999, Todd Productions Inc. serves
          clients in the business, education, health care, and broadcast fields.
          Let us help you get your business noticed!
        </p>
      </div>
    ),
    button: {
      link: "/",
      label: "see video types",
    },
    bannerImg: "https://source.unsplash.com/random",
  },
}
