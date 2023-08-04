"use client"

import { SEOTemplate } from "../../../ui/templates"
import { navLinks, footerLinks } from "../../../../siteMeta"

const SEOPage = () => (
  <SEOTemplate
    seoTitle="OUR SEO MAINTENANCE PACKAGES"
    seoDescription="* All Todd Productions Inc. SEO maintenance packages required initial setup fee. Setup SEO will include research site structure, initial keyword research, third party service setup (such as Google Business and Yelp), and other setup processes. Please contact Todd Productions Inc. for initial setup cost."
    seoPackages={[
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
    ]}
    title="ENHANCE YOUR SEARCH PRESENCE"
    description="Everyone wants their website to be at the top of the list for searches. And companies pay lots of money to make that happen. But experienced web developers avoid the paid ads at the top of a search to get to what they consider a more viable source. At Todd Productions, we believe in organic (non-paid) methods, such as Search Engine Optimization, to get our clients’ websites moved up the list. There are many techniques to code a site to help make that happen. Let us sit down with you to discuss how we can help your business website get to the top of the search engine list."
    videoBtn={{
      link: "/",
      label: "boost your seo today",
    }}
    videoLink="https://www.youtube.com/embed/u31qwQUeGuM"
    headerLinks={navLinks}
    footerLinks={footerLinks}
  />
)

export default SEOPage
