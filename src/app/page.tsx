"use client"

import { HomeTemplate } from "../ui/templates"

import { navLinks, footerLinks } from "../../siteMeta"

// export const getDefaultProps = (data: any) => ({
//   title: data.seoTitle,
//   description: data.seoDescription,
//   crumbs: data.crumbs,
//   headerLinks: navLinks,
//   footerLinks,
//   socialLinks,
// })

const HomePage = () => (
  <HomeTemplate
    topCTAData={{
      title: "e=mc2",
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
            clients in the business, education, health care, and broadcast
            fields. Let us help you get your business noticed!
          </p>
        </div>
      ),
      button: {
        label: "connect with us",
        link: "/",
      },
    }}
    videoData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "VIDEO PRODUCTION",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    webData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "web services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    otherData={{
      imageSrc: "https://source.unsplash.com/random",
      imageAlt: "",
      title: "other services",
      subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
      textContent:
        "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
      buttonLink: "/",
      buttonText: "see video types",
    }}
    footerLinks={footerLinks}
    headerLinks={navLinks}
  />
)

export default HomePage
