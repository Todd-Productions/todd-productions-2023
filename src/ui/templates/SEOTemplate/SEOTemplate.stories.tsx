import type { Meta, StoryObj } from "@storybook/react"

import SEOTemplate from "./SEOTemplate"

const meta: Meta<typeof SEOTemplate> = {
  title: "ui/templates/SEOTemplate",
  component: SEOTemplate,
}

export default meta

type Story = StoryObj<typeof SEOTemplate>

export const Default: Story = {
  args: {
    ...SEOTemplate.defaultProps,
    crumbs: [
      {
        label: "Web Services",
        url: "/web-services",
      },
      {
        label: "Search Engine Optimization",
        url: "/web-services/search-engine-optimization",
      },
    ],
    facebook: "https://facebook",
    twitter: "https://facebook",
    youtube: "https://facebook",
    instagram: "https://facebook",
    linkedin: "https://facebook",
    headerLinks: [
      {
        label: "Video",
        url: "/",
      },
      {
        label: "Web",
        url: "/",
      },
      {
        label: "Other",
        url: "/",
      },
      {
        label: "Who We Are",
        url: "/",
      },
      {
        label: "Contact",
        url: "/",
      },
    ],
    footerLinks: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Video Production",
        url: "/",
      },
      {
        label: "Web Services",
        url: "/",
      },
      {
        label: "Other",
        url: "/",
      },
      {
        label: "Who We Are",
        url: "/",
      },
      {
        label: "Contact Us",
        url: "/",
      },
    ],
    seoTitle: "OUR SEO MAINTENANCE PACKAGES",
    seoDescription:
      "* All Todd Productions Inc. SEO maintenance packages required initial setup fee. Setup SEO will include research site structure, initial keyword research, third party service setup (such as Google Business and Yelp), and other setup processes. Please contact Todd Productions Inc. for initial setup cost.",
    seoPackages: [
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
    topCTAData: {
      title: "CONQUER THE WEB",
      description:
        "Websites are the digital home of a business! While social media sites can serve as great marketing for you, businesses and organizations need to capitalize on both. Designing a website for your company or product can seem overwhelming with all the different paths you can follow. Even updating your existing site can be time-consuming and confusing. Furthermore, many sites today are not properly optimized, causing them to load slowly or to not properly display content. At Todd Productions Inc. we’ll work with you to make your website the best that it can be. Whether it’s a pre-existing site that you want to optimize, or you are seeking to build an entirely new corporate site or a marketing site, we can work with you and your budget to get you the best result.",
      bannerImg: "https://source.unsplash.com/random",
      button: {
        link: "/contact-us",
        label: "connect with us",
      },
    },
  },
}
